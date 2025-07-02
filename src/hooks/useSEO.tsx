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
    
    // Handle country hub pages
    if (page === 'ch' || page === 'uk' || page === 'us' || page === 'it') {
      return getCountryHubSEO(page, baseUrl);
    }
    
    // Handle country-specific service pages
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
      
      case 'startup-development':
        return {
          title: 'Startup Development Services Europe/USA | MVP to Scale | Expert Tech Partner | Bernof Co',
          description: 'Launch your startup with confidence. Expert MVP development, technical consulting, and scaling solutions across Europe and USA. 100+ successful startups launched. From $3,999. Book free consultation.',
          keywords: 'startup development europe, startup development usa, MVP development services, startup tech partner, idea to production, startup consulting, outsource app development, startup CTO services, product development, startup launch, technical co-founder',
          canonical: `${baseUrl}/startup-development`,
          breadcrumbs: [
            { name: 'Home', url: baseUrl },
            { name: 'Startup Development', url: `${baseUrl}/startup-development` }
          ]
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

// Function to handle country hub SEO
const getCountryHubSEO = (countryCode: string, baseUrl: string): SEOConfig => {
  const country = getCountryConfig(countryCode);
  
  if (!country) {
    return {
      title: 'Bernof Co - Digital Solutions',
      description: 'Digital solutions that drive growth.',
      keywords: 'digital agency, web development, software development'
    };
  }

  const canonical = `${baseUrl}/global-services/${countryCode}`;

  return {
    title: `Digital Solutions ${country.name} | Cost-Effective Development Services | Bernof Co`,
    description: `Transform your ${country.name} business with cost-effective digital solutions. Web development, software development, and startup services tailored for the ${country.name} market.`,
    keywords: country.seoKeywords.web.join(', '),
    canonical: canonical,
    breadcrumbs: [
      { name: 'Home', url: baseUrl },
      { name: 'Global Services', url: `${baseUrl}/global-services` },
      { name: country.name, url: canonical }
    ],
    schemaData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": `${canonical}#service`,
          "name": `Digital Solutions - ${country.name}`,
          "description": `Comprehensive digital solutions for businesses in ${country.name}`,
          "provider": {
            "@type": "Organization",
            "@id": `${baseUrl}/#organization`
          },
          "areaServed": {
            "@type": "Country",
            "name": country.name
          }
        }
      ]
    }
  };
};

// Function to handle country-specific service SEO
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
