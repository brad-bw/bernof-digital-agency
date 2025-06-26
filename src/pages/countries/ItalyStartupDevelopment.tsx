
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
        <section>
          <h1 className="sr-only">Expert Italy Startup Development Services - From MVP to Scale</h1>
          <CountryHero 
            country={country}
            service="startup"
            title="Startup Development Services in Italy"
            subtitle="Build the next generation of Italian startups. MVP development, technical consulting, and growth strategies tailored for Italy's emerging tech ecosystem."
            ctaPrimary="Get Your Italian MVP Quote"
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

export default ItalyStartupDevelopment;
