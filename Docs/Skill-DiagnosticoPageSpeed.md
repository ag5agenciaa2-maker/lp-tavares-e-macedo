---
name: diagnostico-PageSpeed-Api
description: Consulta automatizada à API oficial do Google PageSpeed Insights para uma URL específica e aplicação automática das correções no código-fonte correspondente.
---

# Skill: Diagnóstico Oficial PageSpeed Insights (API)

## 📌 Propósito
Esta skill permite que a IA acione a API oficial do Google PageSpeed Insights (Lighthouse v5) de forma automatizada. Através dessa requisição, a IA obtém um relatório formatado das pontuações reais da página em produção (Mobile e Desktop) para ler, diagnosticar e aplicar correções no código-fonte local.

Diferente da versão "Refiner", que apenas deduz o que precisa melhorar, essa skill trabalha com **dados reais**.

---

## 🚀 Quando e Como Usar

**Trigger / Gatilho:**
`/diagnostico-pagespeed [URL_DO_SITE]`

**Exemplo:**
`/diagnostico-pagespeed https://www.meusite.ag5agencia.com.br`

**Quando usar:**
- Após o deploy de um projeto para auditar o PageSpeed Real.
- Quando o usuário informar que o site está lento ou as métricas estão baixas no Lighthouse e pedir uma solução definitiva.

---

## ⚙️ Fluxo de Trabalho (Workflow da IA)

Sempre que a skill for acionada através do gatilho ou solicitação explícita de "verificar pagespeed", a IA **deverá executar os seguintes passos na ordem descrita**:

### Passo 1: Disparo da Requisição via `read_url_content`
A IA não precisa rodar comandos no terminal (como CURL limitados em Windows). Ela deverá concatenar a URL solicitada dentro da API v5 pública do Google PageSpeed usando a sua ferramenta nativa: `read_url_content`.

**Endpoints (Desktop e Mobile):**
- Mobile: `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=[URL_SOLICITADA]&strategy=mobile`
- Desktop: `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=[URL_SOLICITADA]&strategy=desktop`

A IA deve, **por baixo dos panos e sem interação externa**, disparar a ferramenta `read_url_content` nestes dois links (focando prioritariamente na estratégia "mobile").

### Passo 2: Extração de Dados (Diagnóstico)
O JSON devolvido pela API do Google conterá objetos gigantes. A IA não deve expor esse JSON puro para o usuário. Ela deve extrair:

1.  **Os Scores:** Categorias de `performance`, `accessibility`, `best-practices` e `seo`.
2.  **Métricas Base (Core Web Vitals):** LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift) e TBT (Total Blocking Time).
3.  **A lista negra (Auditorias Reprovadas - `metrics < 1`):** Entrar no objeto `lighthouseResult.audits` e mapear quais regras quebraram (ex: `unminified-css`, `render-blocking-resources`, `uses-optimized-images`, `uses-rel-preconnect`, `is-crawlable`, etc.).

### Passo 3: Mapeamento no Código Local
Usando as ferramentas de busca (`grep_search` ou `view_file`), a IA cruzará a URL/caminho citada com os arquivos que o usuário tem localmente abertos na Workspace:

- Identificar o `index.html` ou arquivos correspondentes associados ao domínio escaneado.
- Procurar onde estão os recursos bloqueantes, css não minificados (ou que permitam compressão local), imagens apontadas no CLS para adicionar attributos (`width/height`), onde inserir preload tags, etc.

### Passo 4: Resolução e Modificação Ativa
Utilizando a ferramenta `multi_replace_file_content`, a IA deve aplicar ativamente todas as mudanças possíveis:
- Inserir/modificar tags `<link rel="preload">`, `<link rel="preconnect">`.
- Mudar tags que causam blocos, como atrasar/`defer`/`async` scripts JS.
- Mover/Minificar pequenos pedaços de CSS.
- Arrumar o atributo "alt" em imagens específicas apontadas no Accessibilidade (a11y).
- Otimizar Canonical Links e Meta-descriptions citadas pelo robô de SEO.

*Regra de Ouro (Proteção AG5)*: A IA jamais deverá reescrever blocos HTML que possam corromper o layout visual (quebrar classes de utilitários como Tailwind ou estilos customizados de Vanilla CSS). Caso a modificação seja visual, a IA deve "pausar e consultar" o usuário.

### Passo 5: Geração e Apresentação do Relatório

Após alterar e reescrever as otimizações detectadas pela API do Google, a IA **deve responder** ao usuário no seguinte formato Markdown exato:

```markdown
## 📊 Análise Oficial e Ação Executada

Consultei o Google PageSpeed Insights (API nativa v5) para o site: **[URL_SOLICITADA]**

### 📉 Diagnóstico Anterior (Device: Mobile)
* **Performance:** [NOTA]/100
* **Acessibilidade:** [NOTA]/100
* **Práticas Recomendadas:** [NOTA]/100
* **SEO:** [NOTA]/100

### 🛠️ Problemas Detectados Oficialmente
[Listar os 3 ou 4 problemas de maior impacto com a métrica culpada destacada. Ex: *Render-blocking resources (Atrasou a inicialização em XXXms)*]

### ✅ Correções Aplicadas Imediatamente ao Fonte
1. [Ação Exata que a IA executou no arquivo local correspondente. Ex: Adicionei defer no JS principal `script.js` e criei tag `preload` para a imagem `banner.jpg`]
...

### ⏳ Ações Pendentes que o Operador Deve Fazer (Checklist Infra/Manual)
[Avisar sobre ações fora do escopo do front-end que a IA não pode editar, como ligar GZIP no servidor (`.htaccess`) ou converter imagens fisicamente para WebP/AVIF que ultrapassam o tamanho permitido.]
```

---

## 🚫 Restrições
- Não forneça o JSON de resposta da API na tela. Trabalhe tudo na "memória" da IA.
- Foco supremo na nota **Mobile**, por exigência das políticas (Mobile-First Indexing). 
- Caso não haja acesso livre à internet da IA por bloqueios temporários ou timeout da API do Google, informe o erro de forma simpática e mude automaticamente a tática para a **Auditoria Interna Cega** (Skill-PageSpeed), escaneando o código diretamente.
- A IA não fará o commit/publish depois do conserto. Somente fará as edições. O usuário se responsabiliza pelo deploy posterior.
