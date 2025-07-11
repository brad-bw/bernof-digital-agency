
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { SwitzerlandWebHero } from "@/components/country/SwitzerlandWebHero";
import { UKWebServices } from "@/components/country/UKWebServices";
import { UKWebComparison } from "@/components/country/UKWebComparison";
import ContactSection from "@/components/ContactSection";
import { useSEO } from "@/hooks/useSEO";

const SwitzerlandWebDevelopment = () => {
  const seoData = useSEO('ch/web-development');

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Switzerland", url: "/global-services/ch" },
    { name: "Web Development Services", url: "/ch/web-development" }
  ];

  return (
    <div className="min-h-screen font-satoshi">
      <SEO {...seoData} />
      <Header />
      <main>
        <div className="container mx-auto px-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <SwitzerlandWebHero />
        <UKWebServices />
        <UKWebComparison />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default SwitzerlandWebDevelopment;
