
import React from 'react';
import Header from "@/components/Header";
import ModernHero from "@/components/modern/ModernHero";
import ModernServices from "@/components/modern/ModernServices";
import ModernAbout from "@/components/modern/ModernAbout";
import DiscoveryCallSection from "@/components/DiscoveryCallSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";

const Index: React.FC = () => {
  const seoData = useSEO('home');

  return (
    <div className="min-h-screen bg-white font-inter">
      <SEO {...seoData} />
      <Header />
      <main>
        <section>
          <h1 className="sr-only">Bernof Co - Premier Digital Solutions & Growth Services</h1>
          <ModernHero />
        </section>
        <ModernServices />
        <ModernAbout />
        <DiscoveryCallSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
