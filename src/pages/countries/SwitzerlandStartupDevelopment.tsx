
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import StartupValueProps from "@/components/startup/StartupValueProps";
import StartupProcess from "@/components/startup/StartupProcess";
import StartupPricing from "@/components/startup/StartupPricing";
import StartupFAQ from "@/components/startup/StartupFAQ";
import StartupCTA from "@/components/startup/StartupCTA";
import ContactSection from "@/components/ContactSection";
import CountryHero from "@/components/country/CountryHero";
import CountryPainPoints from "@/components/country/CountryPainPoints";
import { useSEO } from "@/hooks/useSEO";
import { getCountryConfig } from "@/config/countries";

const SwitzerlandStartupDevelopment = () => {
  const seoData = useSEO('ch/startup-development');
  const country = getCountryConfig('ch')!;

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Switzerland", url: "/global-services/ch" },
    { name: "Startup Development Services", url: "/ch/startup-development" }
  ];

  return (
    <div className="min-h-screen font-inter">
      <SEO {...seoData} />
      <Header />
      <main>
        <div className="container mx-auto px-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <section>
          <h1 className="sr-only">Expert Switzerland Startup Development Services - From MVP to Scale</h1>
          <CountryHero 
            country={country}
            service="startup"
            title="Startup Development Services in Switzerland"
            subtitle="Launch your Swiss startup with confidence. MVP development, technical consulting, and growth strategies tailored for the competitive Swiss market."
            ctaPrimary="Get Your Swiss MVP Quote"
            ctaSecondary="Book Startup Strategy Call"
          />
        </section>
        <CountryPainPoints country={country} serviceType="startup" />
        <StartupValueProps />
        <StartupProcess />
        <StartupPricing />
        <StartupFAQ />
        <StartupCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default SwitzerlandStartupDevelopment;
