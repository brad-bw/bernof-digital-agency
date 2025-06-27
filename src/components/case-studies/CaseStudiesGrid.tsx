
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyModal from "./CaseStudyModal";
import { CaseStudy } from "./types";

const CaseStudiesGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 3,
      title: "Format Plus",
      subtitle: "Ceramics and Interior Design Excellence",
      company: "Format Plus",
      location: "Italy",
      description: "FORMAT PLUS specializes in the processing and transformation of ceramic slabs, collaborating with architects and interior designers to create bespoke furnishing elements using state-of-the-art ceramic slabs and advanced manufacturing techniques.",
      fullDescription: "Format Plus is a leading Italian company in the ceramics and interior design industry, specializing in the transformation of high-quality ceramic slabs into stunning architectural elements. Working closely with architects and interior designers, they create custom furnishing solutions that push the boundaries of ceramic applications in modern design. Our comprehensive digital transformation project involved creating a complete brand identity, modern website, and integrated digital marketing strategy that positions Format Plus as a premium leader in the luxury ceramics market.",
      category: "web",
      technologies: ["Social Media Management", "Digital Advertising", "Website Development", "SEO Optimization", "Google My Business", "Visual Identity Design", "Professional Photography", "Video Production", "UI/UX Design", "Print Publications", "Brand Development", "Content Strategy", "WordPress", "Figma", "Server Configuration", "Email Integration"],
      duration: "12 weeks",
      team: "6 specialists",
      results: "Comprehensive digital transformation resulting in a 300% increase in online visibility, professional brand identity that attracts high-quality leads, and a modern website that effectively showcases Italian craftsmanship to architects and interior designers worldwide.",
      challenge: "Format Plus needed to establish a strong digital presence that would effectively communicate their expertise in ceramic transformation while appealing to both architects and interior designers. The main challenge was creating a cohesive brand identity that would work across multiple platforms and communicate the premium nature of their Italian ceramic solutions, while also competing in the luxury design market.",
      solution: "We developed a comprehensive digital strategy that included complete brand identity design, modern website development using Figma and WordPress, integrated social media management across multiple platforms, professional SEO optimization, and visual content creation. The solution included both digital and print materials, reliable hosting setup, server configuration for optimal performance, and professional email system integration to create a seamless brand experience.",
      impact: "The project successfully established Format Plus as a premium brand in the ceramics industry with a strong online presence that effectively communicates their expertise and attracts high-quality leads. The integrated digital approach resulted in significant brand recognition improvement, enhanced client engagement, and successful positioning in the luxury ceramics market with measurable increases in qualified inquiries from architects and designers.",
      thumbnail: "/lovable-uploads/2f22eac0-9aa8-4302-8851-15fb30fa7c68.png",
      images: [
        "/lovable-uploads/2f22eac0-9aa8-4302-8851-15fb30fa7c68.png",
        "/lovable-uploads/c480ee89-f4e4-4940-a9dd-dcfdec7443fd.png",
        "/lovable-uploads/65c674e9-e949-4fe3-b6b3-43f9427d5e5d.png",
        "/lovable-uploads/a6b07f27-36f1-45f4-b754-4628f8338eae.png",
        "/lovable-uploads/56ef85cb-f6a3-4c5e-82d6-c835efd346af.png"
      ],
      gradient: "from-orange-500 to-red-600",
      year: "2024"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "startup", label: "Startup Solutions" }
  ];

  const filteredStudies = selectedCategory === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="case-studies-grid">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-brand-teal text-white shadow-lg"
                      : "border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study, index) => (
                <CaseStudyCard
                  key={study.id}
                  study={study}
                  index={index}
                  onClick={setSelectedCase}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CaseStudyModal
        selectedCase={selectedCase}
        onClose={() => setSelectedCase(null)}
      />
    </>
  );
};

export default CaseStudiesGrid;
