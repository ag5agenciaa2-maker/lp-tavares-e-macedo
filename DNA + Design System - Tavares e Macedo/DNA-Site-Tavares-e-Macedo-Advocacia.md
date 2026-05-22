# SITE DNA — TAVARES & MACEDO ADVOCACIA

**Nicho:** Advocacia Multidisciplinar — Direito Civil, Trabalhista e Previdenciário com foco geográfico em Santa Cruz, Zona Oeste do RJ e municípios da Baixada Fluminense (Seropédica, Itaguaí, Paracambi, Japeri, Queimados).

**Posicionamento:** Escritório de perfil institucional-sólido que projeta credibilidade via estética vinho-dourado premium, communicando autoridade jurídica tradicional sem distância fria — "escritório sério e acessível ao mesmo tempo". A paleta escura com acento dourado transmite sofisticação e anos de experiência para um público de média renda que busca confiança antes de contratar. Diferencia-se do concorrente local por apresentar um site de nível corporativo alto num mercado geográfico onde o padrão ainda é landing pages genéricas.

**Data de criação:** 2026

---

## IDENTIDADE VISUAL

### Paleta de Cores

| Variável CSS | Hex | Função Específica no Layout |
|---|---|---|
| `--color-primary` | `#4B0F21` | COR PRIMÁRIA — fundo hero, botões CTA primários, header scrolled, áreas de destaque estrutural |
| `--color-primary-dark` | `#2B0713` | Hover de botões primários, variante escura para profundidade |
| `--color-accent` | `#D9B76A` | ACENTO DOURADO — border-top dos cards de área, ícones SVG, gradientes de destaque, badge pulsante |
| `--color-accent-light` | `#E8D5A3` | Dourado claro — hover de links, versão suave do acento em textos |
| `--color-white` | `#FFFFFF` | Textos sobre fundo escuro, backgrounds de seções neutras, cards |
| `--color-black` | `#111111` | Textos de corpo sobre fundos claros, cor base |
| `--color-whatsapp` | `#25D366` | Botão flutuante WhatsApp — único verde no layout |
| `rgba(255,255,255,0.1)` | — | Background do glass morphism na hero (urgency box) |
| `rgba(75,15,33,0.85)` | — | Overlay escuro semi-transparente sobre a imagem hero |
| `#FBBC05` | — | Estrelas dos depoimentos (inline SVG) |

### Tipografia

| Elemento | Família | Peso | Tamanho Exato | Observações |
|---|---|---|---|---|
| Body base | `'Inter', system-ui, -apple-system, sans-serif` | 400 | `clamp(1rem, 1.5vw, 1.125rem)` | `line-height: 1.6`, antialiasing ativo |
| H1 hero | `'Playfair Display', Georgia, serif` | 700 | `clamp(2rem, 6vw, 4rem)` | `line-height: 1.1`, cor `--color-white`, display font |
| H2 sections | `'Playfair Display', Georgia, serif` | 600–700 | `clamp(1.75rem, 4vw, 2.75rem)` | Seções sobre, áreas, FAQ, contato |
| H3 cards | `'Playfair Display', Georgia, serif` | 600 | `clamp(1.25rem, 2.5vw, 1.5rem)` | Cards de áreas de atuação |
| H4 subtítulos | `'Inter', system-ui` | 600 | `clamp(1.1rem, 2vw, 1.25rem)` | Subtítulos internos de seção |
| Hero eyebrow | `'Inter', system-ui` | 500 | `0.875rem` | `text-transform: uppercase`, `letter-spacing: 0.1em`, cor `--color-accent` |
| Badge hero | `'Inter', system-ui` | 600 | `0.75rem` | `text-transform: uppercase`, `letter-spacing: 0.05em` |
| Botões `.btn` | `'Inter', system-ui` | 600 | `0.875rem` / `.btn-large: 1.125rem` | `white-space: nowrap` |
| Stat numbers | `'Playfair Display', Georgia, serif` | 700 | `clamp(2rem, 4vw, 3rem)` | Contadores animados na seção sobre |
| Stat labels | `'Inter', system-ui` | 400 | `clamp(0.875rem, 1.2vw, 1rem)` | Legendas dos contadores |
| Body small | `'Inter', system-ui` | 400 | `clamp(0.875rem, 1.2vw, 1rem)` | `--text-small` |
| Body xs | `'Inter', system-ui` | 400 | `0.75rem` | `--text-xs`, footer bottom, disclaimers |
| Footer heading | `'Inter', system-ui` | 700 | `0.875rem` | `text-transform: uppercase`, `letter-spacing: 0.05em` |

