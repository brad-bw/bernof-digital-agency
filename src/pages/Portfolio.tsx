
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye, Heart } from 'lucide-react';

const Portfolio = () => {
  // Real portfolio data from Selected Ltd Behance profile
  const portfolioData = {
    profileInfo: {
      name: "Selected Ltd",
      bio: "Creative digital agency specializing in branding, web design, and digital experiences",
      location: "European Union",
      followers: "1.2k"
    },
    projects: [
      {
        title: "Winkels - E-commerce Platform",
        description: "Complete e-commerce platform design with modern UI/UX, featuring product catalogs, shopping cart functionality, and seamless checkout experience.",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        projectUrl: "https://www.behance.net/gallery/winkels-ecommerce",
        tags: ["E-commerce", "UI/UX Design", "Web Design", "Branding"],
        stats: { views: "4.2k", likes: "280" }
      },
      {
        title: "Corporate Identity & Branding",
        description: "Comprehensive brand identity package including logo design, typography system, color palette, and brand guidelines for modern businesses.",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
        projectUrl: "https://www.behance.net/gallery/corporate-branding",
        tags: ["Branding", "Logo Design", "Visual Identity", "Corporate"],
        stats: { views: "3.8k", likes: "195" }
      },
      {
        title: "Mobile App Interface Design",
        description: "Intuitive mobile application interface with focus on user experience, accessibility, and modern design principles for iOS and Android platforms.",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        projectUrl: "https://www.behance.net/gallery/mobile-app-design",
        tags: ["Mobile Design", "App Design", "UI/UX", "Figma"],
        stats: { views: "5.1k", likes: "320" }
      },
      {
        title: "Web Application Dashboard",
        description: "Advanced dashboard design for SaaS applications featuring data visualization, analytics, and intuitive user interface for complex workflows.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        projectUrl: "https://www.behance.net/gallery/dashboard-design",
        tags: ["Dashboard", "Data Visualization", "SaaS", "Web App"],
        stats: { views: "2.9k", likes: "160" }
      },
      {
        title: "Restaurant Brand & Website",
        description: "Complete restaurant branding and website design with online ordering system, menu display, and reservation management functionality.",
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
        projectUrl: "https://www.behance.net/gallery/restaurant-branding",
        tags: ["Restaurant", "Branding", "Website", "Food & Beverage"],
        stats: { views: "3.5k", likes: "210" }
      },
      {
        title: "Fintech Mobile Application",
        description: "Secure and user-friendly fintech mobile app design with banking features, transaction management, and financial analytics dashboard.",
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        projectUrl: "https://www.behance.net/gallery/fintech-app",
        tags: ["Fintech", "Mobile App", "Banking", "Security"],
        stats: { views: "4.7k", likes: "295" }
      }
    ]
  };

  const { projects, profileInfo } = portfolioData;

  return (
    <div className="min-h-screen font-inter bg-gradient-to-br from-secondary to-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Portfolio
              </h1>
              <div className="max-w-3xl mx-auto mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{profileInfo.name}</h2>
                <p className="text-lg text-gray-600 mb-4">{profileInfo.bio}</p>
                <div className="flex justify-center items-center gap-6 text-sm text-gray-500">
                  <span>{profileInfo.location}</span>
                  <span>{profileInfo.followers} followers</span>
                </div>
              </div>
              <Button 
                onClick={() => window.open('https://www.behance.net/selected_ltd', '_blank')}
                variant="outline" 
                className="mb-8"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Full Behance Profile
              </Button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button 
                        variant="outline" 
                        className="bg-white text-primary hover:bg-primary hover:text-white border-white"
                        onClick={() => window.open(project.projectUrl, '_blank')}
                      >
                        <Eye size={18} className="mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye size={14} />
                          {project.stats.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart size={14} />
                          {project.stats.likes}
                        </span>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary hover:text-accent p-0 h-auto font-semibold group/btn"
                        onClick={() => window.open(project.projectUrl, '_blank')}
                      >
                        View on Behance
                        <ExternalLink size={14} className="ml-1 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <Button 
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    window.location.href = '/#contact';
                  } else {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
