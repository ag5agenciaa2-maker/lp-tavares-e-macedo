# Padrão AG5 de Qualidade UI/UX

Este documento serve como o "Template de Ouro" ou "Comando Padrão" da Agência AG5. Utilize as diretrizes abaixo para refinar e padronizar Landing Pages recém-criadas ou clones, elevando o design para um nível Premium, Minimalista e focado em Conversão.

---

## 1. Padrão de Rodapé (Premium & Minimalista)

O Rodapé (`<footer>`) deve ser reconstruído aplicando o seguinte padrão:

- **Cor de Fundo e Contraste:**
  - Não use preto puro (`#000000`) ou cinza genérico. Use um tom **muito escuro derivado da paleta primária** do projeto.
  - Adicione uma linha divisória fina no topo e na base (separando os direitos autorais) com opacidade bem baixa, ex: `border-top: 1px solid rgba(255, 255, 255, 0.1)`.

- **Estrutura de Colunas (Grid de Atendimento):**
  - No Desktop, siga obrigatoriamente a proporção de grid `1.5fr 1fr 1.5fr 1fr`, divididas assim:
  - **Coluna 1 (Marca):** Logo com aprox. `70px` a `80px` de altura, uma tagline pequena (descrição) e redes sociais em SVG (circular com hover na cor de destaque).
  - **Coluna 2 (Links Rápidos):** Navegação baseada em âncoras.
  - **Coluna 3 (Contato):** Organização restrita nesta ordem: 1) Nome da Empresa; 2) Endereço Completo; 3) Telefones e WhatsApp. 
    - **Regra UI/UX e PageSpeed:** Múltiplos telefones devem fluir na mesma linha, separados por `|`. Cada link (`<a href="tel:...">`) DEVE obrigatoriamente ter `padding` mínimo (ex: `8px 0`) e `display: inline-block` para garantir a Área de Toque Tátil mobile, além de `aria-label` descritivo separando quem é Fixo e quem é Celular.
  - **Coluna 4 (Localização):** Mapa (iframe do Google Maps com `border-radius: 8px`, `height: 100px`, **e atributo `title="Mapa de Localização"`** obrigatório para leitores de tela), locais atendidos e horário de funcionamento em fontes pequenas (`10px` a `12px`, opacidade 80%).

- **Semântica e Acessibilidade (Estrutural):**
  - Os títulos das colunas (`.footer-title`) **NUNCA** devem quebrar a hierarquia descendente do PageSpeed. Se o site finalizou a última seção em `<h2>`, os títulos do rodapé devem ser mandatoriamente `<h3>`. (Jamais pule para `<h4>`).
  - Redes Sociais e Botões vazios (apenas SVG) *PRECISAM* da tag `aria-label="Ir para [Rede Social]"` ou perderão 10 pontos de Acessibilidade.

- **Espaçamento e Tipografia:**
  - Reduza severamente os paddings verticais (ex: `padding-top: 30px; padding-bottom: 24px`).
  - Reduza todo o texto do rodapé para algo entre `0.75rem` e `0.85rem`.

- **Seção Inferior (Bottom):**
  - Use `display: flex; justify-content: space-between;`.
  - Esquerda: Direitos Autorais (Ex: © 2026 Empresa) + Links divididos por `|` para "Cookies", "Termos e Condições" e "Política de Privacidade".
  - Direita: Créditos "Desenvolvido por AG5 Agência" com link www.ag5agencia.com.br clicável e cor de destaque.

---

## 2. Padrão de Conversão via WhatsApp Dinâmico

A captação de leads via WhatsApp precisa ter rastreabilidade intuitiva:

- **Otimização de Mensagem por Contexto (Fundamental):**
  - Todo link de botão do WhatsApp espalhado pelo site DEVE incluir o parâmetro `?text=` com uma introdução específica baseada em onde o botão está localizado.
  - O formato genérico (header/footer/solto) é: `"Olá, vim através do site e gostaria de uma informação."`
  - O formato específico (Card de serviço ou preço) é: `"Olá, vim através do site e gostaria de saber sobre [Nome do Serviço/Produto da seção]"` (Ex: *Olá, vim através do site e gostaria de saber sobre Consultoria Trabalhista.*)