### Estilo Geral

Arquitetura visual **Vinho-Dourado Institucional Sólido** — rejeita tanto o azul-marinho genérico corporativo quanto o minimalismo excessivamente frio do mercado jurídico, optando por uma paleta escura de vinho (`#4B0F21`) com acento dourado (`#D9B76A`) que evoca tradição, prestígio e confiabilidade; a dualidade tipográfica Playfair Display (headings, serif clássica) + Inter (body, sans-serif moderna) cria tensão visual deliberada entre herança e modernidade; o layout alterna seções em fundos brancos/cinza claro com seções em fundo vinho escuro para criar dramaticidade e hierarquia; o sistema de animações de entrada (`reveal` via Intersection Observer com `translateY(30px) → 0` e `opacity: 0 → 1`) garante percepção de site premium sem dependência de bibliotecas externas; a ausência total de padrões/texturas nos fundos reforça limpeza e seriedade institucional.

---

## LAYOUT — SEÇÃO POR SEÇÃO

### SEÇÃO 1 — Header (Navbar Fixa com Auto-Hide)

**Estrutura:** `position: fixed; top: 0; z-index: 100`; altura `80px` desktop / `70px` mobile via `--header-height`; Flexbox `justify-content: space-between; align-items: center`; `max-width: 1280px` via `.container`; `padding: 0 clamp(1rem, 5vw, 2rem)`.

**Fundo:** Inicial `background: transparent` (sobre hero escuro). Ao scroll >50px: `.scrolled` adiciona `background-color: var(--color-primary)` + `box-shadow: var(--shadow-md)`. Auto-hide ao scroll down: classe `.hidden` aplica `transform: translateY(-100%)`.

**Elementos Restritos:** Logo à esquerda (`height: 48px; width: auto`); `.nav-desktop` com links visíveis apenas `≥768px` — gap `2rem`, cor `rgba(255,255,255,0.9)`, hover `color: --color-accent`; último elemento é `.btn-accent` com `padding: 0.5rem 1.5rem`. Hamburguer visível `<768px` com 3 barras `background: #fff; width: 24px; height: 2px`.

**Animação:** `transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1)` em todas as propriedades do header. Auto-hide: `transform: translateY(-100%)` com `transition: var(--transition-base)`. Hamburguer → X: barra superior `rotate(45deg) translate(6px, 6px)`, barra inferior `rotate(-45deg) translate(6px, -6px)`, barra do meio `opacity: 0; scaleX(0)`.

**Micro-interações:** Nav links: `color: rgba(255,255,255,0.9) → --color-accent` em `transition: var(--transition-fast) = 150ms cubic-bezier`. Menu mobile: `transform: translateX(-100%) → translateX(0)` em `transition: 300ms cubic-bezier(0.4, 0, 0.2, 1)`. Backdrop overlay mobile: `opacity: 0 → 1`.

**Diferenciador Visual:** Auto-hide bidirecional (esconde ao scroll down, aparece ao scroll up) — comportamento de app nativo raro em LPs de advocacia local, aumenta percepção de qualidade técnica do site.

---

### SEÇÃO 2 — Hero (100vh Full Bleed)

**Estrutura:** `height: 100vh; min-height: 600px; position: relative; display: flex; align-items: center`; conteúdo centralizado via `.container`; texto em coluna única mobile, limitado a `max-width: 700px` no desktop.

