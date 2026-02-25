🧠 SKILL: SCHEMA.ORG MÁXIMO PARA LP — AG5 AGÊNCIA
Versão: 2.0 | Alvo: Landing Pages de Negócios Locais
Formato: JSON-LD (recomendado pelo Google)
​
Validação: https://validator.schema.org/

⚙️ FASE 0 — LEITURA AUTOMÁTICA DO HTML
Antes de qualquer coisa, varrer o código-fonte da LP e extrair:

O que buscar	Onde encontrar	Campo Schema
Nome comercial da empresa	<footer>, <title>, alt do logo, <h1>	name
Nome jurídico/real	Rodapé, seção "Sobre", termos	legalName
Endereço	Rodapé, seção contato	address
Telefone / WhatsApp	Botões CTA, rodapé, header	telephone
Email	Rodapé, formulário contato	email
Horários	Seção "Horários", rodapé	openingHoursSpecification
Serviços/Produtos	Seções de cards, listas, <h2>, <h3>	hasOfferCatalog
Perguntas & Respostas	Seção FAQ, accordions	FAQPage / Question
Persona / Responsável	Seção "Quem somos", "Sobre o Dr./Dra."	founder / employee
Redes Sociais	Ícones de redes no header/footer (href)	sameAs
Logo	<img> com alt contendo nome da empresa	logo
Imagens do negócio	Tags <img> relevantes com src absoluto	image
Avaliações	Seção de reviews/estrelas com número	aggregateRating
Bairro / Cidade	Endereço, URL slug, meta tags	areaServed
URL do site	Tag <link rel="canonical">, <meta og:url>	url / @id
🔴 REGRA PRIMORDIAL: Se um dado não estiver explícito no HTML/código, NÃO invente. Se for campo relevante para SEO e não puder ficar em branco sem prejudicar a leitura, use [placeholder] entre colchetes para edição futura (ex.: [email], [latitude], [instagram-empresa]). JAMAIS exponha CPF, RG, CNPJ (a menos que seja CNPJ exibido publicamente no rodapé), ou qualquer documento pessoal.
​

🌐 REGRA DE URL
Se não houver URL canônica explícita no código, use o padrão:

text
http://www.[slug-do-nome-da-empresa].ag5agencia.site
O slug é o nome comercial extraído do rodapé, em letras minúsculas, sem espaços, sem acentos. Exemplo: "Clínica Saúde Total" → http://www.clinicasaudetotal.ag5agencia.site

🏷️ FASE 1 — CLASSIFICAÇÃO DO TIPO DE NEGÓCIO
Analise serviços, produtos, palavras-chave dominantes no H1/H2 e defina o @type mais específico possível. Nunca use apenas LocalBusiness genérico se existir um subtipo mais preciso.

Mapa de Classificação
Setor	@type Recomendado	Indicadores no HTML
Advocacia	LegalService	"advogado", "jurídico", "OAB", "direito"
Dentista	Dentist	"dentista", "odonto", "CRO", "implante"
Médico / Clínica	Physician / MedicalClinic	"dr.", "dra.", "CRM", "consulta"
Contabilidade	AccountingService	"contador", "CRC", "fiscal", "IRPF"
Imobiliária	RealEstateAgent	"imóveis", "CRECI", "venda", "aluguel"
Salão de Beleza	BeautySalon	"cabelo", "manicure", "estética", "salão"
Restaurante	Restaurant	"cardápio", "mesa", "delivery", "prato"
Loja física	Store	"loja", "produto", "estoque", "compre"
Escola / Curso	EducationalOrganization	"curso", "turma", "matrícula", "aula"
Oficina / Auto	AutoRepair	"mecânica", "revisão", "pneu", "carro"
Academia	SportsActivityLocation	"musculação", "personal", "treino"
Veterinário	VeterinaryCare	"pet", "veterinário", "CRMV", "animal"
Farmácia	Pharmacy	"farmácia", "medicamento", "CRF"
Hotel / Pousada	LodgingBusiness	"quarto", "hospedagem", "check-in"
Serviços Gerais	ProfessionalService	Quando nenhum subtipo se encaixa
Se o negócio tiver dois tipos válidos (ex.: clínica odontológica que também é estética), use array: "@type": ["Dentist", "BeautySalon"]