- **Botão Flutuante (Obrigatório):**
  - Um ícone fixo e nítido no canto inferior direito.
  - Deve conter um **Badge de Notificação** (uma bolinha no canto com o número "1") com a cor primária ou alerta puxando a paleta original, não use vermelho em tom puro.
  - O link `<a href="wa.me/...>` deve ter `role="button"` e `aria-label="Falar pelo WhatsApp"` para o crivo de acessibilidade.
  - **Animação Sutil:** Inclua uma animação que simule respiração/pulsação (`pulse` rápido via `@keyframes shadow` no botão principal).

---

## 3. Padrão de Formulário de Captação

Os formulários de contato não podem parecer modelos defasados.

- **Campos Indispensáveis:**
  - Nome, E-mail, Telefone (WhatsApp formatado com DDD) e um **Seletor de Assunto (`<select>`)**.
  - O campo de Seleção (`Como podemos ajudar?` ou `Assunto`) é obrigatório para segmentar o atendimento.
- **Design do Formulário (UI):**
  - Inputs e selects perfeitamente alinhados (usando grid para os campos curtos na mesma linha).
  - Não use cor de fundo branca pura no input se o site tiver tema escuro/glass. Aplique `background: rgba()` suave.
  - O estado de `focus` nos inputs não deve ter o anel azul padrão do navegador; altere a borda ou box-shadow para a Cor de Destaque / Accent da Marca.
- **Regras Interativas e Feedbacks:**
  - O botão de envio (`Submit`) deve conter um efeito visual de carregamento (Loader em SVG animado girando) quando o usuário clica.
  - **Redirecionamento para o WhatsApp (Crucial):** Em vez de enviar o formulário "para o nada" ou gerar recarregamento nativo traumático, ao concluir o preenchimento, todas as informações captadas nos inputs devem ser concatenadas e o usuário deve ser redirecionado para a abertura do WhatsApp (Web ou App via `wa.me`) com uma mensagem perfeitamente formatada em lista.
  - A estrutura OBRIGATÓRIA da mensagem redirecionada via API do WhatsApp deve ser exatamente esta:
    ```text
    Olá, me chamo [NOME_DO_LEAD], vim através do site e gostaria de uma informação.

    - E-mail: [EMAIL_PREENCHIDO]
    - Telefone: [TELEFONE_PREENCHIDO]
    - Assunto/Serviço: [ASSUNTO_SELECIONADO]
    - Mensagem/Situação: [MENSAGEM_SE_HOUVER]
    ```

---

## 4. Refinamentos Globais de UX e Interação

- **Smart Header (Menu Inteligente):** O menu superior deve obrigatoriamente se esconder de forma suave se o usuário rolar a página para baixo, liberando a tela principal do usuário, e reaparecer de imediato se a rolagem for mínima para cima.
- **Rolagem Âncora Limpa:** Para toda e qualquer ancoragem de link interno (scroll-behavior smooth). Acompanhado de uma margem superior invisível (`scroll-margin-top`) relativa à altura do menu nos `IDs`, para que o conteúdo em texto da nova aba não pare debaixo do header, engolindo os títulos.
- **Substituição de Emojis:** Retire totalmente o uso de emojis aleatórios ao longo de títulos, subtítulos ou links e use vetores iconográficos adequados via SVG limpos.
- **Acessibilidade e Contraste de Cores (WCAG):** Jamais permita que o PageSpeed ou o Lighthouse apontem falhas de "Taxa de Contraste Suficiente" (Acessibilidade mínima WCAG AA - 4.5:1 para textos normais).
  - Evite o uso de `opacity: 0.5` ou semelhante em textos que já possuem cores claras sobre fundos escuros. Substitua por tons sólidos calculados ou opacidades seguras (mínimo `0.85` a `0.9`).
  - Botões "Ghost", "Outline" ou banners como o de Cookies devem sempre ter as fontes num tom escuro verdadeiro contra o fundo destacado (ex: cor preta sobre fundo dourado/amarelo em vez de branco sobre dourado puro), e as bordas de ghost buttons devem ser bem visíveis.
