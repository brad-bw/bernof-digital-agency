
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

const USHub = () => {
  const seoData = useSEO('global-services/us');
  const country = getCountryConfig('us')!;

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Global Services", url: "/global-services" },
    { name: "United States", url: "/global-services/us" }
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
          service="startup"
          title="Digital Services for US Businesses"
          subtitle="Compete in America's demanding digital marketplace with European expertise and Silicon Valley quality at 60% cost savings."
          ctaPrimary="Explore US Services"
          ctaSecondary="Book Strategy Call"
        />
        <CountryPainPoints country={country} serviceType="startup" />
        <CountryServices country={country} serviceType="startup" />
        <CountryCTA country={country} serviceType="startup" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default USHub;
