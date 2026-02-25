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