- **Performance e SEO (Metadados Otimizados):**
  - **Compartilhamento (OG Tags):** A tag `<meta property="og:image">` jamais pode faltar ou ser genérica. O Agente deve buscar nas pastas de `Imagens/Assets` do projeto e usar uma imagem "Premium" (ex: Imagem completa da Hero, foto profissional da Clínica/Escritório, ou foto de alta qualidade do Proprietário/Doutor/Mecânico). Essa imagem servirá como o outdoor digital do site no WhatsApp.
  - **Copy Persuasiva:** Os metadados de compartilhamento (ex: `og:title` e `og:description`) devem ser não apenas informativos, mas extramente persuasivos para gerar taxa de clique (CTR) nas redes sociais.
  - **Favicon Dinâmico e Eficiente:** Para o `<link rel="icon">`, o Agente deve vasculhar os arquivos em busca da melhor variação da marca (`logo.svg`, `icon.png`, `symbol.webp`). Dê prioridade a formatos limpos e eficientes que escalonam de forma impecável na aba do navegador.
  - **Desbloqueio de Renderização (CSS/Fontes):** Sempre implemente a rotina de pré-carregamento assíncrono avançado para fontes e CSS pesados. Ex: `<link rel="preload" as="style" href="...">` seguido de `<link rel="stylesheet" href="..." media="print" onload="this.media='all'">` para economizar milissegundos no FCP e evitar "Render-Blocking".
  - **Turbinando o LCP (Maior Pintura de Conteúdo):** Localize a imagem Hero/Banner inicial do site e injete no cabeçalho um `<link rel="preload" as="image" href="...">` para invocar o download crítico de forma imediata.
  - **Tamanho Físico Fixo (Anti-CLS):** Toda tag `<img>` no projeto precisa conter instintivamente os atributos `width=""` e `height=""` limitando o aspecto visual para as métricas do navegador não causarem "Cumulative Layout Shift" durante o load.
- **Ajustes Pró-Responsividade e Acessibilidade:** Nunca esvazie margens de seções e tente que se comportem como paredes contíguas fixas (`margin: 100px`). Acolha sempre o conceito de espaçamento de preenchimento fluido `clamp()`. As áreas clicáveis no mobile têm que ter largura de "dedo gordo" (44px) minimamente. Use `padding` (ex: `8px 0`) e `display: inline-block` em links agrupados para eliminar infrações de espaçamento tátil.

---

## 5. Regras Operacionais e de Proteção (Protocolo de Execução)

O Agente que aplicar este padrão **MUST** (deve estritamente) seguir estas condutas de preservação do código legado:

- **Invisible Design (Não quebre a estrutura):** Você é um especialista em polimento e refinamento minimalista. A regra de ouro é: **Nunca altere a estrutura HTML** (grids vitais e flexbox containers principais) a menos que ela esteja severamente quebrada prejudicando o layout. Entenda analiticamente se um "espaço branco" é um respiro intencional proposital da seção original ou um bug visual antes de cortá-lo.
- **Protocolo de Diagnóstico Prévio (`UI_IMPROVEMENTS.md`):** Antes de aplicar qualquer mudança invasiva no código, você deve obrigatoriamente criar um laudo. Gere um relatório nomeado `UI_IMPROVEMENTS.md` na raiz ou pasta `/Docs` listando tudo o que encontrou no projeto cru, utilizando as tags classificatórias: `[CRÍTICO]`, `[SUGESTÃO]` e `[OK]`.
- **Hierarquia Inquebrável de Títulos (Headings):** Jamais inicie uma sub-seção pulando níveis lógicos. Pular de um `<h2>` para `<h4>` vai desalinhar o esqueleto do site no Leitor do Google e penalizar no eixo de Acessibilidade Cega e SEO Estrutural. Desça degrau a degrau visual mudando a classe, não a tag.
- **Restrição de Animações (Mobile/CLS):** No mobile, rastreie qualquer componente que possa gerar _Layout Shift_ (CLS) ou animação pesada/travada (como paralaxe forçado ou fade-ins complexos). Em telas menores (`@media max-width: 768px`), simplifique, bloqueie ou remova animações pesadas de entrada. A experiência touch tem que ser rápida e fluida, não engasgada.
- **Protocolo Fallback de Favicon Inteligente:** Se o projeto original não tiver uma Logo física/isolada razoável para criar a tag obrigatória do `<link rel="icon">`, **não a deixe vazia ou quebrada (404)**. Imediatamente crie um favicon SVG inline genérico no código (como uma balança se for pra advocacia, um dente para odontologia, etc.) para funcionar como *Fallback (temporário)* até a aprovação visual final. Comunique essa criação no relatório diagnóstico.
