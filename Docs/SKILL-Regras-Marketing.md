---
name: analisador-conformidade-etica-nichos
description: >
  Use esta skill quando o usuário pedir para auditar, corrigir e padronizar
  a comunicação de sites ou materiais de marketing em nichos regulados
  (advocacia, saúde, contabilidade, etc.), gerando um relatório com
  pontuação de conformidade e lista de ajustes aplicados.
---

# Skill: Analisador de Conformidade Ética e Regulatória por Nicho

## Objetivo

Avaliar e **corrigir** automaticamente o conteúdo de sites e materiais digitais
de nichos regulados (Nível 1, 2 e 3), com foco em:

- linguagem ética e não-promocional;
- CTAs adequados;
- ausência de promessas de resultado;
- aderência às diretrizes de conselhos profissionais.

Ao final, gerar:

1. Pontuação de conformidade (0 a 100).
2. Lista detalhada de problemas encontrados.
3. Versões sugeridas corrigidas dos textos.
4. Relatório final consolidando tudo que foi visto e ajustado.

---

## Escopo da Skill

Use esta skill quando o usuário:

- enviar ou apontar **arquivos** contendo textos de site, landing pages, blogs, anúncios ou roteiros de vídeo;  
- informar o **nicho** (ex.: advocacia, odontologia, medicina, contabilidade, estética, etc.);  
- solicitar **auditoria ética/regulatória**, revisão de **marketing ético** ou adequação a **código de ética**.

A skill atua apenas sobre o **texto** (não executa validação jurídica formal).

---

## Níveis de Regulação por Nicho

### Nível 1 – Altamente Regulados (meta: 95+)

- Advocacia (OAB)  
- Odontologia (CFO)  
- Medicina (CFM)  
- Psicologia (CFP)  
- Contabilidade (CFC)  
- Engenharia (CREA/CONFEA)  
- Arquitetura (CAU)  
- Fisioterapia (COFFITO)  

Regra central: marketing **informativo**, nunca claramente **promocional**.

### Nível 2 – Moderadamente Regulados (meta: 85+)

- Estética  
- Nutrição (CFN)  
- Educação  
- Cursos profissionalizantes  
- Imobiliárias  

Regra central: marketing **educativo + institucional**.

### Nível 3 – Pouco ou Não Regulados (meta: 70+)

- Restaurantes  
- Lojas  
- Oficinas  
- E-commerce  
- Serviços locais comuns  

Regra central: marketing mais livre, respeitando **leis do consumidor** e
boas práticas de comunicação.

---

## Entradas Esperadas

Quando esta skill for carregada, obtenha do usuário:

1. **Nicho** (ex.: “advocacia previdenciária”, “clínica odontológica”, “e-commerce de roupas”).  
2. **Nível** (1, 2 ou 3). Se o usuário não souber, classifique com base na lista acima.  
3. **Arquivos de entrada**:
   - HTML de páginas,
   - textos em .txt, .md, .docx (convertidos),
   - scripts de vídeo ou copies de anúncios.
4. **Objetivo do usuário**:
   - “apenas auditoria”, ou
   - “auditoria + sugestões de correção”, ou
   - “auditoria + reescrita completa em conformidade”.

---

## Passo a Passo de Execução

Sempre que acionar esta skill, siga esta ordem:

### 1. Coleta e leitura dos arquivos

1. Identifique todos os arquivos de **texto** relevantes no contexto da tarefa
   (HTML, .txt, .md, trechos copiados pelo usuário, etc.).
2. Leia integralmente o conteúdo.  
3. Separe por **blocos analisáveis**, por exemplo:
   - se HTML: por seção, cabeçalho, parágrafos, botões (anchors, buttons);
   - se texto: por títulos, subtítulos, parágrafos e CTAs.

Mantenha uma lista estruturada:

- `Bloco 1`: título + parágrafo + CTA associados.  
- `Bloco 2`: idem.  
- …

### 2. Identificação do nicho e nível

1. Reforce com o usuário o **nicho declarado** e mapeie para o **Nível 1/2/3**.  
2. Registre internamente:
   - Nicho: …  
   - Nível: 1 / 2 / 3  
   - Conselho provável (quando existir), ex.: OAB, CFM, CFO, CFC.

### 3. Análise de conformidade por critérios

Para cada bloco, avalie as 4 categorias abaixo e atribua pontuações parciais.

