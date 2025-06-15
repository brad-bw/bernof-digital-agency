
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      category: "UI/UX Design & Development",
      description: "Complete redesign and development of a modern e-commerce platform with enhanced user experience and conversion optimization.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Corporate Brand Identity",
      category: "Branding & Visual Design",
      description: "Complete brand identity design including logo, typography, color systems, and brand guidelines for a tech startup.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Adobe Illustrator", "Adobe InDesign", "Figma"],
      link: "#"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "Mobile App Design",
      description: "Intuitive mobile banking application with focus on security, accessibility, and seamless user experience.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Flutter", "Figma", "Firebase"],
      link: "#"
    },
    {
      id: 4,
      title: "SaaS Dashboard Analytics",
      category: "Web Application",
      description: "Advanced analytics dashboard for SaaS platform with real-time data visualization and reporting capabilities.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      link: "#"
    },
    {
      id: 5,
      title: "Restaurant Chain Website",
      category: "Web Development & SEO",
      description: "Multi-location restaurant website with online ordering, reservations, and comprehensive SEO optimization.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["WordPress", "WooCommerce", "SEO"],
      link: "#"
    },
    {
      id: 6,
      title: "Fitness App Motion Design",
      category: "Motion Graphics & Animation",
      description: "Dynamic motion graphics and animations for fitness tracking mobile application launch campaign.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["After Effects", "Cinema 4D", "Lottie"],
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-secondary to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our latest work across development, design, and marketing. 
              Each project represents our commitment to excellence and innovation.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      variant="outline" 
                      className="bg-white text-primary hover:bg-primary hover:text-white border-white"
                    >
                      <Eye size={18} className="mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="text-accent font-semibold text-sm uppercase tracking-wide">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-muted text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-accent p-0 h-auto font-semibold group/btn"
                  >
                    View Case Study 
                    <ExternalLink size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
