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
  - **Coluna 3 (Contato):** Organização restrita nesta ordem: 1) Nome da Empresa; 2) Endereço Completo; 3) Telefone Fixo; 4) WhatsApp/Celular. Acompanhados de ícones SVG de 18px.
  - **Coluna 4 (Localização):** Mapa (iframe do Google Maps com `border-radius: 8px`, `height: 100px`), locais atendidos e horário de funcionamento em fontes pequenas (`10px` a `12px`, opacidade 80%).

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
- **Performance e SEO (Metadados Otimizados):**
  - **Compartilhamento (OG Tags):** A tag `<meta property="og:image">` jamais pode faltar ou ser genérica. O Agente deve buscar nas pastas de `Imagens/Assets` do projeto e usar uma imagem "Premium" (ex: Imagem completa da Hero, foto profissional da Clínica/Escritório, ou foto de alta qualidade do Proprietário/Doutor/Mecânico). Essa imagem servirá como o outdoor digital do site no WhatsApp.
  - **Copy Persuasiva:** Os metadados de compartilhamento (ex: `og:title` e `og:description`) devem ser não apenas informativos, mas extramente persuasivos para gerar taxa de clique (CTR) nas redes sociais.
  - **Favicon Dinâmico e Eficiente:** Para o `<link rel="icon">`, o Agente deve vasculhar os arquivos em busca da melhor variação da marca (`logo.svg`, `icon.png`, `symbol.webp`). Dê prioridade a formatos limpos e eficientes que escalonam de forma impecável na aba do navegador.
- **Ajustes Pró-Responsividade:** Nunca esvazie margens de seções e tente que se comportem como paredes contíguas fixas (`margin: 100px`). Acolha sempre o conceito de espaçamento de preenchimento fluido `clamp()`. As áreas clicáveis no mobile têm que ter largura de "dedo gordo" (44px) minimamente.

---

## 5. Regras Operacionais e de Proteção (Protocolo de Execução)

O Agente que aplicar este padrão **MUST** (deve estritamente) seguir estas condutas de preservação do código legado:

- **Invisible Design (Não quebre a estrutura):** Você é um especialista em polimento e refinamento minimalista. A regra de ouro é: **Nunca altere a estrutura HTML** (grids vitais e flexbox containers principais) a menos que ela esteja severamente quebrada prejudicando o layout. Entenda analiticamente se um "espaço branco" é um respiro intencional proposital da seção original ou um bug visual antes de cortá-lo.
- **Protocolo de Diagnóstico Prévio (`UI_IMPROVEMENTS.md`):** Antes de aplicar qualquer mudança invasiva no código, você deve obrigatoriamente criar um laudo. Gere um relatório nomeado `UI_IMPROVEMENTS.md` na raiz ou pasta `/Docs` listando tudo o que encontrou no projeto cru, utilizando as tags classificatórias: `[CRÍTICO]`, `[SUGESTÃO]` e `[OK]`.
- **Restrição de Animações (Mobile/CLS):** No mobile, rastreie qualquer componente que possa gerar _Layout Shift_ (CLS) ou animação pesada/travada (como paralaxe forçado ou fade-ins complexos). Em telas menores (`@media max-width: 768px`), simplifique, bloqueie ou remova animações pesadas de entrada. A experiência touch tem que ser rápida e fluida, não engasgada.
- **Protocolo Fallback de Favicon Inteligente:** Se o projeto original não tiver uma Logo física/isolada razoável para criar a tag obrigatória do `<link rel="icon">`, **não a deixe vazia ou quebrada (404)**. Imediatamente crie um favicon SVG inline genérico no código (como uma balança se for pra advocacia, um dente para odontologia, etc.) para funcionar como *Fallback (temporário)* até a aprovação visual final. Comunique essa criação no relatório diagnóstico.
