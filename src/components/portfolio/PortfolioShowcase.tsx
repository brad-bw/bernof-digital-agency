import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: "formatplus",
    title: "FormatPlus",
    category: "E-Commerce & Manufacturing",
    description: "Tailor-made processing and transformation platform for Italian ceramics stoneware slabs for interior projects.",
    image: "/images/portfolio/formatplus.jpg",
    tags: ["Web Design", "E-Commerce", "Manufacturing"]
  },
  {
    id: "dangelo",
    title: "D'Angelo",
    category: "Food & Beverage",
    description: "Modern food ordering and delivery platform with intuitive menu browsing and seamless checkout experience.",
    image: "/images/portfolio/dangelo.jpg",
    tags: ["Mobile App", "Food Delivery", "E-Commerce"]
  },
  {
    id: "greencoast",
    title: "Green Coast",
    category: "Hospitality & Tourism",
    description: "Luxury resort booking platform showcasing premium villas with captivating views and modern amenities.",
    image: "/images/portfolio/greencoast.jpg",
    tags: ["Web Design", "Booking System", "Hospitality"]
  },
  {
    id: "bigmarket",
    title: "BIG Market",
    category: "Retail & E-Commerce",
    description: "Comprehensive online grocery shopping platform with category browsing and home delivery services.",
    image: "/images/portfolio/bigmarket.jpg",
    tags: ["E-Commerce", "Retail", "Marketplace"]
  },
  {
    id: "hijarental",
    title: "Hija Rental",
    category: "Media & Production",
    description: "High-end film equipment rental platform for advertising, film, and audio-visual projects with cutting-edge inventory.",
    image: "/images/portfolio/hijarental.jpg",
    tags: ["Web Platform", "Rental", "Media"]
  },
  {
    id: "albsig",
    title: "Albsig Insurance",
    category: "Insurance & Finance",
    description: "Modern insurance platform offering auto insurance, online policy purchase, and damage reporting capabilities.",
    image: "/images/portfolio/albsig.jpg",
    tags: ["Insurance", "Finance", "Web Platform"]
  },
  {
    id: "bson",
    title: "BSON Trading",
    category: "Fintech & Crypto",
    description: "24/7 automatic trading bot platform with social network features for smarter cryptocurrency trading.",
    image: "/images/portfolio/bson.jpg",
    tags: ["Fintech", "Trading Bots", "Crypto"]
  },
  {
    id: "kidspod",
    title: "KidsPod",
    category: "Education & Entertainment",
    description: "Safe podcast platform designed specifically for children with curated content and parental controls.",
    image: "/images/portfolio/kidspod.jpg",
    tags: ["Mobile App", "Education", "Entertainment"]
  }
];

const PortfolioShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories = ["All", "E-Commerce", "Mobile App", "Web Platform", "Fintech"];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()))
      );

  return (
    <section id="portfolio" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
              Our Work
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Crafting <span className="text-gradient">digital excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From concept to launch, we've delivered exceptional solutions across industries. 
              Each project represents our commitment to innovation and quality.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white border border-border text-foreground hover:border-primary/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project image */}
                <div className="relative h-80 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-slate-50 font-semibold rounded-2xl shadow-xl"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-8">
                  <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-50 text-foreground text-xs font-medium rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Want to see how we can bring your vision to life?
            </p>
            <Button
              onClick={() => document.getElementById('discovery-call')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="gradient-primary text-white font-semibold px-10 py-6 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