🏗️ FASE 2 — GERAÇÃO DO SCHEMA COMPLETO
TEMPLATE UNIVERSAL — LP DE NEGÓCIO LOCAL
json
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "[TIPO-DETECTADO]",
      "@id": "http://www.[slug].ag5agencia.site/#negocio",
      "name": "[NOME COMERCIAL DO RODAPÉ]",
      "legalName": "[NOME JURÍDICO/REAL SE DIFERENTE]",
      "alternateName": "[VARIAÇÃO DE NOME SE HOUVER]",
      "url": "http://www.[slug].ag5agencia.site/",
      "logo": {
        "@type": "ImageObject",
        "url": "[URL-ABSOLUTA-DO-LOGO]",
        "width": 300,
        "height": 80
      },
      "image": [
        "[URL-IMAGEM-PRINCIPAL]",
        "[URL-IMAGEM-2]"
      ],
      "description": "[DESCRIÇÃO EXTRAÍDA DO META DESCRIPTION OU H1+SUBTÍTULO — 150 a 160 caracteres]",
      "telephone": "[+55-XX-XXXXX-XXXX]",
      "email": "[email]",
      "priceRange": "[$ / $$ / $$$]",
      "paymentAccepted": "[Dinheiro, Cartão de Crédito, Pix, etc. — se disponível]",
      "currenciesAccepted": "BRL",

      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[RUA/AV], nº [NÚMERO] – [COMPLEMENTO]",
        "addressLocality": "[CIDADE]",
        "addressRegion": "[UF]",
        "postalCode": "[CEP]",
        "addressCountry": "BR"
      },

      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "[latitude]",
        "longitude": "[longitude]"
      },

      "hasMap": "https://www.google.com/maps/search/?api=1&query=[NOME+EMPRESA]+[CIDADE]",

      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "[HH:MM]",
          "closes": "[HH:MM]"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "[HH:MM]",
          "closes": "[HH:MM]"
        }
      ],

      "areaServed": [
        {
          "@type": "City",
          "name": "[CIDADE PRINCIPAL]",
          "containedInPlace": {
            "@type": "State",
            "name": "[ESTADO COMPLETO]"
          }
        },
        {
          "@type": "Place",
          "name": "[BAIRRO PRINCIPAL DA EMPRESA]"
        },
        {
          "@type": "Place",
          "name": "[BAIRRO ADJACENTE 1 — gerado automaticamente]"
        },
        {
          "@type": "Place",
          "name": "[BAIRRO ADJACENTE 2]"
        },
        {
          "@type": "Place",
          "name": "[BAIRRO ADJACENTE 3]"
        },
        {
          "@type": "Place",
          "name": "[BAIRRO ADJACENTE 4]"
        },
        {
          "@type": "Place",
          "name": "[BAIRRO ADJACENTE 5]"
        }
      ],

      "founder": {
        "@type": "Person",
        "name": "[NOME DO RESPONSÁVEL/DR./DRA. SE DISPONÍVEL]",
        "jobTitle": "[CARGO OU ESPECIALIZAÇÃO]",
        "description": "[BIO CURTA SE DISPONÍVEL NO SITE]",
        "sameAs": [
          "[instagram-pessoal]"
        ]
      },

      "employee": {
        "@type": "Person",
        "name": "[NOME DE OUTRO PROFISSIONAL — SE LISTADO]",
        "jobTitle": "[CARGO]"
      },

      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços de [NOME DA EMPRESA]",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "[SERVIÇO 1 — EXTRAÍDO DO SITE]",
              "description": "[DESCRIÇÃO DO SERVIÇO 1]",
              "areaServed": "[CIDADE] – [UF]",
              "provider": {
                "@id": "http://www.[slug].ag5agencia.site/#negocio"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "[SERVIÇO 2]",
              "description": "[DESCRIÇÃO DO SERVIÇO 2]",
              "areaServed": "[CIDADE] – [UF]",
              "provider": {
                "@id": "http://www.[slug].ag5agencia.site/#negocio"
              }
            }
          }
        ]
      },

      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "[NOTA MÉDIA — SE DISPONÍVEL NO SITE]",
        "reviewCount": "[NÚMERO DE AVALIAÇÕES]",
        "bestRating": "5",
        "worstRating": "1"
      },

      "sameAs": [
        "[URL-GOOGLE-BUSINESS-PROFILE]",
        "[URL-INSTAGRAM-EMPRESA]",
        "[URL-FACEBOOK-EMPRESA]",
        "[URL-LINKEDIN-EMPRESA]",
        "[URL-YOUTUBE-EMPRESA]"
      ]
    },

    {
      "@type": "WebSite",
      "@id": "http://www.[slug].ag5agencia.site/#website",
      "url": "http://www.[slug].ag5agencia.site/",
      "name": "[NOME COMERCIAL]",
      "publisher": {
        "@id": "http://www.[slug].ag5agencia.site/#negocio"
      },
      "inLanguage": "pt-BR"
    },

    {
      "@type": "WebPage",
      "@id": "http://www.[slug].ag5agencia.site/#webpage",
      "url": "http://www.[slug].ag5agencia.site/",
      "name": "[TÍTULO DA PÁGINA — META TITLE]",
      "description": "[META DESCRIPTION]",
      "isPartOf": {
        "@id": "http://www.[slug].ag5agencia.site/#website"
      },
      "about": {
        "@id": "http://www.[slug].ag5agencia.site/#negocio"
      },
      "inLanguage": "pt-BR",
      "datePublished": "[AAAA-MM-DD]",
      "dateModified": "[AAAA-MM-DD]"
    },

    {
      "@type": "FAQPage",
      "@id": "http://www.[slug].ag5agencia.site/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "[PERGUNTA 1 — EXTRAÍDA DA SEÇÃO FAQ DO SITE]",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "[RESPOSTA 1 — EXTRAÍDA DO SITE]"
          }
        },
        {
          "@type": "Question",
          "name": "[PERGUNTA 2]",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "[RESPOSTA 2]"
          }
        },
        {
          "@type": "Question",
          "name": "[PERGUNTA 3]",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "[RESPOSTA 3]"
          }
        }
      ]
    }

  ]
}
📍 FASE 3 — GERAÇÃO AUTOMÁTICA DE BAIRROS ADJACENTES
Quando o bairro da empresa for identificado, gere automaticamente os 5 principais bairros adjacentes com base na localização geográfica real.

