
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

const ItalyWebDevelopment = () => {
  const seoData = useSEO('it/web-development');
  const country = getCountryConfig('it')!;

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Italy", url: "/global-services/it" },
    { name: "Web Development Services", url: "/it/web-development" }
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
          service="web"
          title="Professional Web Development Services in Italy"
          subtitle="Modernize your Italian business with cutting-edge websites and e-commerce solutions. Bridge the digital transformation gap with cost-effective, world-class development."
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

export default ItalyWebDevelopment;