**Fundo:** Imagem `advocacia_11zon.webp` como `background-image` com `background-size: cover; background-position: center`. Pseudo-elemento `::before`: `background: linear-gradient(135deg, rgba(43,7,19,0.92) 0%, rgba(75,15,33,0.85) 50%, rgba(43,7,19,0.7) 100%)` — overlay escuro gradiente que garante contraste do texto. Pseudo-elemento `::after`: `background: linear-gradient(to bottom, transparent 0%, rgba(75,15,33,0.3) 100%)` — reforço na transição para próxima seção.

**Elementos Restritos:** `.hero-badge` (topo): flex row com ícone + texto uppercase dourado, `background: rgba(217,183,106,0.15); border: 1px solid rgba(217,183,106,0.3); border-radius: 2rem; padding: 0.5rem 1rem`. Abaixo: H1 branco + parágrafo `opacity: 0.9` + 2 CTAs em flex row (`.btn-accent` + `.btn-outline`). Formas flutuantes: 2 divs absolutas com `border-radius: 50%; filter: blur(80px); opacity: 0.1` — `background: --color-accent` e `background: --color-primary-dark`. Scroll indicator no bottom: `position: absolute; bottom: 2rem; left: 50%`.

**Animação:** Badge: `animation: pulse-badge 2s infinite` — `box-shadow: 0 0 0 0 rgba(217,183,106,0.4) → 0 0 0 10px rgba(217,183,106,0)`. Formas flutuantes: `animation: float 8s ease-in-out infinite` — `translateY(0) → translateY(-20px) → translateY(0)`, com `animation-delay: 2s` na segunda forma. Scroll indicator: `animation: bounce 2s infinite` — `translateY(0) → translateY(8px) → translateY(0)`. Mouse wheel interno: `animation: scrollWheel 1.5s ease-in-out infinite`.

**Micro-interações:** Hover `.btn-accent`: `background: --color-accent-light; transform: translateY(-2px); box-shadow: var(--shadow-xl)`. Hover `.btn-outline`: `background: rgba(255,255,255,0.1)`. Hero content: `.hero-content` recebe `animation: fadeInUp 0.8s ease-out`.

**Diferenciador Visual:** Formas geométricas circulares com `filter: blur(80px)` flutuando animadas no background da hero — técnica de "ambient glow" que cria profundidade e movimento sem usar vídeo ou bibliotecas pesadas, conferindo identidade premium ao fundo escuro.

---

### SEÇÃO 3 — Sobre (About com Contador Animado)

**Estrutura:** `padding: clamp(4rem, 10vh, 8rem) 0`; Grid `1fr` mobile → `1fr 1fr` em `≥768px`; gap `3rem → 4rem`; `background: --color-white`.

**Fundo:** Branco puro — contraste intencional após o hero escuro.

**Elementos Restritos:** Coluna esquerda: imagem `advocacia_11zon (1).webp` com `border-radius: 1rem; box-shadow: var(--shadow-xl); object-fit: cover`. Decoração: div absoluta `border: 3px solid --color-accent; border-radius: 1rem` deslocada `+16px +16px` da imagem — efeito de moldura dupla. Coluna direita: eyebrow uppercase dourado + H2 Playfair + 2 parágrafos + grid `2x2` com `.stat-item` (número animado + label). `.stat-number` em Playfair Display, cor `--color-primary`.

**Animação:** Contadores: `animateCounters()` via JS com `requestAnimationFrame` — duração `2000ms`, easing linear de 0 ao valor target. Trigger: Intersection Observer na seção `#sobre`. Elementos `.reveal`: `opacity: 0; transform: translateY(30px)` → `opacity: 1; transform: translateY(0)` em `transition: 600ms cubic-bezier(0.4, 0, 0.2, 1)`.

**Micro-interações:** Hover na imagem: `.visual-wrapper:hover img { transform: scale(1.03) }` com `transition: 500ms ease-in-out; overflow: hidden`.

**Diferenciador Visual:** Moldura decorativa com offset `+16px` em borda dourada absoluta sobre a imagem — elemento editorial clássico de revistas premium aplicado ao contexto jurídico, cria sofisticação visual sem recursos externos.

