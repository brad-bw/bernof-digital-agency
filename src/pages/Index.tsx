
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import DiscoveryCallSection from "@/components/DiscoveryCallSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  const seoData = useSEO('home');

  return (
    <div className="min-h-screen font-inter">
      <SEO {...seoData} />
      <Header />
      <main>
        <div className="container mx-auto px-6">
          <Breadcrumb items={seoData.breadcrumbs || []} />
        </div>
        <section>
          <h1 className="sr-only">Bernof Co - Premier Digital Solutions & Growth Services</h1>
          <HeroSection />
        </section>
        <ServicesSection />
        <AboutSection />
        <DiscoveryCallSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
