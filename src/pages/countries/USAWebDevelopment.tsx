
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { USAWebHero } from "@/components/country/USAWebHero";
import { UKWebServices } from "@/components/country/UKWebServices";
import { USAWebComparison } from "@/components/country/USAWebComparison";
import ContactSection from "@/components/ContactSection";
import { useSEO } from "@/hooks/useSEO";

const USAWebDevelopment = () => {
  const seoData = useSEO('us/web-development');

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "United States", url: "/global-services/us" },
    { name: "Web Development Services", url: "/us/web-development" }
  ];

  return (
    <div className="min-h-screen font-satoshi">
      <SEO {...seoData} />
      <Header />
      <main>
        <div className="container mx-auto px-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <USAWebHero />
        <UKWebServices />
        <USAWebComparison />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default USAWebDevelopment;