Algoritmo de geração:

Identificar o bairro base no endereço da LP

Identificar a cidade

Listar os bairros limítrofes mais populosos (norte, sul, leste, oeste, mais próximo)

Priorizar bairros com maior volume de busca local

Exemplos pré-mapeados (Rio de Janeiro):

Bairro Base	Adjacentes Sugeridos
Campo Grande	Senador Vasconcelos, Santíssimo, Cosmos, Inhoaíba, Paciência
Paciência	Campo Grande, Santa Cruz, Cosmos, Inhoaíba, Sepetiba
Santa Cruz	Paciência, Sepetiba, Guaratiba, Cosmos, Campo Grande
Bangu	Campo Grande, Padre Miguel, Senador Camará, Realengo, Magalhães Bastos
Barra da Tijuca	Recreio, Jacarepaguá, Camorim, Vargem Grande, Itanhangá
Copacabana	Ipanema, Leme, Botafogo, Flamengo, Leblon
Tijuca	Vila Isabel, Maracanã, Andaraí, Grajaú, São Cristóvão
Para outras cidades, a IA deve gerar os adjacentes com base no conhecimento geográfico do município informado.

🔍 FASE 4 — REGRAS DE FAQ SCHEMA
Aplicar FAQPage somente quando a LP tiver seção de perguntas e respostas visível ao usuário.

