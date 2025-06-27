
import { useMemo } from 'react';
import { getCountryConfig } from '@/config/countries';

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
    
    // Handle country-specific pages
    if (page.includes('/')) {
      const [countryCode, serviceType] = page.split('/');
      return getCountrySEO(countryCode, serviceType, baseUrl);
    }
    
    switch (page) {
      case 'home':
        return {
          title: 'Premier Digital Agency | Web Development & Startup Services Europe/USA | Bernof Co',
          description: 'Transform your business with Europe\'s leading digital agency. Expert web development, mobile apps, and startup services across USA, UK, and Europe. From $3,999. 100+ successful projects. Book free consultation today.',
          keywords: 'digital agency europe, web development usa, mobile app development, startup development services, MVP development, software development company, UI/UX design agency, tech consulting, react development, node.js development, digital transformation',
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
                    "telephone": "+442080580773",
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
      
      case 'startup-development':
        return {
          title: 'Startup Development Services Europe/USA | MVP to Scale | Expert Tech Partner | Bernof Co',
          description: 'Launch your startup with confidence. Expert MVP development, technical consulting, and scaling solutions across Europe and USA. 100+ successful startups launched. From $3,999. Book free consultation.',
          keywords: 'startup development europe, startup development usa, MVP development services, startup tech partner, idea to production, startup consulting, outsource app development, startup CTO services, product development, startup launch, technical co-founder',
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
          title: 'Bernof Co - Managing the Future | Digital Solutions Europe/USA',
          description: 'Digital solutions that drive growth. Expert development, creative design, and strategic marketing services across Europe and USA.',
          keywords: 'digital agency europe, digital agency usa, web development, software development, digital transformation',
          canonical: baseUrl
        };
    }
  }, [page]);
};

// Function to handle country-specific SEO
const getCountrySEO = (countryCode: string, serviceType: string, baseUrl: string): SEOConfig => {
  const country = getCountryConfig(countryCode);
  
  if (!country) {
    return {
      title: 'Bernof Co - Digital Solutions',
      description: 'Digital solutions that drive growth.',
      keywords: 'digital agency, web development, software development'
    };
  }

  const serviceTypeMap: Record<string, 'web' | 'software' | 'startup'> = {
    'web-development': 'web',
    'software-development': 'software',
    'startup-development': 'startup'
  };

  const service = serviceTypeMap[serviceType] || 'web';
  const keywords = country.seoKeywords[service].join(', ');

  const serviceTitles = {
    web: 'Web Development Services',
    software: 'Software Development Services',
    startup: 'Startup Development Services'
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
    keywords: keywords,
    canonical: canonical,
    breadcrumbs: [
      { name: 'Home', url: baseUrl },
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
