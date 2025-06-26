
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import UKStartupHero from "@/components/country/UKStartupHero";
import StartupValueProps from "@/components/startup/StartupValueProps";
import StartupProcess from "@/components/startup/StartupProcess";
import StartupPricing from "@/components/startup/StartupPricing";
import StartupFAQ from "@/components/startup/StartupFAQ";
import StartupCTA from "@/components/startup/StartupCTA";
import ContactSection from "@/components/ContactSection";
import CountryPainPoints from "@/components/country/CountryPainPoints";
import { useSEO } from "@/hooks/useSEO";
import { getCountryConfig } from "@/config/countries";

const UKStartupDevelopment = () => {
  const seoData = useSEO('uk/startup-development');
  const ukCountry = getCountryConfig('uk')!;

  return (
    <div className="min-h-screen font-inter">
      <SEO {...seoData} />
      <Header />
      <main>
        <div className="container mx-auto px-6">
          <Breadcrumb items={seoData.breadcrumbs || []} />
        </div>
        <section>
          <h1 className="sr-only">Expert UK Startup Development Services - From MVP to Scale</h1>
          <UKStartupHero />
        </section>
        <CountryPainPoints country={ukCountry} serviceType="startup" />
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

export default UKStartupDevelopment;
