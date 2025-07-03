import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CountryHero from "@/components/country/CountryHero";
import CountryServices from "@/components/country/CountryServices";
import CountryPainPoints from "@/components/country/CountryPainPoints";
import CountryCTA from "@/components/country/CountryCTA";
import { getCountryConfig, getAllCountries } from '@/config/countries';

interface PageProps {
  params: {
    country: string;
    service: string;
  };
}

// Static generation for all country/service combinations
export async function generateStaticParams() {
  const countries = getAllCountries();
  const services = ['web-development', 'software-development', 'startup-development'];
  
  const paths = [];
  for (const country of countries) {
    for (const service of services) {
      paths.push({
        country: country.code,
        service: service,
      });
    }
  }
  
  return paths;
}

// Dynamic metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country: countryCode, service: serviceType } = params;
  const country = getCountryConfig(countryCode);
  
  if (!country) {
    return {
      title: 'Page Not Found | Bernof Co',
      description: 'The page you are looking for does not exist.',
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

  const canonical = `https://bernofco.com/${countryCode}/${serviceType}`;

  return {
    title: `${serviceTitles[service]} ${country.name} | Cost-Effective Solutions | Bernof Co`,
    description: serviceDescriptions[service],
    keywords: keywords,
    openGraph: {
      title: `${serviceTitles[service]} ${country.name} | Cost-Effective Solutions | Bernof Co`,
      description: serviceDescriptions[service],
      url: canonical,
      siteName: 'Bernof Co',
      type: 'website',
    },
    alternates: {
      canonical: canonical,
    },
  };
}

export default function CountryServicePage({ params }: PageProps) {
  const { country: countryCode, service: serviceType } = params;
  const country = getCountryConfig(countryCode);

  if (!country) {
    notFound();
  }

  const serviceTypeMap: Record<string, 'web' | 'software' | 'startup'> = {
    'web-development': 'web',
    'software-development': 'software',
    'startup-development': 'startup'
  };

  const service = serviceTypeMap[serviceType] || 'web';

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

  const canonical = `https://bernofco.com/${countryCode}/${serviceType}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        "name": `${serviceTitles[service]} - ${country.name}`,
        "description": serviceDescriptions[service],
        "provider": {
          "@type": "Organization",
          "@id": "https://bernofco.com/#organization"
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
            "item": "https://bernofco.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": country.name,
            "item": `https://bernofco.com/${countryCode}`
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen font-inter">
        <Header />
        <main>
          <CountryHero 
            countryCode={countryCode}
            serviceType={service}
          />
          <CountryServices 
            countryCode={countryCode}
            serviceType={service}
          />
          <CountryPainPoints 
            countryCode={countryCode}
            serviceType={service}
          />
          <CountryCTA 
            countryCode={countryCode}
            serviceType={service}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}