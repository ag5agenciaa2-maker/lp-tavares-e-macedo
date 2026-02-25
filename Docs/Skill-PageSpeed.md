---
name: pagespeed-lh-audit-refiner
description: Analisa e otimiza HTML/CSS/JS existentes para maximizar as notas de Lighthouse/PageSpeed (Performance, Acessibilidade, Práticas recomendadas e SEO), buscando 100/100 em mobile e desktop, preservando o layout visual e pedindo permissão para qualquer alteração perceptível.
---

## Purpose

Esta skill atua como um **auditor e refinador de código front-end** baseado no PageSpeed Insights e Lighthouse.  
Ela lê os arquivos da pasta (HTML, CSS, JS, robots.txt e afins), cruza o que encontra com os tipos de métricas e auditorias mostrados no relatório do Lighthouse (Perf Metrics, Core Web Vitals, grupos de auditorias de SEO, Acessibilidade, Práticas recomendadas, Insights, Itens manuais, etc.) e aplica correções internas para tentar chegar o mais perto possível de **100/100 em todas as categorias**, principalmente em **mobile**.[file:47][web:8][web:16]  

O foco é **melhorar o score sem alterar o layout visível**; qualquer mudança visual relevante deve ser explicada e aprovada pelo usuário antes.

---

## When To Use This Skill

Use esta skill quando:

- O usuário enviar uma pasta de site (HTML, CSS, JS, robots.txt, imagens, etc.) e pedir para:
  - “Melhorar PageSpeed”,  
  - “Aumentar nota do Lighthouse/PageSpeed”,  
  - “Chegar perto de 100/100 em Performance/Acessibilidade/Práticas/SEO (especialmente mobile)”.[web:8]  
- O objetivo for **ajustar o código existente** sem redesign visual completo.

Não use esta skill para:

- Criar um site novo do zero (use uma skill de criação).  
- Refazer layout/branding por completo (isso é outra skill).

---

## Constraints

- Não alterar layout visual percebido (estrutura, cores, fontes, espaçamentos, componentes, animações visíveis) sem avisar.  
- Quando uma correção impactar visualmente:
  - Explicar qual métrica/auditoria melhora (ex.: LCP, TBT, CLS, INP, `forced-reflow-insight`, `link-text`, etc.).[file:47]  
  - Descrever o impacto visual.  
  - Perguntar se o usuário autoriza antes de fornecer o novo código.  
- Priorizar sempre soluções internas e “invisíveis” ao usuário:
  - Atributos HTML.  
  - Ordem/forma de carregamento de CSS/JS.  
  - Pequenos ajustes em CSS e JS que não mudem aparência.  

---

## Goals & Targets

Meta: aproximar as notas de **Performance, Accessibility, Best Practices e SEO de 100/100** em Lighthouse, em **mobile** (prioridade) e **desktop**.[web:8][web:16]

### Métricas principais

Com base em Perf Metrics e Core Web Vitals:[file:47][web:8]

- FCP – First Contentful Paint.  
- LCP – Largest Contentful Paint (Core Web Vital).  
- TBT – Total Blocking Time.  
- CLS – Cumulative Layout Shift (Core Web Vital).  
- INP – Interaction to Next Paint (Core Web Vital).  

### Auditorias típicas (IDs/tipos extraídos do relatório)

A skill deve pensar nessas auditorias mesmo sem ver o JSON, mapeando-as para o código:[file:47]

- SEO:
  - `is-crawlable` (página indexável).  
  - `robots-txt` (arquivo válido).  
  - `http-status-code` (status 2xx esperado).  
  - `meta-description`.  
  - `canonical`.  
  - `hreflang`.  
  - `structured-data`.  
  - `link-text`.  

- Acessibilidade:
  - `document-title`.  
  - `image-alt`.  

- Performance/Insights:
  - Reflows forçados (`forced-reflow-insight`).  
  - Scripts bloqueantes, imagens pesadas, falta de dimensões, etc.[file:47]

A skill não garante 100/100, mas deve deixar claro o que foi atacado de cada grupo e o que depende de servidor/infra ou decisões visuais do usuário.