---

### SEÇÃO 4 — Áreas de Atuação (Grade de Cards com Border-Top)

**Estrutura:** `background: #f8f7f5` (cinza neutro quente); `padding: clamp(4rem, 10vh, 8rem) 0`; `.section-header` centralizado `margin-bottom: 3rem`; Grid `1fr` mobile → `repeat(2, 1fr)` tablet (`≥640px`) → `repeat(4, 1fr)` desktop (`≥1024px`); gap `1.5rem`.

**Fundo:** `#f8f7f5` — cinza off-white levemente quente, diferenciado do branco puro da seção anterior.

**Elementos Restritos:** Cada `.area-card`: `background: --color-white; border-radius: 0.75rem; padding: 2rem; border-top: 3px solid --color-accent; box-shadow: var(--shadow-sm)`. Dentro: ícone SVG `48px × 48px` com `background: linear-gradient(135deg, rgba(75,15,33,0.1), rgba(217,183,106,0.2)); border-radius: 0.75rem; padding: 0.75rem` + H3 Playfair + parágrafo + lista de sub-especialidades com ícones check em `--color-accent`.

**Animação:** Entrada `.reveal` com `translateY(30px) → 0` em cascata (cada card com `transition-delay` incremental de `100ms`).

**Micro-interações:** Hover no card: `transform: translateY(-8px); box-shadow: var(--shadow-xl)` em `transition: var(--transition-base) = 300ms cubic-bezier`. Border-top dourada permanece estática — sem mudança de cor no hover.

**Diferenciador Visual:** `border-top: 3px solid --color-accent` em todos os cards cria uma "régua dourada" superior uniforme que organiza visualmente a grade — referência ao design de cartões de visita de escritório premium, onde o acento dourado é o único elemento cromático sobre o branco.

---

### SEÇÃO 5 — Como Trabalhamos (Timeline Alternada)

**Estrutura:** `background: --color-white; padding: clamp(4rem, 10vh, 8rem) 0`; desktop: lista vertical com linha central `width: 2px; background: linear-gradient(to bottom, --color-accent, --color-primary); margin: 0 auto`; cada `.timeline-item` em flex row `align-items: center` com alternância `flex-direction: row` (ímpar) / `row-reverse` (par) em `≥1024px`; mobile: todos em coluna única.

**Fundo:** Branco puro.

**Elementos Restritos:** Cada item: `.timeline-number` círculo `width: 3rem; height: 3rem; border-radius: 50%; background: --color-primary; color: --color-white; font-weight: 700; font-family: Playfair Display` + `.timeline-content` com H4 + parágrafo. Linha vertical central: pseudo-elemento ou div com `position: absolute; left: 50%; transform: translateX(-50%)`.

**Animação:** `.reveal` com delay progressivo por item. Desktop: itens ímpares `translateX(-30px) → 0`, itens pares `translateX(30px) → 0` — entrada lateral alternada.

**Micro-interações:** Hover no `.timeline-content`: `box-shadow: var(--shadow-md)` suave. Círculo de número: `border: 2px solid --color-accent` ao hover do item — bordas douradas aparecem.

**Diferenciador Visual:** Linha central com `background: linear-gradient(to bottom, --color-accent, --color-primary)` — o gradiente cria transição visual de "dourado para vinho" que reforça a paleta ao longo do scroll, transformando um elemento estrutural (timeline line) em elemento de identidade visual.

---

### SEÇÃO 6 — Regiões de Atendimento

**Estrutura:** `background: #f8f7f5; padding: clamp(4rem, 10vh, 8rem) 0`; Grid superior `repeat(2, 1fr)` mobile → `repeat(3, 1fr)` tablet+; gap `1rem`; abaixo: mapa Google embed `width: 100%; height: 400px; border-radius: 1rem; border: none`.

**Fundo:** `#f8f7f5` cinza neutro quente — retoma o padrão alternado.

