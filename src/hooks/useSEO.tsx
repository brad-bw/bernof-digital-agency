
import { useMemo } from 'react';

interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  schemaData?: object;
}

export const useSEO = (page: string = 'home'): SEOConfig => {
  return useMemo(() => {
    switch (page) {
      case 'home':
        return {
          title: 'Bernof Co - Managing the Future | Digital Solutions & Growth Services',
          description: 'Transform your digital presence with Bernof Co\'s comprehensive development, design, and marketing services. Expert web development, mobile apps, and startup solutions.',
          keywords: 'digital agency, web development, mobile app development, startup development, digital transformation, UI/UX design, software development company',
          schemaData: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bernof Co",
            "description": "Digital solutions and growth services company specializing in web development, mobile apps, and startup development",
            "url": "https://bernofco.com",
            "logo": "https://bernofco.com/favicon.ico",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+442030000000",
              "contactType": "customer service",
              "email": "info@bernofco.com"
            },
            "sameAs": [
              "https://twitter.com/bernof_co"
            ],
            "service": [
              {
                "@type": "Service",
                "name": "Web Development",
                "description": "Custom web application development using modern technologies"
              },
              {
                "@type": "Service", 
                "name": "Mobile App Development",
                "description": "Native and cross-platform mobile application development"
              },
              {
                "@type": "Service",
                "name": "Startup Development",
                "description": "End-to-end startup development services from MVP to scaling"
              }
            ]
          }
        };
      
      case 'startup-development':
        return {
          title: 'Startup Development Services | MVP to Scale | Bernof Co',
          description: 'Transform your startup idea into reality with our comprehensive development services. From MVP development to scaling - we\'ve helped 100+ founders build successful startups.',
          keywords: 'startup development, MVP development, startup tech partner, idea to production, startup consulting, outsource app development, startup CTO services, product development',
          schemaData: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Startup Development Services",
            "description": "Comprehensive startup development services from MVP to scaling, including technical consulting, product development, and growth strategy",
            "provider": {
              "@type": "Organization",
              "name": "Bernof Co"
            },
            "areaServed": "Worldwide",
            "serviceType": "Software Development",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceRange": "£2,999 - £24,999"
            }
          }
        };
      
      default:
        return {
          title: 'Bernof Co - Managing the Future',
          description: 'Digital solutions that drive growth. Expert development, creative design, and strategic marketing services.',
          keywords: 'digital agency, web development, software development, digital transformation'
        };
    }
  }, [page]);
};
