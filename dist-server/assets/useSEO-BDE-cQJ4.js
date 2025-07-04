import { jsxs, jsx } from 'react/jsx-runtime';
import { a as useAnalytics, H as Helmet } from '../main.js';
import { useMemo } from 'react';

const SEO = ({
  title = "Bernof Co - Managing the Future | Digital Solutions & Growth Services",
  description = "Transform your digital presence with Bernof Co's comprehensive development, design, and marketing services. Book your discovery call today.",
  keywords = "startup development, MVP development, outsource app development, startup tech partner, idea to production, development company, web development, mobile app development, digital agency, digital transformation",
  canonical,
  ogType = "website",
  ogImage = "https://bernofco.com/bernofco-social-share.png",
  schemaData,
  url = "https://bernofco.com",
  type = "website"
}) => {
  useAnalytics();
  const currentUrl = canonical || (typeof window !== "undefined" ? window.location.href : url);
  const fullTitle = title.includes("Bernof Co") ? title : `${title} | Bernof Co`;
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": fullTitle,
    "description": description,
    "url": currentUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Bernof Co",
      "url": "https://bernofco.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bernof Co",
      "url": "https://bernofco.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bernofco.com/favicon.ico"
      }
    }
  };
  return /* @__PURE__ */ jsxs(Helmet, { children: [
    /* @__PURE__ */ jsx("title", { children: fullTitle }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
    keywords && /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
    /* @__PURE__ */ jsx("meta", { name: "author", content: "Bernof Co" }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: fullTitle }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: ogType }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: currentUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImage }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Bernof Co" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:site", content: "@bernof_co" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: fullTitle }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImage }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: currentUrl }),
    /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
    /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
    /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#000000" }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaData || defaultSchema) })
  ] });
};

