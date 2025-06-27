
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CaseStudiesGrid from "@/components/case-studies/CaseStudiesGrid";
import CaseStudiesStats from "@/components/case-studies/CaseStudiesStats";
import CaseStudiesCTA from "@/components/case-studies/CaseStudiesCTA";

const CaseStudies = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/case-studies" }
  ];

  const seoData = {
    title: "Case Studies | Successful Projects by Bernof Co | Web & Mobile Development",
    description: "Explore our portfolio of successful web development, mobile apps, and startup projects. See how we've helped 100+ clients across Europe and USA achieve their digital goals.",
    keywords: "case studies, portfolio, web development projects, mobile app development, startup success stories, digital transformation, bernof co projects",
    canonical: "https://bernofco.com/case-studies"
  };

  return (
    <div className="min-h-screen font-inter">
      <SEO {...seoData} />
      <Header />
      <main>
        <div className="container mx-auto px-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <CaseStudiesHero />
        <CaseStudiesStats />
        <CaseStudiesGrid />
        <CaseStudiesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
