import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCountryConfig, getAllCountries } from '@/config/countries';

interface PageProps {
  params: {
    country: string;
  };
}

// Static generation for all country hubs
export async function generateStaticParams() {
  const countries = getAllCountries();
  
  return countries.map((country) => ({
    country: country.code,
  }));
}

// Dynamic metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country: countryCode } = params;
  const country = getCountryConfig(countryCode);
  
  if (!country) {
    return {
      title: 'Page Not Found | Bernof Co',
      description: 'The page you are looking for does not exist.',
    };
  }

  const canonical = `https://bernofco.com/global-services/${countryCode}`;

  return {
    title: `Digital Services ${country.name} | Web Development & Software Solutions | Bernof Co`,
    description: `Professional digital services in ${country.name}. Web development, software development, and startup services. Save 60-70% vs local agencies with our expert team.`,
    keywords: `digital services ${country.name.toLowerCase()}, web development ${country.name.toLowerCase()}, software development ${country.name.toLowerCase()}, startup development ${country.name.toLowerCase()}`,
    openGraph: {
      title: `Digital Services ${country.name} | Web Development & Software Solutions | Bernof Co`,
      description: `Professional digital services in ${country.name}. Web development, software development, and startup services. Save 60-70% vs local agencies with our expert team.`,
      url: canonical,
      siteName: 'Bernof Co',
      type: 'website',
    },
    alternates: {
      canonical: canonical,
    },
  };
}

export default function CountryHubPage({ params }: PageProps) {
  const { country: countryCode } = params;
  const country = getCountryConfig(countryCode);

  if (!country) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://bernofco.com/global-services/${countryCode}#webpage`,
    "name": `Digital Services ${country.name}`,
    "description": `Professional digital services in ${country.name}. Web development, software development, and startup services.`,
    "url": `https://bernofco.com/global-services/${countryCode}`,
    "isPartOf": {
      "@id": "https://bernofco.com/#website"
    }
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
          {/* Render appropriate country hub component based on country code */}
          {countryCode === 'ch' && (
            <div>
              {/* Swiss hub content - you'll need to create these components */}
              <h1>Digital Services Switzerland</h1>
            </div>
          )}
          {countryCode === 'uk' && (
            <div>
              {/* UK hub content */}
              <h1>Digital Services United Kingdom</h1>
            </div>
          )}
          {countryCode === 'us' && (
            <div>
              {/* US hub content */}
              <h1>Digital Services United States</h1>
            </div>
          )}
          {countryCode === 'it' && (
            <div>
              {/* Italy hub content */}
              <h1>Digital Services Italy</h1>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}