const countriesConfig = {
  ch: {
    code: "ch",
    name: "Switzerland",
    currency: "CHF",
    currencySymbol: "€",
    flag: "🇨🇭",
    marketContext: {
      painPoints: [
        "Swiss web agencies charge €120-€180 per hour - 3.2x higher than EU average",
        "Switzerland faces a 15,000 IT specialist shortage with 4-6 month hiring delays",
        "Swiss web projects take 3-6 months longer than EU average due to overbooked agencies",
        "Average Swiss business website costs €15,000-€35,000 vs €6,000-€14,000 with Bernof Co"
      ],
      opportunities: [
        "Access top European talent without Swiss premium pricing",
        "Same timezone, European business culture, GDPR compliance",
        "60% cost savings while maintaining enterprise-grade quality",
        "Immediate project start - no waiting lists or recruitment delays"
      ],
      keyStats: [
        "Swiss Agency Average: €120-€180/hour vs Bernof Co: €50-€70/hour",
        "Local Website Cost: €15,000-€35,000 vs Bernof Co: €6,000-€14,000",
        "IT Talent Shortage: 15,000+ unfilled positions",
        "Average Hiring Time: 4-6 months vs Bernof Co: 48 hours project start"
      ],
      heroStats: {
        localCost: "€15,000-€35,000",
        bernofCost: "€6,000-€14,000",
        savings: "60% less"
      }
    },
    seoKeywords: {
      web: ["web development Switzerland", "Swiss website design", "Zurich web developers", "Geneva web design", "Swiss e-commerce development", "GDPR compliant web development Switzerland"],
      software: ["software development Switzerland", "Swiss app development", "Zurich software company", "Geneva software solutions", "Swiss enterprise software", "custom software development Switzerland"],
      startup: ["startup development Switzerland", "Swiss MVP development", "Zurich startup services", "Geneva startup consulting", "Swiss tech startup", "MVP development Switzerland cost"]
    },
    pricing: {
      web: { min: 6e3, max: 14e3, localMin: 15e3, localMax: 35e3 },
      software: { min: 32e3, max: 6e4, localMin: 8e4, localMax: 15e4 },
      startup: { min: 32e3, max: 6e4, localMin: 8e4, localMax: 15e4 }
    }
  },
  uk: {
    code: "uk",
    name: "United Kingdom",
    currency: "GBP",
    currencySymbol: "£",
    flag: "🇬🇧",
    marketContext: {
      painPoints: [
        "UK web agencies charge £80-£120 per hour - post-Brexit talent costs rising",
        "Digital skills gap: 2.6M unfilled roles by 2030 affecting project timelines",
        "High competition in London drives development costs 40% above EU average",
        "Average UK business website costs £12,000-£28,000 vs £4,800-£11,200 with Bernof Co"
      ],
      opportunities: [
        "Access European talent pool without visa complications",
        "Same business hours, cultural alignment, native English communication",
        "60% cost savings compared to London and major UK city agencies",
        "Immediate team scaling without recruitment overhead"
      ],
      keyStats: [
        "UK Agency Average: £80-£120/hour vs Bernof Co: £32-£48/hour",
        "Local Website Cost: £12,000-£28,000 vs Bernof Co: £4,800-£11,200",
        "Tech Sector Value: £149B contribution to UK economy",
        "Startup Ecosystem: $1T+ value (3rd globally) but high development costs"
      ],
      heroStats: {
        localCost: "£12,000-£28,000",
        bernofCost: "£4,800-£11,200",
        savings: "60% less"
      }
    },
    seoKeywords: {
      web: ["web development UK", "British website design", "London web developers", "Manchester web design", "UK e-commerce development", "post-Brexit web development"],
      software: ["software development UK", "British app development", "London software company", "Manchester software solutions", "UK enterprise software", "fintech development UK"],
      startup: ["startup development UK", "British MVP development", "London startup services", "Manchester startup consulting", "UK tech startup", "MVP development London cost"]
    },
    pricing: {
      web: { min: 4800, max: 11200, localMin: 12e3, localMax: 28e3 },
      software: { min: 25600, max: 48e3, localMin: 64e3, localMax: 12e4 },
      startup: { min: 25600, max: 48e3, localMin: 64e3, localMax: 12e4 }
    }
  },
  us: {
    code: "us",
    name: "United States",
    currency: "USD",
    currencySymbol: "$",
    flag: "🇺🇸",
    marketContext: {
      painPoints: [
        "US web agencies charge $100-$200 per hour - Silicon Valley premium affects entire market",
        "Developer shortage: 1.2M unfilled positions driving up costs nationwide",
        "Average US business website costs $15,000-$40,000 vs $6,000-$16,000 with Bernof Co",
        "Rapid technology evolution pressure requires constant expensive upgrades"
      ],
      opportunities: [
        "Access European expertise at fraction of Silicon Valley costs",
        "Overlap business hours with US East Coast, professional English communication",
        "60% cost savings compared to major US metropolitan areas",
        "European data privacy standards exceed US requirements"
      ],
      keyStats: [
        "US Agency Average: $100-$200/hour vs Bernof Co: $40-$80/hour",
        "Local Website Cost: $15,000-$40,000 vs Bernof Co: $6,000-$16,000",
        "Tech Industry Value: $1.8T (10% of GDP)",
        "Annual Startup Funding: $240B+ but high development costs limit runway"
      ],
      heroStats: {
        localCost: "$15,000-$40,000",
        bernofCost: "$6,000-$16,000",
        savings: "60% less"
      }
    },
    seoKeywords: {
      web: ["web development USA", "American website design", "New York web developers", "Silicon Valley web design alternative", "US e-commerce development", "cost-effective web development USA"],
      software: ["software development USA", "American app development", "Silicon Valley alternative software", "New York software solutions", "US enterprise software", "affordable software development USA"],
      startup: ["startup development USA", "American MVP development", "Silicon Valley startup alternative", "New York startup consulting", "US tech startup", "affordable MVP development USA"]
    },
    pricing: {
      web: { min: 6e3, max: 16e3, localMin: 15e3, localMax: 4e4 },
      software: { min: 32e3, max: 64e3, localMin: 8e4, localMax: 16e4 },
      startup: { min: 32e3, max: 64e3, localMin: 8e4, localMax: 16e4 }
    }
  },
  it: {
    code: "it",
    name: "Italy",
    currency: "EUR",
    currencySymbol: "€",
    flag: "🇮🇹",
    marketContext: {
      painPoints: [
        "Italian web agencies charge €60-€100 per hour but limited advanced expertise",
        "Digital transformation lag: traditional industries 18 months behind EU average",
        "Limited local tech talent pool concentrated in Milan/Rome areas",
        "Average Italian business website costs €10,000-€24,000 vs €4,000-€9,600 with Bernof Co"
      ],
      opportunities: [
        "Access advanced European development expertise for Italian market",
        "Same timezone, cultural understanding, Italian language capabilities",
        "60% cost savings while gaining access to cutting-edge technologies",
        "Bridge digital transformation gap with modern solutions"
      ],
      keyStats: [
        "Italian Agency Average: €60-€100/hour vs Bernof Co: €24-€40/hour",
        "Local Website Cost: €10,000-€24,000 vs Bernof Co: €4,000-€9,600",
        "Digital Economy: 4.2% of GDP (below EU average of 8.2%)",
        "Tech Skills Gap: 135,000 unfilled positions by 2025"
      ],
      heroStats: {
        localCost: "€10,000-€24,000",
        bernofCost: "€4,000-€9,600",
        savings: "60% less"
      }
    },
    seoKeywords: {
      web: ["web development Italy", "Italian website design", "Milan web developers", "Rome web design", "Italian e-commerce development", "sviluppo web Italia"],
      software: ["software development Italy", "Italian app development", "Milan software company", "Rome software solutions", "Italian enterprise software", "sviluppo software Italia"],
      startup: ["startup development Italy", "Italian MVP development", "Milan startup services", "Rome startup consulting", "Italian tech startup", "sviluppo MVP Italia"]
    },
    pricing: {
      web: { min: 4e3, max: 9600, localMin: 1e4, localMax: 24e3 },
      software: { min: 2e4, max: 38400, localMin: 5e4, localMax: 96e3 },
      startup: { min: 2e4, max: 38400, localMin: 5e4, localMax: 96e3 }
    }
  }
};
const getCountryConfig = (countryCode) => {
  return countriesConfig[countryCode] || null;
};