#### Categoria 1 – Linguagem e Comunicação (40 pontos)

Critérios:

- Ausência de promessas de resultados (15)  
- Linguagem técnica e neutra (10)  
- Ausência de superlativos (10)  
- Tom institucional, não agressivamente comercial (5)

Regra de pontuação por critério:

- Totalmente adequado: nota máxima.  
- Parcialmente adequado: 50% da nota.  
- Inadequado: 0.

#### Categoria 2 – CTAs e Ofertas (25 pontos)

Critérios:

- CTAs permitidos (10)  
- Ausência de urgência comercial (10)  
- Ausência de menção a preços/ofertas (5)

Para **Nível 1**, trate como **proibidos** CTAs como:
“Contrate agora”, “Agende hoje”, “Garanta sua vaga”, “Promoção imperdível”.

Exemplos de CTAs **aceitáveis** em Nível 1:

- “Entre em contato para mais informações”.  
- “Saiba mais sobre nossos serviços”.  
- “Fale com nossa equipe”.  
- “Conheça nossa atuação”.

#### Categoria 3 – Conteúdo e Evidências (20 pontos)

Critérios:

- Ausência de depoimentos que prometem resultado concreto (10)  
- Ausência de antes/depois em saúde/estética (5)  
- Ausência de comparações diretas com concorrentes (5)

Observação: em alguns conselhos (como CFM), o uso de imagens de resultado
pode ser permitido apenas com **finalidade educativa** e sujeito a regras
específicas; por padrão, trate como zona de risco e sinalize.

#### Categoria 4 – Informações Técnicas (15 pontos)

Critérios:

- Descrição clara e técnica dos serviços (5)  
- Menção a formação/experiência sem exageros (5)  
- Indícios de conformidade legal ou respeito a normas éticas (5)

---

## Mecanismo de Detecção (Checklist Interno)

Aplique buscas linguísticas em cada bloco:

- Promessas de resultado:
  - “garantir”, “garantimos”, “resultado certo”, “sucesso garantido”,
    “100%”, “certeza”, “resolver seu problema”, etc.
- Linguagem comercial agressiva:
  - “promoção”, “desconto”, “oferta”, “agora”, “hoje”, “urgente”,
    “imperdível”, “última chance”, “melhor”, “número 1”, “líder”.
- Urgência médica/jurídica exagerada:
  - “transforme sua vida em X dias”, “sorriso perfeito garantido”,
    “liberdade garantida”, etc.
- Menção a preços, parcelamentos e campanhas promocionais
  (para Nível 1, sinalize como crítica).

Registre, para cada ocorrência:

- Texto original.  
- Tipo de risco (promessa, urgência, superlativo, preço, comparação etc.).  
- Categoria impactada.

---

## Regras de Correção de Texto

Quando o usuário solicitar correção/reescrita:

1. **Preserve o sentido principal** (área de atuação, benefícios lícitos,
   público-alvo).  
2. Remova ou substitua:
   - promessas de resultado por descrições de **atuação** ou **processo**;
   - superlativos (“melhor”, “líder”, “número 1”) por termos técnicos
     neutros (“especializado em”, “com experiência em”);
   - CTAs agressivos por CTAs informativos.

### Tabela de Substituições Obrigatórias (Nível 1)

Use como referência ao corrigir:

| Proibido (exemplo)                 | Versão sugerida                        |
|------------------------------------|----------------------------------------|
| “Garantimos seus direitos”         | “Atuamos na defesa de direitos”       |
| “Resultado certo”                  | “Orientação jurídica fundamentada”    |
| “Melhor advogado”                  | “Advogado especializado”              |
| “Contrate agora”                   | “Entre em contato para informações”   |
| “Promoção especial”                | Remover o trecho                      |
| “Consulta grátis”                  | “Primeira orientação” (se verdadeiro) |
| “Ganhe sua causa”                  | “Defesa técnica em processos”         |
| “Sorriso perfeito garantido”       | “Tratamentos focados em saúde bucal”  |
| “Transforme sua vida”              | “Suporte profissional”                |
| “Pague menos impostos”             | “Orientação fiscal conforme a lei”    |

### Padrões de Linguagem por Nicho (Guia)

- Advocacia:
  - Termos preferidos: atuação, assessoria jurídica, orientação legal,
    defesa técnica, suporte jurídico, conformidade legal.
