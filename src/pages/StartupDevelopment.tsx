
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StartupHero from "@/components/startup/StartupHero";
import StartupValueProps from "@/components/startup/StartupValueProps";
import StartupProcess from "@/components/startup/StartupProcess";
import StartupPricing from "@/components/startup/StartupPricing";
import StartupFAQ from "@/components/startup/StartupFAQ";
import StartupCTA from "@/components/startup/StartupCTA";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";

const StartupDevelopment = () => {
  const seoData = useSEO('startup-development');

  return (
    <div className="min-h-screen font-inter">
      <SEO {...seoData} />
      <Header />
      <main>
        <StartupHero />
        <StartupValueProps />
        <StartupProcess />
        <StartupPricing />
        <StartupFAQ />
        <StartupCTA />
      </main>
      <Footer />
    </div>
  );
};

export default StartupDevelopment;
