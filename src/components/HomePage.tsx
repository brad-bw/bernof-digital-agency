
import React from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import DiscoveryCallSection from "@/components/DiscoveryCallSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function HomePage() {
  return (
    <div className="min-h-screen font-inter">
      <SEO
        title="Premier Digital Agency | Web Development & Startup Services Europe/USA"
        description="Transform your business with Europe's leading digital agency. Expert web development, mobile apps, and startup services across USA, UK, and Europe. From $3,999. 100+ successful projects. Book free consultation today."
        keywords="digital agency europe, web development usa, mobile app development, startup development services, MVP development, software development company, UI/UX design agency, tech consulting, react development, node.js development, digital transformation"
        url="https://bernofco.com"
      />
      <Header />
      <main>
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
}
