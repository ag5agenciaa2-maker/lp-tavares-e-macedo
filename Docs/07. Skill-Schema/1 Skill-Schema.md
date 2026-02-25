🧠 SKILL: SCHEMA.ORG — LP NEGÓCIOS LOCAIS (AG5)
v2.2 | Formato: JSON-LD | Validação: https://validator.schema.org/ 
​

⚙️ ETAPA 0 — LEITURA DO HTML
Varrer o código-fonte e mapear automaticamente:

Campo Schema	Fonte no HTML
name	Nome completo com palavras-chave exatamente como no <footer>, <title> ou alt do logo
alternateName	Versão curta/real da marca — remover descritores após |, -, –, ,
legalName	Rodapé institucional, seção "Sobre"
address	Rodapé, seção contato
telephone	Botões CTA, rodapé, header
email	Rodapé, formulário
openingHoursSpecification	Seção horários, rodapé
hasOfferCatalog	Cards de serviços, <h2>, <h3>
FAQPage	Acordeões, seção "Dúvidas"
founder / employee	Seção "Sobre o Dr./Dra.", bio
sameAs	Links de ícones de redes no header/footer
logo / image	<img> com nome da empresa no alt
aggregateRating	Seção de estrelas/reviews com número visível
areaServed	Endereço, slug da URL, meta tags
url	<link rel="canonical">, <meta og:url>
🔴 REGRA PRIMORDIAL: Nunca inventar dados. Se o campo estiver ausente no HTML, usar [placeholder] entre colchetes. Nunca expor CPF, RG ou documentos pessoais. Omitir campos com valor vazio — nunca deixar "".
​

URL padrão (se não houver canônica explícita no HTML):
http://www.[slug-empresa].ag5agencia.site
O slug é o alternateName em minúsculas, sem acentos e sem espaços.

🏷️ ETAPA 1 — CLASSIFICAÇÃO DO @type
Usar o subtipo mais específico disponível. Nunca usar LocalBusiness genérico quando existir opção mais precisa.

Indicadores no HTML	@type
"advogado", "OAB", "jurídico"	LegalService
"dentista", "CRO", "odonto"	Dentist
"médico", "CRM", "clínica"	Physician / MedicalClinic
"contador", "CRC", "fiscal"	AccountingService
"CRECI", "imóvel", "aluguel"	RealEstateAgent
"cabelo", "estética", "salão"	BeautySalon
"cardápio", "delivery", "prato"	Restaurant
"mecânica", "revisão", "carro"	AutoRepair
"treino", "musculação", "academia"	SportsActivityLocation
"pet", "veterinário", "CRMV"	VeterinaryCare
"curso", "matrícula", "aula"	EducationalOrganization
"farmácia", "medicamento", "CRF"	Pharmacy
"quarto", "hospedagem", "check-in"	LodgingBusiness
Nenhum subtipo se encaixa	ProfessionalService
Dois tipos válidos? Usar array: "@type": ["Dentist", "BeautySalon"]

