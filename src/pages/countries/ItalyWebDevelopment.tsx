
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { ItalyWebHero } from "@/components/country/ItalyWebHero";
import { UKWebServices } from "@/components/country/UKWebServices";
import { UKWebComparison } from "@/components/country/UKWebComparison";
import ContactSection from "@/components/ContactSection";
import { useSEO } from "@/hooks/useSEO";

const ItalyWebDevelopment = () => {
  const seoData = useSEO('it/web-development');

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Italy", url: "/global-services/it" },
    { name: "Web Development Services", url: "/it/web-development" }
  ];

  return (
    <div className="min-h-screen font-satoshi">
      <SEO {...seoData} />
      <Header />
      <main>
        <div className="container mx-auto px-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <ItalyWebHero />
        <UKWebServices />
        <UKWebComparison />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ItalyWebDevelopment;
