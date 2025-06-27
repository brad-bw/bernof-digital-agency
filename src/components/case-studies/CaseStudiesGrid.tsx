
import { useState } from "react";
import { ExternalLink, Clock, Users, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CaseStudiesGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform",
      subtitle: "Modern Online Store",
      description: "Built a comprehensive e-commerce platform with advanced features including product management, secure payments, and analytics dashboard.",
      category: "web",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      duration: "8 weeks",
      team: "4 developers",
      results: "300% increase in sales",
      image: "/lovable-uploads/318342bc-a760-4a85-b783-36a81fe5a5ea.png",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      subtitle: "Fintech Solution",
      description: "Developed a secure mobile banking application with biometric authentication, real-time transactions, and financial analytics.",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Blockchain", "AWS"],
      duration: "12 weeks",
      team: "6 developers",
      results: "50K+ downloads in first month",
      image: "/lovable-uploads/318342bc-a760-4a85-b783-36a81fe5a5ea.png",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "SaaS Analytics Platform",
      subtitle: "Data Intelligence",
      description: "Created a comprehensive analytics platform for businesses to track performance metrics and generate actionable insights.",
      category: "startup",
      technologies: ["React", "Python", "MongoDB", "Docker"],
      duration: "16 weeks",
      team: "8 developers",
      results: "$2M+ ARR achieved",
      image: "/lovable-uploads/318342bc-a760-4a85-b783-36a81fe5a5ea.png",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "Healthcare Management System",
      subtitle: "Digital Health",
      description: "Built a comprehensive healthcare management system for hospitals with patient records, appointment scheduling, and telemedicine features.",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      duration: "20 weeks",
      team: "10 developers",
      results: "90% efficiency improvement",
      image: "/lovable-uploads/318342bc-a760-4a85-b783-36a81fe5a5ea.png",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      id: 5,
      title: "Food Delivery App",
      subtitle: "On-Demand Service",
      description: "Developed a complete food delivery ecosystem with customer app, restaurant dashboard, and delivery tracking system.",
      category: "mobile",
      technologies: ["React Native", "Node.js", "Redis", "Socket.io"],
      duration: "14 weeks",
      team: "7 developers",
      results: "100K+ active users",
      image: "/lovable-uploads/318342bc-a760-4a85-b783-36a81fe5a5ea.png",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      id: 6,
      title: "Real Estate Platform",
      subtitle: "Property Tech",
      description: "Created a modern real estate platform with virtual tours, property management, and advanced search capabilities.",
      category: "startup",
      technologies: ["React", "Node.js", "PostgreSQL", "3D.js"],
      duration: "18 weeks",
      team: "9 developers",
      results: "500+ properties listed",
      image: "/lovable-uploads/318342bc-a760-4a85-b783-36a81fe5a5ea.png",
      gradient: "from-indigo-500 to-blue-600"
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
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-brand-teal/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Header */}
                <div className={`h-48 bg-gradient-to-br ${study.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 text-white border-white/30">
                      {study.category.charAt(0).toUpperCase() + study.category.slice(1)}
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
                      {study.subtitle}
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
  );
};

export default CaseStudiesGrid;
