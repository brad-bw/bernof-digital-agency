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
      
      case 'blog':
        return {
          title: 'Blog - Digital Insights & Industry Trends | Bernof Co',
          description: 'Explore the latest insights on web development, startup growth, and digital innovation. Expert analysis and practical tips from industry professionals.',
          keywords: 'web development blog, startup insights, digital marketing trends, tech innovation, business strategy, software development tips, digital transformation',
          canonical: `${baseUrl}/blog`,
          breadcrumbs: [
            { name: 'Home', url: baseUrl },
            { name: 'Blog', url: `${baseUrl}/blog` }
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
      
      case 'blog-post':
        return {
          title: 'Blog Post - Digital Insights & Industry Trends | Bernof Co',
          description: 'Read expert insights on web development, startup growth, and digital innovation. Practical tips and industry analysis from Bernof Co professionals.',
          keywords: 'web development blog, startup insights, digital marketing trends, tech innovation, business strategy, software development tips, digital transformation',
          canonical: `${baseUrl}/blog`,
          breadcrumbs: [
            { name: 'Home', url: baseUrl },
            { name: 'Blog', url: `${baseUrl}/blog` },
            { name: 'Article', url: `${baseUrl}/blog` }
          ],
          schemaData: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Blog Post",
            "description": "Expert insights on web development, startup growth, and digital innovation",
            "author": {
              "@type": "Organization",
              "name": "Bernof Co"
            },
            "publisher": {
              "@type": "Organization",
              "@id": `${baseUrl}/#organization`
            },
            "datePublished": new Date().toISOString(),
            "dateModified": new Date().toISOString(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${baseUrl}/blog`
            }
          }
        };
      
      case 'global-services':
        return {
          title: 'Global Digital Services | European Excellence, Worldwide Reach | Bernof Co',
          description: 'Premium digital development services across Europe and beyond. 60% cost savings on web development, software solutions, and startup services. Choose your market and start saving today.',
          keywords: 'global digital services, international web development, European software development, multi-country digital agency, cost-effective development services, software outsourcing',
          canonical: `${baseUrl}/global-services`,
          breadcrumbs: [
            { name: 'Home', url: baseUrl },
            { name: 'Global Services', url: `${baseUrl}/global-services` }
          ],
          schemaData: {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": `${baseUrl}/global-services#webpage`,
                "url": `${baseUrl}/global-services`,
                "name": "Global Digital Services | Bernof Co",
                "description": "Premium digital development services across Europe and beyond with significant cost savings.",
                "isPartOf": { "@id": `${baseUrl}/#website` },
                "breadcrumb": { "@id": `${baseUrl}/global-services#breadcrumb` },
                "publisher": { "@id": `${baseUrl}/#organization` }
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${baseUrl}/global-services#breadcrumb`,
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
                  { "@type": "ListItem", "position": 2, "name": "Global Services", "item": `${baseUrl}/global-services` }
                ]
              },
              {
                "@type": "Service",
                "@id": `${baseUrl}/global-services#service`,
                "name": "Global Digital Development Services",
                "description": "Comprehensive digital development services including web, software, and startup solutions, offered globally with European quality and significant cost savings.",
                "provider": { "@id": `${baseUrl}/#organization` },
                "areaServed": [
                  { "@type": "Country", "name": "United States" },
                  { "@type": "Country", "name": "United Kingdom" },
                  { "@type": "Country", "name": "Switzerland" },
                  { "@type": "Country", "name": "Italy" },
                  { "@type": "Place", "name": "Europe" },
                  { "@type": "Place", "name": "North America" }
                ],
                "serviceType": ["Web Development", "Software Development", "Startup Development", "Digital Transformation"],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Global Service Offerings",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": { "@type": "Service", "name": "Web Development Solutions" }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": { "@type": "Service", "name": "Custom Software Development" }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": { "@type": "Service", "name": "Startup Development & MVP" }
                    }
                  ]
                }
              }
            ]
          }
        };

      case 'vibe-coding':
        return {
          title: 'AI Coding Help & Vibe Coding Support | Fix Cursor, Lovable, Bubble Issues | Bernof Co',
          description: 'When your AI-built app hits a wall, we break through. Expert help for Cursor crashes, Lovable scaling issues, Bubble debugging, and production-ready optimization for AI-assisted projects.',
          keywords: 'AI coding help, vibe coding support, Cursor debugging, Bubble.io troubleshooting, Lovable app deployment, no-code development issues, AI app production scaling, AI code assistance, low-code support',
          canonical: `${baseUrl}/vibe-coding`,
          breadcrumbs: [
            { name: 'Home', url: baseUrl },
            { name: 'Vibe Coding Support', url: `${baseUrl}/vibe-coding` }
          ],
          schemaData: {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": `${baseUrl}/vibe-coding#webpage`,
                "url": `${baseUrl}/vibe-coding`,
                "name": "AI & Vibe Coding Support | Bernof Co",
                "description": "Expert assistance for AI-generated code and low-code/no-code platform challenges (Cursor, Lovable, Bubble.io).",
                "isPartOf": { "@id": `${baseUrl}/#website` },
                "breadcrumb": { "@id": `${baseUrl}/vibe-coding#breadcrumb` },
                "publisher": { "@id": `${baseUrl}/#organization` }
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${baseUrl}/vibe-coding#breadcrumb`,
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
                  { "@type": "ListItem", "position": 2, "name": "Vibe Coding Support", "item": `${baseUrl}/vibe-coding` }
                ]
              },
              {
                "@type": "Service",
                "@id": `${baseUrl}/vibe-coding#service`,
                "name": "AI & Vibe Coding Support",
                "description": "Specialized support services for applications built with AI coding assistants (e.g., Cursor) and low-code/no-code platforms (e.g., Bubble.io, Lovable). We help debug, scale, and productionize these projects.",
                "provider": { "@id": `${baseUrl}/#organization` },
                "serviceType": ["Technical Support", "Software Development Consulting", "Debugging Services", "Application Scaling"],
                "keywords": "Cursor AI, Lovable.ai, Bubble.io, AI code generation, low-code development, no-code development, debugging, scaling, production support",
                "areaServed": [ // Assuming global remote service
                    { "@type": "Place", "name": "Global" }
                ]
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
