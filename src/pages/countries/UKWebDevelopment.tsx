
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { UKWebHero } from "@/components/country/UKWebHero";
import { UKWebServices } from "@/components/country/UKWebServices";
import { UKWebComparison } from "@/components/country/UKWebComparison";
import ContactSection from "@/components/ContactSection";
import { useSEO } from "@/hooks/useSEO";

const UKWebDevelopment = () => {
  const seoData = useSEO('uk/web-development');

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "United Kingdom", url: "/global-services/uk" },
    { name: "Web Development Services", url: "/uk/web-development" }
  ];

  return (
    <div className="min-h-screen font-satoshi">
      <SEO {...seoData} />
      <Header />
      <main>
        <div className="container mx-auto px-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <UKWebHero />
        <UKWebServices />
        <UKWebComparison />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default UKWebDevelopment;
