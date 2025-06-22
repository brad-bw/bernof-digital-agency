
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

const ItalySoftwareDevelopment = () => {
  const seoData = useSEO('it/software-development');
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
          service="software"
          title="Custom Software Development Services in Italy"
          subtitle="Transform Italy's traditional industries with modern software solutions. Custom applications, mobile apps, and digital transformation services for the Italian market."
          ctaPrimary="Discuss Your Software Project"
          ctaSecondary="Get Technical Assessment"
        />
        <CountryPainPoints country={country} serviceType="software" />
        <CountryServices country={country} serviceType="software" />
        <CountryCTA country={country} serviceType="software" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ItalySoftwareDevelopment;
