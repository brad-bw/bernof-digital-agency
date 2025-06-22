
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

const UKSoftwareDevelopment = () => {
  const seoData = useSEO('uk/software-development');
  const country = getCountryConfig('uk')!;

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
          title="Custom Software Development Services in the UK"
          subtitle="Strengthen your position in the competitive UK market with enterprise-grade software solutions, fintech applications, and innovative digital products."
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

export default UKSoftwareDevelopment;
