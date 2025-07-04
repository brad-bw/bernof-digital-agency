
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import CountryHero from "@/components/country/CountryHero";
import CountryPainPoints from "@/components/country/CountryPainPoints";
import { CountryServices } from "@/components/country/CountryServices";
import CountryCTA from "@/components/country/CountryCTA";
import ContactSection from "@/components/ContactSection";
import { useSEO } from "@/hooks/useSEO";
import { getCountryConfig } from "@/config/countries";

const UKHub = () => {
  const seoData = useSEO('uk');
  const country = getCountryConfig('uk')!;

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Global Services", url: "/global-services" },
    { name: "United Kingdom", url: "/global-services/uk" }
  ];

  return (
    <div className="min-h-screen font-inter">
      <SEO {...seoData} />
      <Header />
      <main>
        <div className="container mx-auto px-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <CountryHero 
          country={country}
          service="web"
          title="Digital Solutions for UK Businesses"
          subtitle="Navigate post-Brexit challenges with cost-effective, high-quality digital solutions that help British businesses thrive in the competitive UK market."
          ctaPrimary="Get UK Quote"
          ctaSecondary="Schedule Consultation"
        />
        <CountryPainPoints country={country} serviceType="web" />
        <CountryServices country={country} serviceType="web" />
        <CountryCTA country={country} serviceType="web" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default UKHub;
