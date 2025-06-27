
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
      subtitle: "Ceramics and Interior Design",
      company: "Format Plus",
      location: "Italy",
      description: "FORMAT PLUS specializes in the processing and transformation of ceramic slabs, collaborating with architects and interior designers to create bespoke furnishing elements using state-of-the-art ceramic slabs.",
      fullDescription: "Format Plus is a cutting-edge ceramics and interior design company that transforms raw ceramic materials into stunning architectural elements. Working closely with architects and interior designers, they create custom furnishing solutions that push the boundaries of ceramic applications in modern design. The project involved creating a comprehensive digital presence that showcases their craftsmanship and attracts high-quality leads in the architecture and design industry.",
      category: "web",
      technologies: ["Social Media Management", "Digital Advertising", "Website Development", "SEO Optimization", "Google My Business", "Visual Identity Design", "Professional Photography", "Video Production", "UI/UX Design", "Print Publications", "Brand Development", "Content Strategy"],
      duration: "12 weeks",
      team: "6 specialists",
      results: "Comprehensive digital presence with high-performing website and integrated social media strategy, resulting in increased brand visibility and quality leads",
      challenge: "Creating a digital presence that effectively showcases the craftsmanship and quality of ceramic transformations while appealing to both architects and interior designers. The challenge was to create a cohesive brand identity that would work across multiple platforms and communicate the premium nature of their Italian ceramic solutions.",
      solution: "Developed a comprehensive digital strategy including website design using Figma and WordPress, social media management across multiple platforms, SEO optimization, and visual identity creation. We implemented reliable hosting, configured servers for optimal performance, and integrated professional email systems. The solution included both digital and print materials to create a cohesive brand experience.",
      impact: "Established a strong online presence that effectively communicates the brand's expertise and attracts high-quality leads in the architecture and design industry. The integrated approach resulted in increased brand recognition, improved client engagement, and successful positioning in the luxury ceramics market.",
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
      <section className="py-20 bg-white" id="case-studies-grid">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`font-inter ${
                    selectedCategory === category.id
                      ? "bg-brand-teal text-white"
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