- Odontologia / Medicina:
  - Termos preferidos: tratamento, procedimento, saúde, bem-estar,
    protocolos clínicos, acompanhamento.
- Contabilidade:
  - Termos preferidos: serviços contábeis, organização fiscal, conformidade
    tributária, assessoria contábil, legislação vigente.

Sempre mantenha **tom sóbrio, informativo, técnico**.

---

## Cálculo da Pontuação

Depois de analisar todos os blocos:

1. Atribua nota a cada critério das 4 categorias, somando até 100 pontos:
   - Categoria 1: até 40  
   - Categoria 2: até 25  
   - Categoria 3: até 20  
   - Categoria 4: até 15  
2. Registre também a **meta de pontuação** para o nicho:

| Nicho (exemplo)  | Mínima | Ideal |
|------------------|--------|-------|
| Advocacia        | 95     | 100   |
| Odontologia      | 95     | 100   |
| Medicina         | 95     | 100   |
| Psicologia       | 95     | 100   |
| Contabilidade    | 95     | 100   |
| Engenharia       | 90     | 95    |
| Arquitetura      | 90     | 95    |
| Estética         | 85     | 90    |
| Nutrição         | 85     | 90    |
| Educação         | 80     | 85    |
| Restaurantes     | 70     | 80    |
| E-commerce       | 70     | 80    |

3. Classifique o status:

- 90–100: Excelente – em conformidade.  
- 80–89: Bom – pequenos ajustes.  
- 70–79: Regular – ajustes moderados.  
- 60–69: Insuficiente – risco relevante.  
- 0–59: Crítico – alta chance de infração.

---

## Saída Obrigatória da Skill

Ao finalizar, sempre entregue um **relatório estruturado**, incluindo:

1. **Resumo geral**
   - Site ou material analisado.  
   - Nicho, nível, data.  
   - Pontuação total (0–100) e status (Excelente/Bom/Regular/Insuficiente/Crítico).

2. **Lista de tudo que foi visto**
   - Blocos analisados (por página ou seção).  
   - Para cada bloco: tipo (header, seção de serviços, CTA, depoimento etc.).  
   - Problemas identificados por categoria:
     - Linguagem e comunicação.  
     - CTAs e ofertas.  
     - Conteúdo e evidências.  
     - Informações técnicas (quando aplicável).  

3. **Lista de ajustes aplicados**
   - Para cada problema:
     - Texto original.  
     - Tipo de risco (promessa, urgência, superlativo, preço, comparação…).  
     - Texto corrigido sugerido.  
     - Categoria impactada.  
   - Destaque ajustes críticos para nichos Nível 1.

4. **Versão consolidada recomendada**
   - Quando o usuário solicitar, apresente uma versão já **reescrita**
     das principais seções (home, serviços, sobre, CTAs) em conformidade,
     pronta para ser implementada.

5. **Recomendações prioritárias**
   - Alta prioridade: itens com maior risco ético/regulatório.  
   - Média prioridade: ajustes de linguagem e clareza.  
   - Baixa prioridade: melhorias de estilo, organização, padronização.

---

## Regra de Ouro

Quanto maior o grau de regulação do nicho, **menor** deve ser o grau de persuasão
explícita e de apelos comerciais.

Em caso de dúvida:

1. Reduza a persuasão.  
2. Neutralize o texto (descritivo, técnico, informativo).  
3. Recomende consulta ao código de ética do respectivo conselho profissional.

---

## Exemplo de Prompt de Uso

> “Use a skill de Analisador de Conformidade Ética para revisar todo o conteúdo
> destes arquivos do site de advocacia. Classifique o nicho como Nível 1
> (advocacia), calcule a pontuação de 0 a 100, corrija todos os textos em
> desconformidade e gere um relatório final detalhando:
> (a) tudo que foi analisado,
> (b) todos os problemas encontrados e
> (c) todas as correções feitas, com antes e depois de cada trecho.”

---

## Exemplo de Output Esperado (visão geral)

- Pontuação geral: 82/100 – Status: Aprovado com ressalvas.  
- 7 trechos com promessas de resultado reescritos em tom informativo.  
- 4 CTAs agressivos ajustados para CTAs institucionais.  
- Depoimentos editados para remover alegações de sucesso garantido.  
- Versão final dos textos entregue já adequada para publicação.