🏗️ ETAPA 2 — SCHEMA JSON-LD COMPLETO
json
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "[TIPO-DETECTADO]",
      "@id": "http://www.[slug].ag5agencia.site/#negocio",

      "name": "[NOME COMPLETO DO RODAPÉ COM PALAVRAS-CHAVE — ex: A&A Advocacia Especializada em Direito | Trânsito | Trabalho | Família | Previdenciário]",
      "alternateName": "[NOME CURTO/REAL DA EMPRESA — ex: A&A Advocacia Especializada]",
      "legalName": "[RAZÃO SOCIAL — SE DIFERENTE E DISPONÍVEL NO SITE]",

      "url": "http://www.[slug].ag5agencia.site/",
      "logo": "[URL-ABSOLUTA-DO-LOGO]",
      "image": [
        "[URL-IMAGEM-PRINCIPAL]",
        "[URL-IMAGEM-2]"
      ],
      "description": "[META DESCRIPTION OU H1 + SUBTÍTULO — máx. 160 caracteres]",
      "telephone": "[+55-XX-XXXXX-XXXX]",
      "email": "[email]",
      "priceRange": "[$ / $$ / $$$]",
      "currenciesAccepted": "BRL",
      "paymentAccepted": "[formas de pagamento — se disponível no site]",
      "foundingDate": "[data-de-abertura — se disponível no site]",

      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[RUA/AV, nº NÚMERO – COMPLEMENTO]",
        "addressLocality": "[CIDADE]",
        "addressRegion": "[UF]",
        "postalCode": "[CEP]",
        "addressCountry": "BR"
      },

      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "[DERIVADA DO ENDEREÇO ACIMA]",
        "longitude": "[DERIVADA DO ENDEREÇO ACIMA]"
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
        { "@type": "Place", "name": "[BAIRRO PRINCIPAL DA EMPRESA]" },
        { "@type": "Place", "name": "[BAIRRO ADJACENTE 1]" },
        { "@type": "Place", "name": "[BAIRRO ADJACENTE 2]" },
        { "@type": "Place", "name": "[BAIRRO ADJACENTE 3]" },
        { "@type": "Place", "name": "[BAIRRO ADJACENTE 4]" },
        { "@type": "Place", "name": "[BAIRRO ADJACENTE 5]" }
      ],

      "founder": {
        "@type": "Person",
        "name": "[NOME DO RESPONSÁVEL — SE DISPONÍVEL NO SITE]",
        "jobTitle": "[CARGO / ESPECIALIZAÇÃO]",
        "description": "[BIO CURTA EXTRAÍDA DO SITE — máx. 200 caracteres]",
        "image": "[URL-FOTO-DO-PROFISSIONAL]",
        "sameAs": ["[instagram-pessoal — se houver link no site]"]
      },

      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços de [ALTERNATENAME DA EMPRESA]",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "[SERVIÇO 1 — EXTRAÍDO DO SITE]",
              "description": "[DESCRIÇÃO SERVIÇO 1]",
              "areaServed": "[CIDADE] – [UF]",
              "provider": { "@id": "http://www.[slug].ag5agencia.site/#negocio" }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "[SERVIÇO 2]",
              "description": "[DESCRIÇÃO SERVIÇO 2]",
              "areaServed": "[CIDADE] – [UF]",
              "provider": { "@id": "http://www.[slug].ag5agencia.site/#negocio" }
            }
          }
        ]
      },

      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "[NOTA MÉDIA — SE VISÍVEL NO SITE]",
        "reviewCount": "[Nº DE AVALIAÇÕES — SE VISÍVEL NO SITE]",
        "bestRating": "5",
        "worstRating": "1"
      },

      "sameAs": [
        "[URL-GOOGLE-BUSINESS-PROFILE]",
        "[URL-INSTAGRAM-EMPRESA]",
        "[URL-FACEBOOK-EMPRESA]",
        "[URL-LINKEDIN-EMPRESA]"
      ]
    },

    {
      "@type": "WebSite",
      "@id": "http://www.[slug].ag5agencia.site/#website",
      "url": "http://www.[slug].ag5agencia.site/",
      "name": "[ALTERNATENAME DA EMPRESA]",
      "publisher": { "@id": "http://www.[slug].ag5agencia.site/#negocio" },
      "inLanguage": "pt-BR"
    },

    {
      "@type": "WebPage",
      "@id": "http://www.[slug].ag5agencia.site/#webpage",
      "url": "http://www.[slug].ag5agencia.site/",
      "name": "[META TITLE DA PÁGINA]",
      "description": "[META DESCRIPTION]",
      "isPartOf": { "@id": "http://www.[slug].ag5agencia.site/#website" },
      "about": { "@id": "http://www.[slug].ag5agencia.site/#negocio" },
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
          "name": "[PERGUNTA 1 — DA SEÇÃO FAQ DO SITE]",
          "acceptedAnswer": { "@type": "Answer", "text": "[RESPOSTA 1]" }
        },
        {
          "@type": "Question",
          "name": "[PERGUNTA 2]",
          "acceptedAnswer": { "@type": "Answer", "text": "[RESPOSTA 2]" }
        },
        {
          "@type": "Question",
          "name": "[PERGUNTA 3]",
          "acceptedAnswer": { "@type": "Answer", "text": "[RESPOSTA 3]" }
        }
      ]
    }

  ]
}
FAQPage: incluir somente se a LP tiver seção de perguntas visível. Omitir o bloco inteiro se não houver.
​
founder: incluir somente se o site apresentar nome, bio ou foto do responsável explicitamente.
aggregateRating: incluir somente se nota e número de avaliações estiverem visíveis no HTML.

📍 ETAPA 3 — COORDENADAS GPS
A IA não solicita coordenadas ao cliente. Deriva latitude e longitude diretamente do endereço extraído do HTML, pois é o mesmo cadastrado no Google Business Profile.
​

text
Endereço extraído → Geocodificação automática → latitude + longitude
Exemplo:
"Rua das Acácias, 120 – Sala 3, Campo Grande, Rio de Janeiro – RJ"
→ latitude: -22.9035 / longitude: -43.5594
Se o endereço estiver incompleto ou sem número, não gerar coordenadas — registrar como pendência no arquivo de faltantes.

