
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import CountryHero from "@/components/country/CountryHero";
import CountryPainPoints from "@/components/country/CountryPainPoints";
import CountryServices from "@/components/country/CountryServices";
import CountryCTA from "@/components/country/CountryCTA";
import ContactSection from "@/components/ContactSection";
import { useSEO } from "@/hooks/useSEO";
import { getCountryConfig } from "@/config/countries";

const USAStartupDevelopment = () => {
  const seoData = useSEO('us/startup-development');
  const country = getCountryConfig('us')!;

  return (
    <div className="min-h-screen font-inter">
      <SEO {...seoData} />
      <Header />
      <main>
        <div className="container mx-auto px-6">
          <Breadcrumb items={seoData.breadcrumbs || []} />
        </div>
        <CountryHero 
          country={country}
          service="startup"
          title="Startup Development Services in the USA"
          subtitle="Compete with Silicon Valley standards. MVP development, technical expertise, and growth strategies that help American entrepreneurs capture market share and attract investment."
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

export default USAStartupDevelopment;
