
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

const SwitzerlandWebDevelopment = () => {
  const seoData = useSEO('ch/web-development');
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
          service="web"
          title="Professional Web Development Services in Switzerland"
          subtitle="Cost-effective, high-quality websites and e-commerce solutions that help Swiss businesses compete globally while saving 60-70% on development costs."
          ctaPrimary="Get Your Website Quote"
          ctaSecondary="Schedule Free Consultation"
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

export default SwitzerlandWebDevelopment;