**Elementos Restritos:** Cards de região: `display: flex; align-items: center; gap: 0.75rem; background: --color-white; border-radius: 0.5rem; padding: 1rem; box-shadow: var(--shadow-sm)`. Ícone: `width: 2.5rem; height: 2.5rem; border-radius: 50%; background: linear-gradient(135deg, rgba(75,15,33,0.1), rgba(217,183,106,0.2))` + SVG de location pin em `--color-primary`. Nome da região em `font-weight: 600; color: --color-black`.

**Animação:** `.reveal` padrão. Mapa sem animação específica — carrega normalmente.

**Micro-interações:** Hover no card de região: `transform: translateY(-2px); box-shadow: var(--shadow-md)` em `transition: var(--transition-fast)`.

**Diferenciador Visual:** Mapa Google embarcado abaixo dos cards de região cria ancoragem geográfica visual imediata — o usuário vê o nome da sua cidade listada E confirma a localização no mapa em uma única seção, eliminando dúvida de cobertura geográfica sem texto adicional.

---

### SEÇÃO 7 — FAQ (Accordion com Single-Expand)

**Estrutura:** `background: --color-white; padding: clamp(4rem, 10vh, 8rem) 0`; `max-width: 800px; margin: 0 auto` via `.container-narrow`; lista de `.faq-item` em coluna com `gap: 1rem`.

**Fundo:** Branco puro.

**Elementos Restritos:** Cada `.faq-item`: `border: 1px solid #e5e7eb; border-radius: 0.75rem; overflow: hidden`. Botão pergunta: `display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; background: --color-white; text-align: left; font-weight: 600; color: --color-black; font-size: var(--text-h4)`. Ícone seta: SVG `20px × 20px` em `--color-accent; transition: transform 300ms ease`. Resposta: `.faq-answer { max-height: 0; overflow: hidden; transition: max-height 500ms ease-out }` + `.faq-answer-content { padding: 0 1.5rem 1.5rem; color: #4b5563 }`.

**Animação:** Item ativo `.faq-item.active .faq-answer`: `max-height: 500px`. Seta: `transform: rotate(180deg)` quando `aria-expanded="true"` em `transition: 300ms ease`. Comportamento single-expand: JS remove `.active` de todos os outros ao abrir um novo.

**Micro-interações:** Hover no botão pergunta: `background-color: #f9fafb` (cinza levíssimo). Hover no `.faq-item`: `box-shadow: var(--shadow-md)` em `transition: 300ms`.

**Diferenciador Visual:** FAQ com `max-width: 800px` centralizado cria coluna editorial estreita que força leitura focada — contraste visual deliberado com as grades largas de 4 colunas das seções anteriores, sinalizando mudança de ritmo narrativo da página.

---

### SEÇÃO 8 — Depoimentos (Placeholder Estruturado)

**Estrutura:** `background: #f8f7f5; padding: clamp(4rem, 10vh, 8rem) 0`; grid de cards centralizado; estrutura preparada para futuros depoimentos reais.

**Fundo:** `#f8f7f5` cinza neutro — mantém o ritmo alternado.

**Elementos Restritos:** Cards `.testimonial-card`: `background: --color-white; border-radius: 1rem; padding: 2rem; box-shadow: var(--shadow-md)`. `.review-avatar` com iniciais do cliente, `border-radius: 50%; background: linear-gradient(135deg, --color-primary, --color-accent)`. Estrelas SVG inline com `fill: #FBBC05`.

**Animação:** `.reveal` padrão de entrada.

**Micro-interações:** Hover no card: `transform: translateY(-4px); box-shadow: var(--shadow-xl)` em `transition: var(--transition-base)`.

**Diferenciador Visual:** Avatar com iniciais sobre gradiente vinho→dourado — a identidade cromática do site aplicada ao avatar cria coerência mesmo sem foto real do cliente.

---

### SEÇÃO 9 — Contato + Formulário WhatsApp

**Estrutura:** `background: var(--color-primary) = #4B0F21; padding: clamp(4rem, 10vh, 8rem) 0`; Grid `1fr` mobile → `repeat(2, 1fr)` desktop (`≥1024px`); gap `4rem`; texto cor `--color-white`.

