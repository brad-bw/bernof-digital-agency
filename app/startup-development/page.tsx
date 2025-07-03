import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StartupHero from "@/components/startup/StartupHero";
import StartupValueProps from "@/components/startup/StartupValueProps";
import StartupProcess from "@/components/startup/StartupProcess";
import StartupPricing from "@/components/startup/StartupPricing";
import StartupTestimonials from "@/components/startup/StartupTestimonials";
import StartupFAQ from "@/components/startup/StartupFAQ";
import StartupCTA from "@/components/startup/StartupCTA";

export const metadata: Metadata = {
  title: 'Startup Development Services Europe/USA | MVP to Scale | Expert Tech Partner | Bernof Co',
  description: 'Launch your startup with confidence. Expert MVP development, technical consulting, and scaling solutions across Europe and USA. 100+ successful startups launched. From $3,999. Book free consultation.',
  keywords: 'startup development europe, startup development usa, MVP development services, startup tech partner, idea to production, startup consulting, outsource app development, startup CTO services, product development, startup launch, technical co-founder',
  openGraph: {
    title: 'Startup Development Services Europe/USA | MVP to Scale | Expert Tech Partner | Bernof Co',
    description: 'Launch your startup with confidence. Expert MVP development, technical consulting, and scaling solutions across Europe and USA. 100+ successful startups launched. From $3,999. Book free consultation.',
    url: 'https://bernofco.com/startup-development',
    siteName: 'Bernof Co',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bernofco.com/startup-development',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://bernofco.com/startup-development#service",
      "name": "Startup Development Services",
      "description": "Comprehensive startup development services from MVP to scaling, including technical consulting, product development, and growth strategy for European and American startups",
      "provider": {
        "@type": "Organization",
        "@id": "https://bernofco.com/#organization"
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "Europe"
        },
        {
          "@type": "Place", 
          "name": "United States"
        }
      ],
      "serviceType": "Software Development",
      "category": ["Startup Services", "MVP Development", "Technical Consulting"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Startup Development Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "MVP Validation",
            "price": "3999",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        ]
      }
    }
  ]
};

export default function StartupDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen font-inter">
        <Header />
        <main>
          <StartupHero />
          <StartupValueProps />
          <StartupProcess />
          <StartupPricing />
          <StartupTestimonials />
          <StartupFAQ />
          <StartupCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}