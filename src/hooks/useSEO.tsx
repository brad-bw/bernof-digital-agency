
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
          title: 'Bernof Co - Premier Digital Solutions & Startup Development Services',
          description: 'Transform your business with Bernof Co\'s expert web development, mobile app development, and comprehensive startup services. From MVP to scale - we deliver results that drive growth.',
          keywords: 'digital agency london, web development services, mobile app development, startup development, MVP development, software development company, digital transformation, UI/UX design, tech consulting',
          canonical: baseUrl,
          breadcrumbs: [
            { name: 'Home', url: baseUrl }
          ],
          schemaData: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bernof Co",
            "description": "Premier digital solutions company specializing in web development, mobile apps, and startup development services",
            "url": baseUrl,
            "logo": `${baseUrl}/favicon.ico`,
            "image": `${baseUrl}/bernofco-social-share.png`,
            "sameAs": [
              "https://twitter.com/bernof_co",
              "https://www.linkedin.com/company/bernof-co"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "GB",
              "addressLocality": "London"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+442030000000",
              "contactType": "customer service",
              "email": "info@bernofco.com",
              "availableLanguage": "English"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5"
            },
            "service": [
              {
                "@type": "Service",
                "name": "Web Development",
                "description": "Custom web application development using modern technologies like React, Node.js, and TypeScript",
                "provider": {
                  "@type": "Organization",
                  "name": "Bernof Co"
                }
              },
              {
                "@type": "Service", 
                "name": "Mobile App Development",
                "description": "Native and cross-platform mobile application development for iOS and Android",
                "provider": {
                  "@type": "Organization",
                  "name": "Bernof Co"
                }
              },
              {
                "@type": "Service",
                "name": "Startup Development Services",
                "description": "End-to-end startup development from idea validation to MVP launch and scaling",
                "provider": {
                  "@type": "Organization",
                  "name": "Bernof Co"
                }
              }
            ]
          }
        };
      
      case 'startup-development':
        return {
          title: 'Startup Development Services - MVP to Scale | Expert Tech Partner | Bernof Co',
          description: 'Launch your startup with confidence. Expert MVP development, technical consulting, and scaling solutions. 100+ successful startups launched. From £2,999. Book free consultation.',
          keywords: 'startup development services, MVP development, startup tech partner, idea to production, startup consulting, outsource app development, startup CTO services, product development, startup launch',
          canonical: `${baseUrl}/startup-development`,
          breadcrumbs: [
            { name: 'Home', url: baseUrl },
            { name: 'Startup Development', url: `${baseUrl}/startup-development` }
          ],
          schemaData: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Startup Development Services",
            "description": "Comprehensive startup development services from MVP to scaling, including technical consulting, product development, and growth strategy",
            "provider": {
              "@type": "Organization",
              "name": "Bernof Co",
              "url": baseUrl,
              "logo": `${baseUrl}/favicon.ico`
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "serviceType": "Software Development",
            "category": "Startup Services",
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
                  "itemOffered": {
                    "@type": "Service",
                    "name": "MVP Validation"
                  },
                  "price": "2999",
                  "priceCurrency": "GBP",
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Full MVP Launch"
                  },
                  "price": "7999",
                  "priceCurrency": "GBP",
                  "availability": "https://schema.org/InStock"
                }
              ]
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Sarah Johnson"
                },
                "reviewBody": "Bernof Co transformed our idea into a working MVP in just 4 weeks. Exceptional quality and support."
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "89",
              "bestRating": "5"
            }
          }
        };
      
      default:
        return {
          title: 'Bernof Co - Managing the Future',
          description: 'Digital solutions that drive growth. Expert development, creative design, and strategic marketing services.',
          keywords: 'digital agency, web development, software development, digital transformation',
          canonical: baseUrl
        };
    }
  }, [page]);
};
