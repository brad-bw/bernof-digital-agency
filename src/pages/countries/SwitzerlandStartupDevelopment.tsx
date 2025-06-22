
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

const SwitzerlandStartupDevelopment = () => {
  const seoData = useSEO('ch/startup-development');
  const country = getCountryConfig('ch')!;

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
          title="Startup Development Services in Switzerland"
          subtitle="Launch your Swiss startup with confidence. MVP development, technical consulting, and growth strategies tailored for the competitive Swiss market."
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

export default SwitzerlandStartupDevelopment;