const useSEO = (page = "home") => {
  return useMemo(() => {
    const baseUrl = "https://bernofco.com";
    if (page.includes("/")) {
      const [countryCode, serviceType] = page.split("/");
      return getCountrySEO(countryCode, serviceType, baseUrl);
    }
    switch (page) {
      case "home":
        return {
          title: "Premier Digital Agency | Web Development & Startup Services Europe/USA | Bernof Co",
          description: "Transform your business with Europe's leading digital agency. Expert web development, mobile apps, and startup services across USA, UK, and Europe. From $3,999. 100+ successful projects. Book free consultation today.",
          keywords: "digital agency europe, web development usa, mobile app development, startup development services, MVP development, software development company, UI/UX design agency, tech consulting, react development, node.js development, digital transformation",
          canonical: baseUrl,
          breadcrumbs: [
            { name: "Home", url: baseUrl }
          ],
          schemaData: {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${baseUrl}/#organization`,
                "name": "Bernof Co",
                "alternateName": "Bernof Company",
                "description": "Premier digital solutions company specializing in web development, mobile apps, and startup development services across Europe and USA",
                "url": baseUrl,
                "logo": {
                  "@type": "ImageObject",
                  "url": `${baseUrl}/favicon.ico`,
                  "width": 512,
                  "height": 512
                },
                "image": {
                  "@type": "ImageObject",
                  "url": `${baseUrl}/bernofco-social-share.png`,
                  "width": 1200,
                  "height": 630
                },
                "sameAs": [
                  "https://twitter.com/bernof_co",
                  "https://www.linkedin.com/company/bernof-co",
                  "https://github.com/bernof-co"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": ["GB", "US", "DE", "FR"],
                  "addressRegion": ["Europe", "North America"]
                },
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+442030000000",
                    "contactType": "customer service",
                    "email": "info@bernofco.com",
                    "availableLanguage": ["English"],
                    "areaServed": ["GB", "US", "EU"]
                  },
                  {
                    "@type": "ContactPoint",
                    "contactType": "sales",
                    "email": "sales@bernofco.com",
                    "availableLanguage": ["English"]
                  }
                ],
                "foundingDate": "2020",
                "numberOfEmployees": "10-50",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "127",
                  "bestRating": "5"
                }
              },
              {
                "@type": "WebSite",
                "@id": `${baseUrl}/#website`,
                "url": baseUrl,
                "name": "Bernof Co - Digital Solutions & Startup Development",
                "description": "Premier digital agency offering web development, mobile app development, and comprehensive startup services across Europe and USA",
                "publisher": {
                  "@id": `${baseUrl}/#organization`
                },
                "potentialAction": [
                  {
                    "@type": "SearchAction",
                    "target": `${baseUrl}/search?q={search_term_string}`,
                    "query-input": "required name=search_term_string"
                  }
                ]
              },
              {
                "@type": "Service",
                "@id": `${baseUrl}/#services`,
                "name": "Digital Development Services",
                "provider": {
                  "@id": `${baseUrl}/#organization`
                },
                "areaServed": [
                  {
                    "@type": "Country",
                    "name": "United States"
                  },
                  {
                    "@type": "Country",
                    "name": "United Kingdom"
                  },
                  {
                    "@type": "Country",
                    "name": "Germany"
                  },
                  {
                    "@type": "Country",
                    "name": "France"
                  },
                  {
                    "@type": "Place",
                    "name": "Europe"
                  }
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Digital Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Web Development",
                        "description": "Custom web application development using React, Node.js, and TypeScript"
                      },
                      "price": "4999",
                      "priceCurrency": "USD",
                      "availability": "https://schema.org/InStock"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Mobile App Development",
                        "description": "Native and cross-platform mobile application development"
                      },
                      "price": "7999",
                      "priceCurrency": "USD",
                      "availability": "https://schema.org/InStock"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Startup Development",
                        "description": "End-to-end startup development from MVP to scaling"
                      },
                      "price": "3999",
                      "priceCurrency": "USD",
                      "availability": "https://schema.org/InStock"
                    }
                  ]
                }
              }
            ]
          }
        };
      case "blog":
        return {
          title: "Blog - Digital Insights & Industry Trends | Bernof Co",
          description: "Explore the latest insights on web development, startup growth, and digital innovation. Expert analysis and practical tips from industry professionals.",
          keywords: "web development blog, startup insights, digital marketing trends, tech innovation, business strategy, software development tips, digital transformation",
          canonical: `${baseUrl}/blog`,
          breadcrumbs: [
            { name: "Home", url: baseUrl },
            { name: "Blog", url: `${baseUrl}/blog` }
          ],
          schemaData: {
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": `${baseUrl}/blog#blog`,
            "name": "Bernof Co Blog",
            "description": "Digital insights and industry trends from Bernof Co - covering web development, startup growth, and digital innovation",
            "url": `${baseUrl}/blog`,
            "publisher": {
              "@id": `${baseUrl}/#organization`
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${baseUrl}/blog`
            }
          }
        };
      case "startup-development":
        return {
          title: "Startup Development Services Europe/USA | MVP to Scale | Expert Tech Partner | Bernof Co",
          description: "Launch your startup with confidence. Expert MVP development, technical consulting, and scaling solutions across Europe and USA. 100+ successful startups launched. From $3,999. Book free consultation.",
          keywords: "startup development europe, startup development usa, MVP development services, startup tech partner, idea to production, startup consulting, outsource app development, startup CTO services, product development, startup launch, technical co-founder",
          canonical: `${baseUrl}/startup-development`,
          breadcrumbs: [
            { name: "Home", url: baseUrl },
            { name: "Startup Development", url: `${baseUrl}/startup-development` }
          ],
          schemaData: {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": `${baseUrl}/startup-development#service`,
                "name": "Startup Development Services",
                "description": "Comprehensive startup development services from MVP to scaling, including technical consulting, product development, and growth strategy for European and American startups",
                "provider": {
                  "@type": "Organization",
                  "@id": `${baseUrl}/#organization`
                },
                "areaServed": [
                  {
                    "@type": "Place",
                    "name": "Europe"
                  },
                  {
                    "@type": "Place",
                    "name": "United States"
                  },
                  {
                    "@type": "Place",
                    "name": "United Kingdom"
                  },
                  {
                    "@type": "Place",
                    "name": "Germany"
                  },
                  {
                    "@type": "Place",
                    "name": "France"
                  }
                ],
                "serviceType": "Software Development",
                "category": ["Startup Services", "MVP Development", "Technical Consulting"],
                "audience": {
                  "@type": "Audience",
                  "audienceType": "Entrepreneurs and Startups"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Startup Development Packages",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "name": "MVP Validation",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "MVP Validation & Development"
                      },
                      "price": "3999",
                      "priceCurrency": "USD",
                      "availability": "https://schema.org/InStock",
                      "validFrom": "2024-01-01",
                      "priceValidUntil": "2024-12-31"
                    },
                    {
                      "@type": "Offer",
                      "name": "Full MVP Launch",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Complete MVP Launch Package"
                      },
                      "price": "9999",
                      "priceCurrency": "USD",
                      "availability": "https://schema.org/InStock",
                      "validFrom": "2024-01-01",
                      "priceValidUntil": "2024-12-31"
                    },
                    {
                      "@type": "Offer",
                      "name": "Scale & Growth",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Scaling & Growth Services"
                      },
                      "price": "19999",
                      "priceCurrency": "USD",
                      "availability": "https://schema.org/InStock"
                    }
                  ]
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": baseUrl
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Startup Development",
                    "item": `${baseUrl}/startup-development`
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How long does MVP development take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "MVP development typically takes 4-8 weeks depending on complexity. We follow an agile approach to deliver working software quickly."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's included in the startup development package?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our startup package includes MVP development, technical architecture, UI/UX design, testing, deployment, and 3 months of support."
                    }
                  }
                ]
              }
            ]
          }
        };
      default:
        return {
          title: "Bernof Co - Managing the Future | Digital Solutions Europe/USA",
          description: "Digital solutions that drive growth. Expert development, creative design, and strategic marketing services across Europe and USA.",
          keywords: "digital agency europe, digital agency usa, web development, software development, digital transformation",
          canonical: baseUrl
        };
    }
  }, [page]);
};
const getCountrySEO = (countryCode, serviceType, baseUrl) => {
  const country = getCountryConfig(countryCode);
  if (!country) {
    return {
      title: "Bernof Co - Digital Solutions",
      description: "Digital solutions that drive growth.",
      keywords: "digital agency, web development, software development"
    };
  }
  const serviceTypeMap = {
    "web-development": "web",
    "software-development": "software",
    "startup-development": "startup"
  };
  const service = serviceTypeMap[serviceType] || "web";
  const keywords = country.seoKeywords[service].join(", ");
  const serviceTitles = {
    web: "Web Development Services",
    software: "Software Development Services",
    startup: "Startup Development Services"
  };
  const serviceDescriptions = {
    web: `Professional web development services in ${country.name}. Custom websites, e-commerce solutions, and digital marketing. Save 60-70% vs local agencies.`,
    software: `Custom software development services in ${country.name}. Mobile apps, enterprise solutions, and AI integration. Expert developers at competitive rates.`,
    startup: `Startup development services in ${country.name}. MVP development, technical consulting, and growth strategies. Launch your startup with confidence.`
  };
  const canonical = `${baseUrl}/${countryCode}/${serviceType}`;
  return {
    title: `${serviceTitles[service]} ${country.name} | Cost-Effective Solutions | Bernof Co`,
    description: serviceDescriptions[service],
    keywords,
    canonical,
    breadcrumbs: [
      { name: "Home", url: baseUrl },
      { name: country.name, url: `${baseUrl}/${countryCode}` },
      { name: serviceTitles[service], url: canonical }
    ],
    schemaData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": `${canonical}#service`,
          "name": `${serviceTitles[service]} - ${country.name}`,
          "description": serviceDescriptions[service],
          "provider": {
            "@type": "Organization",
            "@id": `${baseUrl}/#organization`
          },
          "areaServed": {
            "@type": "Country",
            "name": country.name
          },
          "offers": {
            "@type": "Offer",
            "price": country.pricing[service]?.min.toString(),
            "priceCurrency": country.currency,
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": baseUrl
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": country.name,
              "item": `${baseUrl}/${countryCode}`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": serviceTitles[service],
              "item": canonical
            }
          ]
        }
      ]
    }
  };
};

export { SEO as S, getCountryConfig as g, useSEO as u };