---

## Mobile como prioridade

- Sempre considerar **mobile** como alvo principal, pois é a visão padrão do PageSpeed Insights e geralmente a mais crítica.[web:9]  
- Priorizar correções com maior impacto em:
  - FCP/LCP (renderização rápida do conteúdo principal).  
  - CLS (layout estável).  
  - TBT/INP (responsividade da interação).  
- Buscar **100/100 em mobile e desktop**; quando houver trade-off, preferir UX/stabilidade mobile e só afetar visual com aprovação.

---

## Input Assumptions

A skill pode receber:

- Arquivos de código:
  - Um ou mais `.html`, `.css`, `.js`.  
  - `robots.txt`, manifest, service worker (se existirem).  
- Opcional: um relatório PageSpeed/Lighthouse em texto (copiado da interface) ou JSON (API v5+).[web:10][web:21]

### Se houver JSON/relatório

- Usar:
  - `lighthouseResult.categories.*.score` para entender quais áreas estão mais fracas.  
  - `lighthouseResult.audits` para priorizar auditorias `notApplicable=false` e `score<1` (falhas/parciais).  
  - `loadingExperience` / `originLoadingExperience` para entender dados de campo (CrUX), especialmente LCP/CLS/INP em mobile.[web:8][web:10][web:15]  

### Se NÃO houver JSON

- Usar heurísticas: olhar o código e supor quais auditorias típicas podem falhar (por exemplo, imagens sem `width/height` → CLS; scripts no `<head>` sem defer → TBT/LCP; ausência de `meta-description`, etc.).[file:47][web:8]

---

## High-Level Strategy

1. Analisar estrutura de arquivos e identificar o HTML principal e recursos associados.  
2. Mapear prováveis problemas de Perf/Acc/Best Practices/SEO seguindo as auditorias e métricas do Lighthouse/PageSpeed.  
3. Aplicar correções internas sem alterar visual.  
4. Propor ajustes visuais apenas quando não houver alternativa, com explicação + pedido de permissão.  
5. Devolver código refinado + resumo ligado explicitamente a métricas/auditorias.

---

## Detailed Instructions

### 1. Inspeção e contexto

- Identificar:
  - Página(s) principal(is) (ex.: `index.html`).  
  - CSS global e específicos.  
  - JS mais relevantes.  
  - `robots.txt`.  
- Se o usuário der um relatório, anotar:
  - Categorias com menor score (Performance, Accessibility, Best Practices, SEO).  
  - Principais auditorias reprovadas/medianas.[web:8][web:10]

### 2. HTML – ajustes sem mudar layout

- `<head>`:
  - `title`: garantir que exista, descritivo (ajuda em `document-title` e SEO).[file:47]  
  - `meta name="description"`: adicionar ou corrigir com texto relevante, sem afetar layout.  
  - `meta charset`, `viewport` apropriada (mobile).  
  - `link rel="canonical"`: obrigatório adicionar em **todas as páginas** para evitar punição de conteúdo duplicado.  
  - `hreflang` quando multi-idioma/região.  
  - **LCP Image Preload:** Sempre identifique a imagem principal da tela inicial (Hero image/banner) e insira `<link rel="preload" as="image" href="...">` no `<head>` para turbinar a métrica LCP.  

- `<html>`:
  - Atributo `lang` (ex.: `lang="pt-BR"`).  

- `<body>`:
  - Adicionar `alt` em imagens informativas; `alt=""` para decorativas.  
  - Identificar tags pesadas em extensões primitivas (`.jpg` / `.png`) e atualizá-las no código para carregar as contrapartes `.webp` correspondentes, se existirem na pasta.
  - Ajustar HTML para ser rastreável (`is-crawlable`): evitar bloquear conteúdo principal com JS quando não for necessário.
  - **Heading Order (Hierarquia de Títulos):** Garantir estrutura descendente sequencial exata (`H1` -> `H2` -> `H3`). O Lighthouse retira pontos severos se pular diretamente de um H2 para um H4.
  - **I-Frames:** Garantir que todo e qualquer `<iframe ...>` (mapas, vídeos) contenha um atributo `title="Descricao do iframe"` explícito, caso contrário irá falhar na averiguação de deficientes visuais.

