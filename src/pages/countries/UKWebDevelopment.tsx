
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UKWebHero } from "@/components/country/UKWebHero";
import { UKWebServices } from "@/components/country/UKWebServices";
import { UKWebComparison } from "@/components/country/UKWebComparison";
import ContactSection from "@/components/ContactSection";

const UKWebDevelopment = () => {
  return (
    <div className="min-h-screen font-satoshi">
      <Helmet>
        <title>UK Web Development Services | British Website Design & Development | Bernof Co</title>
        <meta name="description" content="UK web development services with 60% cost savings. Post-Brexit compliant websites, e-commerce solutions, and digital platforms for British businesses." />
        <meta name="keywords" content="UK web development, British website design, London web agency, Manchester web development, post-Brexit web solutions" />
        <link rel="canonical" href="https://bernofco.com/uk/web-development" />
        <link rel="hreflang" hrefLang="en-gb" href="https://bernofco.com/uk/web-development" />
        <link rel="hreflang" hrefLang="x-default" href="https://bernofco.com/global-services" />
      </Helmet>
      
      <Header />
      <main>
        <UKWebHero />
        <UKWebServices />
        <UKWebComparison />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default UKWebDevelopment;
