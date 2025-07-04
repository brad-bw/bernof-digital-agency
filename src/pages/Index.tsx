import React from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import DiscoveryCallSection from "@/components/DiscoveryCallSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";

const Index: React.FC = () => {
  const seoData = useSEO('home');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <SEO {...seoData} />
      <Header />
      <main>
        <section>
          <h1 className="text-5xl font-bold mb-6 text-primary text-center">Bernof Co</h1>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">Premier Digital Solutions & Growth Services</h2>
          <p className="text-lg text-gray-600 max-w-xl text-center mb-8">
            Transform your digital presence with comprehensive development solutions, creative design services, and strategic marketing that drives measurable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="/blog" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">Visit Blog</a>
            <a href="/contact" className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition">Contact Us</a>
          </div>
          <div className="text-gray-400 text-sm mt-8">&copy; {new Date().getFullYear()} Bernof Co. All rights reserved.</div>
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