📍 ETAPA 4 — BAIRROS ADJACENTES
Com o bairro base identificado no endereço, gerar automaticamente os 5 vizinhos mais relevantes.
​

Bairro Base	Adjacentes Sugeridos
Campo Grande – RJ	Senador Vasconcelos, Santíssimo, Cosmos, Inhoaíba, Paciência
Paciência – RJ	Campo Grande, Santa Cruz, Cosmos, Inhoaíba, Sepetiba
Santa Cruz – RJ	Paciência, Sepetiba, Guaratiba, Cosmos, Campo Grande
Bangu – RJ	Campo Grande, Padre Miguel, Senador Camará, Realengo, Magalhães Bastos
Barra da Tijuca – RJ	Recreio, Jacarepaguá, Camorim, Vargem Grande, Itanhangá
Copacabana – RJ	Ipanema, Leme, Botafogo, Flamengo, Leblon
Tijuca – RJ	Vila Isabel, Maracanã, Andaraí, Grajaú, São Cristóvão
Para outras cidades, gerar com base no conhecimento geográfico do município identificado no endereço.

📁 ETAPA 5 — GERAR ARQUIVO DE PENDÊNCIAS
Ao finalizar o Schema, criar obrigatoriamente a estrutura:

text
📂 Falta no esquema/
    └── falta-adicionar.md
Conteúdo do arquivo falta-adicionar.md
text
# 📋 Falta Adicionar no Schema
**Empresa:** [ALTERNATENAME DA EMPRESA]
**Data de geração:** [DD/MM/AAAA]

---

## 🔴 CRÍTICOS — Impactam SEO diretamente

- [ ] `email` — Não encontrado no site
- [ ] `geo.latitude` / `geo.longitude` — Endereço incompleto, confirmar em: https://maps.google.com
- [ ] `address.postalCode` — CEP não localizado no HTML
- [ ] `openingHoursSpecification` — Horários não exibidos no site

## 🟡 IMPORTANTES

- [ ] `sameAs` Google Business Profile — Link do perfil da empresa no Google não encontrado
- [ ] `sameAs` Instagram — Link do perfil da empresa não encontrado
- [ ] `sameAs` Facebook — Link da página da empresa não encontrado
- [ ] `sameAs` LinkedIn — Link não encontrado (verificar se aplicável)
- [ ] `aggregateRating` — Nota e número de avaliações não visíveis no HTML

## 🔵 COMPLEMENTARES

- [ ] `foundingDate` — Data de abertura/fundação da empresa não informada
- [ ] `founder.name` — Nome do responsável não identificado no site
- [ ] `founder.sameAs` — Instagram pessoal do responsável não encontrado
- [ ] `priceRange` — Faixa de preço não informada no site
- [ ] `paymentAccepted` — Formas de pagamento não listadas
- [ ] `logo` — URL absoluta do logo não encontrada
- [ ] `image` — Imagens representativas sem URL absoluta
- [ ] `datePublished` / `dateModified` — Datas da LP não disponíveis no HTML
- [ ] `legalName` — Razão social não exibida no site

## 🟢 FAQ

- [ ] Seção FAQ não encontrada na LP — considerar adicionar ao site para ativar rich results

---

## ✅ Resolvidos Automaticamente

- [x] `geo.latitude` / `geo.longitude` — Derivadas do endereço: [ENDEREÇO COMPLETO EXTRAÍDO]
- [x] `name` — Extraído do rodapé: [NOME COMPLETO]
- [x] `alternateName` — Derivado do name: [NOME CURTO]
- [x] `areaServed` — Bairro base + 5 adjacentes gerados automaticamente

---

📌 **Após preencher cada item:** remover o `[ ]`, substituir o placeholder no Schema e revalidar em https://validator.schema.org/
📌 **NAP** deve ser idêntico ao Google Business Profile após edição
🛡️ REGRAS INVIOLÁVEIS
Nunca inventar telefone, coordenadas, email, links de redes sociais
​

Nunca expor CPF, RG — mesmo se presentes no HTML
​

Campos ausentes → usar [placeholder] e registrar no falta-adicionar.md

name = texto completo do rodapé com palavras-chave e separadores

alternateName = marca/nome curto, sem descritores de serviço

geo = derivado automaticamente do endereço extraído do HTML

@graph obrigatório quando houver múltiplos schemas na mesma página
​

@id único por entidade: #negocio, #website, #webpage, #faq

Omitir blocos inteiros se não houver dado real (founder, aggregateRating, FAQPage)
​

Criar sempre a pasta Falta no esquema/ com o arquivo falta-adicionar.md ao final