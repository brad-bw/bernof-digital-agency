
import { useState } from "react";
import { ExternalLink, Clock, Users, Code, ArrowRight, X, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import OptimizedImage from "@/components/OptimizedImage";

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  company: string;
  location: string;
  description: string;
  fullDescription: string;
  category: string;
  technologies: string[];
  duration: string;
  team: string;
  results: string;
  challenge: string;
  solution: string;
  impact: string;
  thumbnail: string;
  images: string[];
  gradient: string;
  year: string;
}

const CaseStudiesGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Caredove Platform",
      subtitle: "Healthcare Technology",
      company: "Caredove",
      location: "Canada",
      description: "A comprehensive healthcare platform connecting patients, providers, and caregivers through innovative technology solutions.",
      fullDescription: "Caredove is a revolutionary healthcare platform that streamlines patient care coordination by connecting healthcare providers, patients, and caregivers in a unified ecosystem. Our team developed a robust, scalable solution that handles complex healthcare workflows while maintaining HIPAA compliance and ensuring seamless user experience across all touchpoints.",
      category: "web",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "HIPAA Compliance"],
      duration: "16 weeks",
      team: "8 developers",
      results: "40% improvement in patient care coordination",
      challenge: "Complex healthcare workflows required seamless integration between multiple stakeholders while maintaining strict compliance standards.",
      solution: "Built a comprehensive platform with role-based access, real-time communication, and automated workflow management.",
      impact: "Reduced administrative overhead by 35% and improved patient satisfaction scores by 28%.",
      thumbnail: "/lovable-uploads/c84d23ac-a325-4a8b-b7b9-9ad980fdde19.png",
      images: [
        "/lovable-uploads/50e45f8e-a679-43be-bdca-3af149fa4772.png",
        "/lovable-uploads/4ff32a07-73a8-4244-b613-81dfffbd6568.png"
      ],
      gradient: "from-blue-500 to-cyan-600",
      year: "2024"
    },
    {
      id: 2,
      title: "MindBridge Platform",
      subtitle: "Mental Health Technology",
      company: "MindBridge",
      location: "USA",
      description: "An AI-powered mental health platform providing personalized therapy and wellness solutions.",
      fullDescription: "MindBridge revolutionizes mental health care by combining AI-driven insights with human expertise. The platform offers personalized therapy sessions, mood tracking, and wellness programs tailored to individual needs. Our development team created a secure, empathetic digital environment that supports mental health professionals and their clients.",
      category: "web",
      technologies: ["React", "Python", "AI/ML", "PostgreSQL", "WebRTC"],
      duration: "20 weeks",
      team: "10 developers",
      results: "25,000+ users helped in first 6 months",
      challenge: "Creating a secure, empathetic digital environment for sensitive mental health interactions while integrating AI capabilities.",
      solution: "Developed an AI-powered platform with secure video sessions, mood tracking, and personalized therapy recommendations.",
      impact: "Improved therapy access by 60% and reduced session scheduling time by 45%.",
      thumbnail: "/lovable-uploads/c84d23ac-a325-4a8b-b7b9-9ad980fdde19.png",
      images: [
        "/lovable-uploads/4ff32a07-73a8-4244-b613-81dfffbd6568.png"
      ],
      gradient: "from-purple-500 to-pink-600",
      year: "2024"
    },
    {
      id: 3,
      title: "Format Plus",
      subtitle: "Ceramics and Interior Design",
      company: "Format Plus",
      location: "Italy",
      description: "FORMAT PLUS specializes in the processing and transformation of ceramic slabs, collaborating with architects and interior designers to create bespoke furnishing elements using state-of-the-art ceramic slabs.",
      fullDescription: "Format Plus is a cutting-edge ceramics and interior design company that transforms raw ceramic materials into stunning architectural elements. Working closely with architects and interior designers, they create custom furnishing solutions that push the boundaries of ceramic applications in modern design.",
      category: "web",
      technologies: ["Social Media", "Advertising", "Website", "SEO", "Google My Business", "Visual Identity", "Photography", "Video", "UI/UX", "Publication"],
      duration: "12 weeks",
      team: "6 developers",
      results: "High-performing website showcasing FormatPlus's services effectively",
      challenge: "Creating a digital presence that effectively showcases the craftsmanship and quality of ceramic transformations while appealing to both architects and interior designers.",
      solution: "Developed a comprehensive digital strategy including website design, social media management, SEO optimization, and visual identity creation.",
      impact: "Established a strong online presence that effectively communicates the brand's expertise and attracts high-quality leads in the architecture and design industry.",
      thumbnail: "/lovable-uploads/ff64d8fb-43d3-42d1-ba4e-9170f8ca98aa.png",
      images: [
        "/lovable-uploads/ff64d8fb-43d3-42d1-ba4e-9170f8ca98aa.png"
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
                <div
                  key={study.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-brand-teal/30 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedCase(study)}
                >
                  {/* Image Header */}
                  <div className="h-48 relative overflow-hidden">
                    <OptimizedImage
                      src={study.thumbnail}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-80`}></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800 border-white/30">
                        {study.category.charAt(0).toUpperCase() + study.category.slice(1)}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 text-white border-white/30">
                        {study.year}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 font-inter group-hover:text-brand-teal transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-sm text-brand-teal font-medium font-inter">
                        {study.company}
                      </p>
                      <p className="text-xs text-gray-500 font-inter flex items-center mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {study.location}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm font-inter leading-relaxed">
                      {study.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-brand-sage-light/30 text-brand-teal-dark text-xs font-inter"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {study.technologies.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 text-gray-600 text-xs font-inter"
                        >
                          +{study.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-brand-teal" />
                        <span className="text-xs text-gray-600 font-inter">{study.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-brand-teal" />
                        <span className="text-xs text-gray-600 font-inter">{study.team}</span>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-gradient-to-r from-brand-sage-light/20 to-brand-sage-light/10 rounded-lg p-3">
                      <div className="text-xs text-brand-teal-dark font-medium font-inter">Results:</div>
                      <div className="text-sm font-semibold text-brand-teal font-inter">{study.results}</div>
                    </div>

                    {/* CTA */}
                    <Button
                      variant="ghost"
                      className="w-full text-brand-teal hover:text-white hover:bg-brand-teal transition-all duration-300 font-inter group"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedCase && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900 font-inter flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      {selectedCase.title}
                      <Badge className="bg-brand-teal text-white">
                        {selectedCase.category}
                      </Badge>
                    </div>
                    <div className="text-lg text-brand-teal font-medium mt-1">
                      {selectedCase.company}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {selectedCase.location} • {selectedCase.year}
                    </div>
                  </div>
                </DialogTitle>
                <DialogClose className="absolute right-4 top-4" />
              </DialogHeader>

              <div className="space-y-6">
                {/* Hero Image */}
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <OptimizedImage
                    src={selectedCase.thumbnail}
                    alt={selectedCase.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${selectedCase.gradient} opacity-60`}></div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 font-inter">Project Overview</h3>
                      <p className="text-gray-600 leading-relaxed font-inter">
                        {selectedCase.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 font-inter">Challenge</h3>
                      <p className="text-gray-600 leading-relaxed font-inter">
                        {selectedCase.challenge}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 font-inter">Solution</h3>
                      <p className="text-gray-600 leading-relaxed font-inter">
                        {selectedCase.solution}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 font-inter">Impact</h3>
                      <p className="text-gray-600 leading-relaxed font-inter">
                        {selectedCase.impact}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Project Stats */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 font-inter">Project Details</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 font-inter">Duration</span>
                          <span className="text-sm font-medium text-gray-900 font-inter">{selectedCase.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 font-inter">Team Size</span>
                          <span className="text-sm font-medium text-gray-900 font-inter">{selectedCase.team}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 font-inter">Year</span>
                          <span className="text-sm font-medium text-gray-900 font-inter">{selectedCase.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 font-inter">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCase.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-brand-sage-light/30 text-brand-teal-dark font-inter"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-gradient-to-r from-brand-sage-light/20 to-brand-sage-light/10 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-brand-teal-dark mb-2 font-inter">Key Results</h3>
                      <p className="text-brand-teal font-semibold font-inter">{selectedCase.results}</p>
                    </div>
                  </div>
                </div>

                {/* Additional Images */}
                {selectedCase.images.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 font-inter">Project Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedCase.images.map((image, index) => (
                        <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                          <OptimizedImage
                            src={image}
                            alt={`${selectedCase.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CaseStudiesGrid;
