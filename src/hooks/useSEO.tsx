
import { useMemo } from 'react';

interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  schemaData?: object;
  breadcrumbs?: Array<{name: string, url: string}>;
}

export const useSEO = (page: string = 'home'): SEOConfig => {
  return useMemo(() => {
    const baseUrl = 'https://bernofco.com';
    
    switch (page) {
      case 'home':
        return {
          title: 'Premier Digital Agency London | Web Development & Startup Services | Bernof Co',
          description: 'Transform your business with London\'s leading digital agency. Expert web development, mobile apps, and startup services. From £2,999. 100+ successful projects. Book free consultation today.',
          keywords: 'digital agency london, web development london, mobile app development, startup development services, MVP development, software development company london, UI/UX design agency, tech consulting london, react development, node.js development',
          canonical: baseUrl,
          breadcrumbs: [
            { name: 'Home', url: baseUrl }
          ],
          schemaData: {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${baseUrl}/#organization`,
                "name": "Bernof Co",
                "alternateName": "Bernof Company",
                "description": "Premier digital solutions company specializing in web development, mobile apps, and startup development services in London",
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
                  "addressCountry": "GB",
                  "addressLocality": "London",
                  "addressRegion": "England"
                },
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+442030000000",
                    "contactType": "customer service",
                    "email": "info@bernofco.com",
                    "availableLanguage": ["English"],
                    "areaServed": "GB"
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
                "description": "Premier digital agency offering web development, mobile app development, and comprehensive startup services",
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
                "areaServed": {
                  "@type": "Country",
                  "name": "United Kingdom"
                },
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
                      "priceCurrency": "GBP",
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
                      "priceCurrency": "GBP",
                      "availability": "https://schema.org/InStock"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Startup Development",
                        "description": "End-to-end startup development from MVP to scaling"
                      },
                      "price": "2999",
                      "priceCurrency": "GBP",
                      "priceCurrency": "GBP",
                      "availability": "https://schema.org/InStock"
                    }
                  ]
                }
              }
            ]
          }
        };
      
      case 'startup-development':
        return {
          title: 'Startup Development Services London | MVP to Scale | Expert Tech Partner | Bernof Co',
          description: 'Launch your startup with confidence. Expert MVP development, technical consulting, and scaling solutions in London. 100+ successful startups launched. From £2,999. Book free consultation.',
          keywords: 'startup development london, MVP development services, startup tech partner, idea to production, startup consulting london, outsource app development, startup CTO services, product development, startup launch, technical co-founder',
          canonical: `${baseUrl}/startup-development`,
          breadcrumbs: [
            { name: 'Home', url: baseUrl },
            { name: 'Startup Development', url: `${baseUrl}/startup-development` }
          ],
          schemaData: {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": `${baseUrl}/startup-development#service`,
                "name": "Startup Development Services",
                "description": "Comprehensive startup development services from MVP to scaling, including technical consulting, product development, and growth strategy for London-based and international startups",
                "provider": {
                  "@type": "Organization",
                  "@id": `${baseUrl}/#organization`
                },
                "areaServed": [
                  {
                    "@type": "Place",
                    "name": "London, UK"
                  },
                  {
                    "@type": "Place", 
                    "name": "United Kingdom"
                  },
                  {
                    "@type": "Place",
                    "name": "Worldwide"
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
                      "price": "2999",
                      "priceCurrency": "GBP",
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
                      "price": "7999",
                      "priceCurrency": "GBP",
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
                      "price": "15999",
                      "priceCurrency": "GBP",
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
          title: 'Bernof Co - Managing the Future | Digital Solutions London',
          description: 'Digital solutions that drive growth. Expert development, creative design, and strategic marketing services in London.',
          keywords: 'digital agency london, web development, software development, digital transformation',
          canonical: baseUrl
        };
    }
  }, [page]);
};