### 3. CSS – otimizações internas

- Remover CSS evidentemente não usado (classes que nunca aparecem em nenhum HTML), quando estiver claro e seguro.  
- **Estratégia Anti-Bloqueio (Render-Blocking):**
  - Identifique e aplique a tag `<link rel="preload" as="style" ...>` antes da chamada oficial da folha de estilos CSS. Depois use o truque `<link rel="stylesheet" ... media="print" onload="this.media='all'">` para carregar de forma assíncrona, eliminando gargalos de FCP.
- Agrupar regras duplicadas e simplificar seletores muito complexos, sem mexer em resultados visuais.  
- Identificar animações pesadas e transições infinitas que afetam TBT/INP; sugerir ajustes com autorização do usuário se o efeito visual for alterado.

### 4. Scripts (JS) e recursos

- Identificar scripts no `<head>` sem `defer`/`async`:
  - Quando não forem críticos para FCP/LCP, propor `defer` ou mover para o final do `<body>`.  
  - Se houver risco de quebrar algo, explicar e pedir autorização.[web:8][web:16]  

- Reflows forçados:
  - Detectar padrões comuns (leitura/escrita repetida em layout no mesmo ciclo, loops manipulando DOM, etc.).  
  - Propor melhorias: batching, `requestAnimationFrame`, menor frequência de atualizações.[file:47]  

- Bibliotecas pesadas:
  - Se um componente JS grande estiver presente apenas para um efeito não essencial, sugerir remoção ou substituição; se isso mudar visual, seguir protocolo de aprovação.

- Imagens:
  - No HTML, garantir `width`/`height` absolutos (ou `aspect-ratio`) para **todas** as imagens para reservar espaço na tela e zerar a métrica de *Cumulative Layout Shift* (CLS).  
  - Na saída, recomendar ou aplicar conversão de formatos mais eficientes (WebP/AVIF).

### 5. Acessibilidade

- `document-title`: checar e ajustar `<title>`.  
- `image-alt`: revisar todas as imagens.[file:47]  
- Links:
  - Melhorar textos de links (`link-text`) para serem descritivos; se isso mudar o texto visível, explicar o ganho e pedir permissão.[file:47]  
- Foco/teclado:
  - Garantir que não haja remoção de outline sem substituto.
- **Áreas de Toque Tátil (Touch Targets):** 
  - Sempre verifique alinhamentos de Links e Botões mobile. Garanta aplicação de `display: inline-block; padding: 8px 0` ou superior para evitar a métrica negativa de "tap targets too small".
- **Distinção de Links (Aria-Labels):**
  - Links com o mesmo propósito/ancora ou múltiplos textos de números de telefone próximos DEVEM possuir atritutos tipo `aria-label="Função (XX) XXXXX"` exclusivos para não quebrar a varredura do software leitor de tela para deficientes visuais.
- **Taxa de Contraste (WCAG 4.5:1):**
  - Evite usar opacidades brandas (ex: `opacity: 0.5` ou `0.8`) em blocos de parágrafos normais, ou texto branco em botões com fundo de cores pasteis (baixo contraste). Suba opacidades para `>=0.9` e garanta cores de alto contrate/sólidas nas fontes.

### 6. SEO

Baseado nos IDs e conceitos do relatório Lighthouse:[file:47]

- `is-crawlable`:
  - Evitar meta robots `noindex` indevido; se existir, perguntar ao usuário antes de sugerir alteração.  

- `robots-txt`:
  - Checar se não há um `Disallow: /` global sem querer; se houver, avisar e sugerir correção.  

- `http-status-code`:
  - Indicar que a rota deve responder 2xx; se o HTML estiver em contexto de SPA/SSR, explicar ao usuário que isso depende do servidor.  

- `meta-description`:
  - Incluir meta description única e relevante.  

- `canonical`:
  - Adicionar `<link rel="canonical">` se houver risco de conteúdo duplicado.  

