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
- **Ajustes Pró-Responsividade:** Nunca esvazie margens de seções e tente que se comportem como paredes contíguas fixas (`margin: 100px`). Acolha sempre o conceito de espaçamento de preenchimento fluido `clamp()`. As áreas clicáveis no mobile têm que ter largura de "dedo gordo" (44px) minimamente.

---

## 5. Regras Operacionais e de Proteção (Protocolo de Execução)

O Agente que aplicar este padrão **MUST** (deve estritamente) seguir estas condutas de preservação do código legado:

- **Invisible Design (Não quebre a estrutura):** Você é um especialista em polimento e refinamento minimalista. A regra de ouro é: **Nunca altere a estrutura HTML** (grids vitais e flexbox containers principais) a menos que ela esteja severamente quebrada prejudicando o layout. Entenda analiticamente se um "espaço branco" é um respiro intencional proposital da seção original ou um bug visual antes de cortá-lo.
- **Protocolo de Diagnóstico Prévio (`UI_IMPROVEMENTS.md`):** Antes de aplicar qualquer mudança invasiva no código, você deve obrigatoriamente criar um laudo. Gere um relatório nomeado `UI_IMPROVEMENTS.md` na raiz ou pasta `/Docs` listando tudo o que encontrou no projeto cru, utilizando as tags classificatórias: `[CRÍTICO]`, `[SUGESTÃO]` e `[OK]`.
- **Restrição de Animações (Mobile/CLS):** No mobile, rastreie qualquer componente que possa gerar _Layout Shift_ (CLS) ou animação pesada/travada (como paralaxe forçado ou fade-ins complexos). Em telas menores (`@media max-width: 768px`), simplifique, bloqueie ou remova animações pesadas de entrada. A experiência touch tem que ser rápida e fluida, não engasgada.
- **Protocolo Fallback de Favicon Inteligente:** Se o projeto original não tiver uma Logo física/isolada razoável para criar a tag obrigatória do `<link rel="icon">`, **não a deixe vazia ou quebrada (404)**. Imediatamente crie um favicon SVG inline genérico no código (como uma balança se for pra advocacia, um dente para odontologia, etc.) para funcionar como *Fallback (temporário)* até a aprovação visual final. Comunique essa criação no relatório diagnóstico.