**Fundo:** `--color-primary #4B0F21` — fundo vinho escuro, maior contraste e urgência visual da página.

**Elementos Restritos:** Coluna esquerda: H2 Playfair branco + parágrafos `opacity: 0.9` + informações de contato em lista com ícones SVG brancos. Coluna direita: card formulário `background: --color-white; border-radius: 1rem; padding: 2rem; box-shadow: var(--shadow-2xl)`. Formulário interno: `display: grid; grid-template-columns: repeat(2, 1fr)` tablet+ / `1fr` mobile; campos: Nome, Email, Telefone (com máscara `(XX) XXXXX-XXXX`), Interesse (select), Mensagem (textarea `col-span: 2`); botão submit `.btn-gradient` full width.

**Animação:** Entrada coluna texto: `translateX(-30px) → 0`. Entrada formulário: `translateX(30px) → 0`. Ambos com `opacity: 0 → 1` via `.reveal`.

**Micro-interações:** Inputs focus: `border-color: --color-primary; box-shadow: 0 0 0 3px rgba(75,15,33,0.1)` — ring de foco vinho. Select customizado: SVG seta `--color-primary` via `background-image: url(data:image/svg+xml...)`. Botão submit: `active: transform: scale(0.98)`. Feedback de erro: `.field-error { color: #dc2626; font-size: 0.75rem; margin-top: 0.25rem }`. Feedback de sucesso: `.form-feedback.success { background: #f0fdf4; border: 1px solid #86efac; color: #166534 }`. Loading state: spinner via `@keyframes spin 1s linear infinite` no botão durante envio.

**Diferenciador Visual:** Seção de contato com fundo vinho escuro (igual ao hero) cria "bookend cromático" — início e fim da página compartilham o mesmo fundo, gerando simetria visual que dá sensação de página completa e coesa. O formulário branco sobre o fundo vinho cria contraste máximo que direciona o olhar imediatamente.

---

### SEÇÃO 10 — Footer

**Estrutura:** `background: #1a1a1a; padding: 4rem 0 2rem; border-top: 1px solid rgba(255,255,255,0.1)`; Grid `1fr` mobile → `repeat(2, 1fr)` tablet → `1.5fr 1fr 1.5fr 1fr` desktop (`≥1024px`); gap `2rem`. Footer bottom: `border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem; flex-direction: column` mobile → `row; justify-content: space-between` tablet+.

**Fundo:** `#1a1a1a` — preto suave, diferente do vinho primário, para distinguir footer do conteúdo principal.

**Elementos Restritos:** Col 1: logo + texto descritivo `max-width: 280px` + social icons. Col 2: links rápidos de navegação. Col 3: informações de contato com ícones SVG `--color-accent` + embed Google Maps `height: 200px; border-radius: 0.5rem`. Col 4: horários de atendimento com `border-left: 2px solid --color-accent; padding-left: 1rem`.

**Animação:** Nenhuma — footer é estático.

**Micro-interações:** Social icons: `background: rgba(255,255,255,0.05) → rgba(217,183,106,0.2); color: rgba(255,255,255,0.7) → --color-accent; transform: translateY(-2px)` em `transition: 150ms ease-in-out; border-radius: 50%`. Footer links: `color: rgba(255,255,255,0.7) → --color-accent-light` em `transition: var(--transition-fast)`. Agency credit link: `opacity: 0.6 → 1 + text-decoration: underline`.

**Diferenciador Visual:** Embed de Google Maps dentro do footer (coluna de contato) — ao invés de apenas endereço em texto, o usuário pode interagir com o mapa sem sair da página. Coluna de horários com `border-left: 2px solid --color-accent` cria marcador dourado editorial que diferencia visualmente o horário das demais informações.

---

### ELEMENTO FLUTUANTE — WhatsApp Button com Badge Pulsante

**Estrutura:** `position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 9999`; `border-radius: 9999px; padding: 1rem; background: --color-whatsapp = #25D366`; `box-shadow: 0 8px 32px rgba(37,211,102,0.4)`.