Situação	Schema Correto
LP com seção "Perguntas Frequentes" / accordion	FAQPage dentro do @graph
Apenas 1 pergunta isolada na LP	Question com acceptedAnswer
Nenhuma FAQ visível na LP	Omitir o bloco FAQPage completamente
Página dedicada /faq	FAQPage como @type principal
👤 FASE 5 — PERSONA / RESPONSÁVEL
Incluir bloco founder ou employee somente quando o site apresentar explicitamente:

Nome do profissional (Dr., Dra., título)

Foto com identificação

Bio, formação ou especialização mencionada no texto

json
"founder": {
  "@type": "Person",
  "name": "[NOME EXTRAÍDO DO SITE]",
  "jobTitle": "[CARGO/ESPECIALIZAÇÃO EXTRAÍDO]",
  "description": "[BIO EXTRAÍDA DO SITE — máx. 200 caracteres]",
  "image": "[URL-FOTO-DO-PROFISSIONAL]",
  "sameAs": [
    "[instagram-pessoal — se houver link no site]"
  ]
}
Se apenas o primeiro nome for exibido ou não houver certeza, use [nome-profissional] como placeholder.

📊 FASE 6 — PONTUAÇÃO DE COMPLETUDE
Após gerar o Schema, calcule a pontuação:

Bloco	Pontos	Status
name + @type + address completo	30	Obrigatório
telephone + email	15	Obrigatório
geo (lat/lng)	15	Importante
openingHoursSpecification	10	Importante
sameAs (redes sociais)	10	Importante
founder / employee	10	Complementar
areaServed com bairros	5	Complementar
logo + image + aggregateRating	5	Extra
TOTAL	100	
Pontuação	Status	Ação
90–100	✅ EXCELENTE	Publicar
75–89	⚠️ BOM	Preencher placeholders restantes
60–74	⚠️ REGULAR	Coletar dados faltantes urgentes
0–59	❌ INSUFICIENTE	Revisar HTML da LP antes de publicar
✅ FASE 7 — CHECKLIST FINAL + LISTA DE PENDÊNCIAS
Ao final, sempre gerar:

text
📋 SCHEMA GERADO — RELATÓRIO FINAL

✅ Dados extraídos automaticamente:
- [listar campos preenchidos]

⚠️ Placeholders para edição futura:
- [campo]: [motivo — não encontrado no HTML]
- [latitude] / [longitude]: Obter em maps.google.com
- [email]: Não encontrado no site
- [instagram-empresa]: Link não encontrado no rodapé

🔗 Validar em: https://validator.schema.org/
📍 Conferir NAP idêntico ao Google Business Profile
🛡️ REGRAS DE OURO — INVIOLÁVEIS
Nunca inventar dados: telefone, coordenadas, email, redes sociais, avaliações
​

Nunca expor documentos pessoais: CPF, RG, mesmo se presentes no HTML

Sempre usar placeholders [campo] para dados ausentes mas relevantes

URL padrão: http://www.[slug].ag5agencia.site quando não houver canônica explícita

Nome no name: sempre o nome comercial do rodapé; legalName para o nome real/jurídico

@graph sempre que houver múltiplos schemas na mesma página (LocalBusiness + WebPage + FAQ)
​

@id único por entidade, baseado na URL canônica com fragmento #negocio, #webpage, #faq

Omitir campos completamente se não houver dado real — não deixar valor vazio ""
​

Validar sempre em https://validator.schema.org/ antes de entregar ao cliente
​

NAP idêntico ao Google Business Profile do cliente