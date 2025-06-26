
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

const ItalyHub = () => {
  const seoData = useSEO('global-services/it');
  const country = getCountryConfig('it')!;

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
          service="hub"
          title="Digital Services for Italian Businesses"
          subtitle="Bridge Italy's digital transformation gap with cutting-edge solutions and European excellence at exceptional value."
          ctaPrimary="Explore Italian Services"
          ctaSecondary="Book Consultation"
        />
        <CountryPainPoints country={country} serviceType="hub" />
        <CountryServices country={country} serviceType="hub" />
        <CountryCTA country={country} serviceType="hub" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ItalyHub;
