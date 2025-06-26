
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StartupHero from "@/components/startup/StartupHero";
import StartupValueProps from "@/components/startup/StartupValueProps";
import StartupProcess from "@/components/startup/StartupProcess";
import StartupPricing from "@/components/startup/StartupPricing";
import StartupFAQ from "@/components/startup/StartupFAQ";
import StartupCTA from "@/components/startup/StartupCTA";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { useSEO } from "@/hooks/useSEO";

const StartupDevelopment = () => {
  const seoData = useSEO('startup-development');

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Startup Development Services", url: "/startup-development" }
  ];

  return (
    <div className="min-h-screen font-inter">
      <SEO {...seoData} />
      <Header />
      <main>
        <div className="container mx-auto px-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <section>
          <h1 className="sr-only">Expert Startup Development Services - From MVP to Scale</h1>
          <StartupHero />
        </section>
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
