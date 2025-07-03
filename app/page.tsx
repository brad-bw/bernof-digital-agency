import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import DiscoveryCallSection from "@/components/DiscoveryCallSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premier Digital Agency | Web Development & Startup Services Europe/USA | Bernof Co',
  description: 'Transform your business with Europe\'s leading digital agency. Expert web development, mobile apps, and startup services across USA, UK, and Europe. From $3,999. 100+ successful projects. Book free consultation today.',
  keywords: 'digital agency europe, web development usa, mobile app development, startup development services, MVP development, software development company, UI/UX design agency, tech consulting, react development, node.js development, digital transformation',
  openGraph: {
    title: 'Premier Digital Agency | Web Development & Startup Services Europe/USA | Bernof Co',
    description: 'Transform your business with Europe\'s leading digital agency. Expert web development, mobile apps, and startup services across USA, UK, and Europe. From $3,999. 100+ successful projects. Book free consultation today.',
    url: 'https://bernofco.com',
    siteName: 'Bernof Co',
    images: [
      {
        url: 'https://bernofco.com/bernofco-social-share.png',
        width: 1200,
        height: 630,
        alt: 'Bernof Co - Digital Solutions & Growth Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premier Digital Agency | Web Development & Startup Services Europe/USA | Bernof Co',
    description: 'Transform your business with Europe\'s leading digital agency. Expert web development, mobile apps, and startup services across USA, UK, and Europe. From $3,999. 100+ successful projects. Book free consultation today.',
    images: ['https://bernofco.com/bernofco-social-share.png'],
    site: '@bernof_co',
  },
  alternates: {
    canonical: 'https://bernofco.com',
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://bernofco.com/#organization",
      "name": "Bernof Co",
      "alternateName": "Bernof Company",
      "description": "Premier digital solutions company specializing in web development, mobile apps, and startup development services across Europe and USA",
      "url": "https://bernofco.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bernofco.com/favicon.ico",
        "width": 512,
        "height": 512
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://bernofco.com/bernofco-social-share.png",
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
      "@id": "https://bernofco.com/#website",
      "url": "https://bernofco.com",
      "name": "Bernof Co - Digital Solutions & Startup Development",
      "description": "Premier digital agency offering web development, mobile app development, and comprehensive startup services across Europe and USA",
      "publisher": {
        "@id": "https://bernofco.com/#organization"
      }
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen font-inter">
        <Header />
        <main>
          <section>
            <h1 className="sr-only">Bernof Co - Premier Digital Solutions & Growth Services</h1>
            <HeroSection />
          </section>
          <ServicesSection />
          <AboutSection />
          <DiscoveryCallSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}