**Animação:** `animation: whatsappPulse 2s ease-in-out infinite` — `transform: scale(1) → scale(1.05) → scale(1)`. Badge `.wpp-badge`: `animation: pulse-badge 2s infinite` — `box-shadow: 0 0 0 0 rgba(37,211,102,0.7) → 0 0 0 10px transparent`.

**Micro-interações:** Hover: `background: #128C7E; transform: scale(1.1)` em `transition: 300ms ease-in-out`. `will-change: transform` para otimização GPU. `focus-visible: outline: 2px solid --color-whatsapp; outline-offset: 4px`.

---

## COMPONENTES REUTILIZÁVEIS

### Botões

```css
/* BASE */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.5rem; /* 8px — arredondamento moderado */
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
}

.btn:active {
  transform: scale(0.98);
}

/* PRIMÁRIO — Fundo vinho */
.btn-primary {
  background-color: #4B0F21;
  color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
}
.btn-primary:hover {
  background-color: #2B0713;
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
}

/* ACCENT — Dourado */
.btn-accent {
  background-color: #D9B76A;
  color: #1a1a1a;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}
.btn-accent:hover {
  background-color: #E8D5A3;
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
}

/* GRADIENT — CTA do formulário */
.btn-gradient {
  background: linear-gradient(135deg, #4B0F21 0%, #7a1a35 100%);
  color: #ffffff;
  width: 100%;
  padding: 1rem 1.75rem;
}
.btn-gradient:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 0 40px rgba(217,183,106,0.3); /* --shadow-glow */
}

/* OUTLINE — Contorno branco (sobre fundos escuros) */
.btn-outline {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid rgba(255,255,255,0.5);
}
.btn-outline:hover {
  background-color: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.8);
}

/* FOCUS ACESSIBILIDADE */
.btn:focus-visible {
  outline: 2px solid #D9B76A;
  outline-offset: 2px;
}
```

---

### Inputs e Formulário

```css
.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  font-family: inherit;
  border: 1.5px solid #d1d5db;
  border-radius: 0.5rem; /* 8px */
  background-color: #ffffff;
  color: #111111;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #4B0F21; /* --color-primary */
  box-shadow: 0 0 0 3px rgba(75, 15, 33, 0.1); /* ring vinho */
}

.form-input.error,
.form-select.error {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

/* Select customizado — seta SVG inline vinho */
.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234b0f21'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1.25rem;
  padding-right: 2.5rem;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
  grid-column: 1 / -1; /* span full width no grid 2 colunas */
}

.field-error {
  color: #dc2626;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: block;
}
```

---

### Cards de Área de Atuação

```css
.area-card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.75rem; /* 12px */
  border-top: 3px solid #D9B76A; /* acento dourado superior */
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.area-card:hover {
  transform: translateY(-8px); /* lift pronunciado */
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
}

/* Ícone do card */
.area-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(75,15,33,0.1), rgba(217,183,106,0.2));
  border-radius: 0.75rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
}

/* Lista de sub-especialidades */
.area-list-item::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #D9B76A;
  margin-right: 0.5rem;
  vertical-align: middle;
}
```

---

### FAQ Accordion

```css
.faq-item {
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-item:hover {
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: #ffffff;
  border: none;
  text-align: left;
  cursor: pointer;
  font-weight: 600;
  color: #111111;
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  transition: background-color 150ms ease;
}

.faq-question:hover {
  background-color: #f9fafb;
}

.faq-icon {
  flex-shrink: 0;
  color: #D9B76A;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-question[aria-expanded="true"] .faq-icon {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 500ms ease-out;
}

.faq-item.active .faq-answer {
  max-height: 500px;
}

.faq-answer-content {
  padding: 0 1.5rem 1.5rem;
  color: #4b5563;
  line-height: 1.7;
}
```

---

### Sistema de Reveal (Intersection Observer)

