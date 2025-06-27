
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
      fullDescription: "Format Plus is a cutting-edge ceramics and interior design company that transforms raw ceramic materials into stunning architectural elements. Working closely with architects and interior designers, they create custom furnishing solutions that push the boundaries of ceramic applications in modern design. Creating the FormatPlus website involved designing with Figma, developing on WordPress with custom themes and plugins for responsiveness, SEO, and security.",
      category: "web",
      technologies: ["Social Media", "Advertising", "Website", "SEO", "Google My Business", "Visual Identity", "Photography", "Video", "UI/UX", "Publication"],
      duration: "12 weeks",
      team: "6 developers",
      results: "High-performing website showcasing FormatPlus's services effectively with comprehensive social media management",
      challenge: "Creating a digital presence that effectively showcases the craftsmanship and quality of ceramic transformations while appealing to both architects and interior designers. The challenge was to create a cohesive brand identity that would work across multiple platforms.",
      solution: "Developed a comprehensive digital strategy including website design using Figma and WordPress, social media management, SEO optimization, and visual identity creation. We chose reliable hosting, set up domains, and configured servers for speed and efficiency. Professional email accounts were also integrated.",
      impact: "Established a strong online presence that effectively communicates the brand's expertise and attracts high-quality leads in the architecture and design industry. The result is a high-performing website showcasing FormatPlus's services effectively with integrated social media presence.",
      thumbnail: "/lovable-uploads/fbad894c-5bdd-4abf-99ff-59cdab2462b3.png",
      images: [
        "/lovable-uploads/fbad894c-5bdd-4abf-99ff-59cdab2462b3.png"
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