- `hreflang`:
  - Quando multi-idioma, sugerir configuração correta; não inventar idiomas/URLs, apenas orientar.

- `structured-data`:
  - Se o HTML contiver JSON-LD ou microdados, revisar sintaxe básica, mas sem reescrever tudo; apontar ao usuário para validação em ferramenta externa.

### 7. Best Practices

- Garantir que todos os recursos são chamados por HTTPS quando a página for HTTPS (evitar conteúdo misto).  
- Adicionar `rel="noopener noreferrer"` em links com `target="_blank"` quando apropriado.  
- Evitar uso de APIs claramente obsoletas ou padrões inseguros.

Essas mudanças são em geral invisíveis e podem ser aplicadas diretamente.

---

## Tratamento de mudanças visuais

Sempre que uma correção proposta tiver potencial de:

- Modificar animações visíveis, sliders, carrosséis, aparências de botões, layouts de seções.  
- Alterar textos de botões, headings ou CTAs de modo perceptível.

Siga este protocolo:

1. Identificar a métrica/auditoria que motiva a mudança (ex.: TBT alto, slider pesado, CLS por carrossel).[file:47]  
2. Explicar, em linguagem simples:
   - O problema técnico.  
   - A solução proposta (com alternativa mais leve).  
   - O impacto visual provável.  
3. Perguntar explicitamente se o usuário quer aplicar.  
4. Somente depois fornecer o snippet de código alterado.

---

## Output

A skill deve sempre devolver:

1. **Resumo textual estruturado**:
   - Seção “Performance”:  
     - Principais problemas e correções ligadas a FCP, LCP, TBT, CLS, INP.  
   - Seção “Acessibilidade”:  
     - Problemas como `document-title`, `image-alt`, links, foco, etc.  
   - Seção “Práticas recomendadas”:  
     - HTTPS, links externos, APIs obsoletas, scripts inseguros.  
   - Seção “SEO”:  
     - `is-crawlable`, `robots-txt`, `http-status-code`, `meta-description`, `canonical`, `hreflang`, `structured-data`, `link-text`.[file:47]  
   - Listar o que foi corrigido automaticamente e o que ficou como recomendação ou pendente de aprovação.

2. **Blocos de código**:
   - HTML/CSS/JS atualizados, com comentários sutis nos pontos-chave, por exemplo:  
     - `<!-- Lighthouse/PageSpeed fix: added width/height to image to avoid CLS -->`  
     - `<!-- SEO fix: added meta description -->`  
     - `<!-- Accessibility fix: alt text for image -->`  

3. **Checklist para o usuário**:
   - Ações de infra (CDN, compressão, cache, HTTP/2/3).  
   - Otimização de imagens (compressão/formatos).  
   - Decisões visuais pendentes (por exemplo, substituir determinado componente pesado).  
   - Recomendação para rodar novamente PageSpeed Insights (mobile e desktop) e verificar os novos scores.

---

## Examples

### Example 1 – Otimização interna máxima

**User Input**

> Aqui está minha pasta de site. Quero chegar o mais perto possível de 100/100 em Performance, Acessibilidade, Práticas recomendadas e SEO no Lighthouse mobile e desktop, sem mudar o visual.

**Expected Behavior**

- Analisa HTML/CSS/JS/robots.  
- Corrige meta tags, atributos de imagem, dimensões, ordem de scripts, links externos, robots.txt simples, etc.  
- Devolve código refinado + resumo por categoria, indicando quais auditorias típicas devem ter sido resolvidas (meta-description, image-alt, link-text, is-crawlable, robots-txt, etc.).[file:47]

### Example 2 – Otimização com decisões visuais

**User Input**

> Quero maximizar minhas notas, aceito mudar o visual em alguns pontos se você explicar bem o porquê.

**Expected Behavior**

- Identifica componentes pesados ou scripts que causam TBT/CLS/INP ruins.  
- Propõe simplificações visuais (por exemplo, reduzir sliders, remover animações pesadas), explicando quais métricas/auditorias melhoram.  
- Só fornece o novo código de componentes após o usuário concordar com a mudança.