```css
/* Estado inicial — invisível e deslocado */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 600ms cubic-bezier(0.4, 0, 0.2, 1),
              transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Disparado pelo Intersection Observer */
.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Variantes direcionais (timeline) */
.reveal-left  { transform: translateX(-30px); }
.reveal-right { transform: translateX(30px); }

/* Delays para stagger */
.reveal-delay-1 { transition-delay: 100ms; }
.reveal-delay-2 { transition-delay: 200ms; }
.reveal-delay-3 { transition-delay: 300ms; }
.reveal-delay-4 { transition-delay: 400ms; }
```

---

### Animações Globais

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-20px); }
}

@keyframes pulse-badge {
  0%  { box-shadow: 0 0 0 0 rgba(217, 183, 106, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(217, 183, 106, 0); }
  100%{ box-shadow: 0 0 0 0 rgba(217, 183, 106, 0); }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
  40% { transform: translateY(8px) translateX(-50%); }
  60% { transform: translateY(4px) translateX(-50%); }
}

@keyframes scrollWheel {
  0%   { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(8px); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@keyframes whatsappPulse {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.05); }
}
```

---

## ANTI-PADRÕES REGISTRADOS

❌ **1. Paleta genérica azul-marinho + cinza "de escritório de advocacia"** — a escolha deliberada de vinho escuro `#4B0F21` com acento dourado `#D9B76A` cria identidade cromática inconfundível no mercado local (Santa Cruz, RJ), onde 100% dos concorrentes usam azul/cinza. Nenhum concorrente geográfico pode "copiar" essa identidade sem parecer plágio explícito.

❌ **2. Foto de stock de toga, martelo, balança da justiça ou tribunal como imagem hero** — o hero usa foto real de ambiente do escritório como background com overlay gradiente vinho, comunicando realidade e contexto geográfico específico. A imagem decorativa da seção Sobre mostra o espaço físico com moldura editorial dourada, reforçando autenticidade.

❌ **3. Tipografia monotonal (apenas uma família para tudo)** — a dualidade deliberada Playfair Display (headings) + Inter (body) cria tensão tipográfica entre serifa clássica (tradição, autoridade) e sans-serif moderna (clareza, acessibilidade digital), comunicando simultaneamente experiência e modernidade sem palavras.

❌ **4. Seção de "estatísticas numéricas" estáticas e genéricas** — os contadores na seção Sobre são animados via `requestAnimationFrame` de 0 ao valor real, disparados pelo Intersection Observer apenas quando a seção entra no viewport — a animação de contagem cria engajamento ativo e percepção de dados sendo "revelados" em tempo real ao invés de números mortos.

❌ **5. Formulário de contato que redireciona para e-mail com resposta prometida "em até X dias"** — o formulário monta mensagem Markdown estruturada com todos os campos (nome, email, telefone, interesse, mensagem) e abre diretamente `wa.me/552132814724?text=...` — a conversão acontece no canal preferido do público-alvo (WhatsApp) com latência zero, eliminando o atrito do ciclo e-mail → resposta → agendamento.

❌ **6. Hero com altura fixa e layout que "corta" no mobile** — `height: 100vh; min-height: 600px` garante que o hero ocupe exatamente a viewport do dispositivo, com `background-position: center` e `object-fit: cover` na imagem, nunca cortando elementos críticos. O `min-height: 600px` previne micro-telas de colapsar o layout.

❌ **7. Header sempre visível que ocupa espaço permanente em scroll** — o auto-hide bidirecional (esconde ao scroll down, reaparece ao scroll up) é uma UX pattern de apps móveis nativos aplicada à LP, maximizando área de leitura durante consumo de conteúdo e trazendo o menu de volta quando o usuário sinaliza intenção de navegar (scroll reverso).

❌ **8. Cookie banner genérico com apenas "Aceitar/Rejeitar" sem controle granular** — o sistema de cookie implementado oferece 5 categorias independentes (necessários, funcionais, analytics, performance, publicidade) com toggle switches customizados, `localStorage` com expiração de 365 dias e `CustomEvent 'cookieConsentUpdated'` — conformidade LGPD e GDPR sem depender de serviços externos de terceiros.
