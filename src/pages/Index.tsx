
import React from 'react';
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";

// New homepage components
import HeroSection from "@/components/homepage/HeroSection";
import ClientLogoMarquee from "@/components/homepage/ClientLogoMarquee";
import CoreServices from "@/components/homepage/CoreServices";
import FeaturedWork from "@/components/homepage/FeaturedWork";
import FinalCTA from "@/components/homepage/FinalCTA";
import NewFooter from "@/components/homepage/NewFooter";

const Index: React.FC = () => {
  const seoData = useSEO('home');

  return (
    <div className="min-h-screen bg-off-white font-ibm-plex-sans">
      <SEO {...seoData} />
      <Header />
      <main>
        <HeroSection />
        <ClientLogoMarquee />
        <CoreServices />
        <FeaturedWork />
        <FinalCTA />
      </main>
      <NewFooter />
    </div>
  );
};

export default Index;
