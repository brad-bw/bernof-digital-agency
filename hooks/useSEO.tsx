
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
          canonical: baseUrl
        };
      
      case 'blog':
        return {
          title: 'Blog - Digital Insights & Industry Trends | Bernof Co',
          description: 'Explore the latest insights on web development, startup growth, and digital innovation. Expert analysis and practical tips from industry professionals.',
          keywords: 'web development blog, startup insights, digital marketing trends, tech innovation, business strategy, software development tips, digital transformation',
          canonical: `${baseUrl}/blog`
        };
      
      case 'startup-development':
        return {
          title: 'Startup Development Services Europe/USA | MVP to Scale | Expert Tech Partner | Bernof Co',
          description: 'Launch your startup with confidence. Expert MVP development, technical consulting, and scaling solutions across Europe and USA. 100+ successful startups launched. From $3,999. Book free consultation.',
          keywords: 'startup development europe, startup development usa, MVP development services, startup tech partner, idea to production, startup consulting, outsource app development, startup CTO services, product development, startup launch, technical co-founder',
          canonical: `${baseUrl}/startup-development`
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
    ]
  };
};
