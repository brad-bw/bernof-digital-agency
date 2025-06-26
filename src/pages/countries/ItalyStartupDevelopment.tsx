
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

const ItalyStartupDevelopment = () => {
  const seoData = useSEO('it/startup-development');
  const country = getCountryConfig('it')!;

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Italy", url: "/global-services/it" },
    { name: "Startup Development Services", url: "/it/startup-development" }
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
          title="Startup Development Services in Italy"
          subtitle="Build the next generation of Italian startups. MVP development, technical consulting, and growth strategies tailored for Italy's emerging tech ecosystem."
          ctaPrimary="Validate Your Startup Idea"
          ctaSecondary="Book Startup Strategy Call"
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

export default ItalyStartupDevelopment;
