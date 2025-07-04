
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

const SwitzerlandHub = () => {
  const seoData = useSEO('ch');
  const country = getCountryConfig('ch')!;

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Global Services", url: "/global-services" },
    { name: "Switzerland", url: "/global-services/ch" }
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
          title="Digital Solutions for Swiss Businesses"
          subtitle="Navigate Switzerland's competitive market with cost-effective, high-quality digital solutions that help Swiss companies innovate and grow."
          ctaPrimary="Get Swiss Quote"
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

export default SwitzerlandHub;
