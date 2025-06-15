
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Web Development & Tech Solutions",
      description: "From concept to launch, we build high-performance websites and applications that drive results.",
      detailedDescription: "We specialize in modern web technologies including React, Next.js, and full-stack development. Our solutions are built for scale, performance, and user experience.",
      features: [
        { name: "Custom Website Development", description: "Tailored solutions built from scratch" },
        { name: "E-Commerce Platforms", description: "Shopify, WooCommerce, custom stores" },
        { name: "Web Applications", description: "SaaS platforms, dashboards, tools" },
        { name: "API Integration", description: "Third-party services, payment gateways" },
        { name: "Performance Optimization", description: "Speed, SEO, mobile responsiveness" },
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
      priceRange: "From €700",
      timeline: "2-8 weeks",
      deliverables: "Full website, mobile-responsive design, admin panel, documentation",
      pattern: "angular"
    },
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "Brand Design & Visual Identity",
      description: "Create a memorable brand presence that resonates with your audience and stands out in the market.",
      detailedDescription: "We craft comprehensive visual identities that tell your brand story through strategic design, from logo creation to complete brand guidelines.",
      features: [
        { name: "Logo & Brand Identity", description: "Complete visual identity systems" },
        { name: "Motion Graphics", description: "Animated logos, social media content" },
        { name: "Video Production", description: "Promotional videos, explainer content" },
        { name: "Print & Digital Design", description: "Business cards, brochures, web graphics" },
        { name: "Brand Guidelines", description: "Comprehensive style guides" },
      ],
      technologies: ["Adobe Creative Suite", "Figma", "After Effects", "Cinema 4D"],
      priceRange: "From €200",
      timeline: "1-6 weeks",
      deliverables: "Brand identity package, style guide, source files, usage guidelines",
      pattern: "curved"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Digital Marketing & Growth",
      description: "Data-driven strategies that increase visibility, drive traffic, and convert visitors into customers.",
      detailedDescription: "We combine technical SEO expertise with creative marketing campaigns to deliver measurable growth for your business.",
      features: [
        { name: "SEO Optimization", description: "Technical & content SEO audits" },
        { name: "Social Media Strategy", description: "Content planning, community management" },
        { name: "PPC Advertising", description: "Google Ads, Facebook Ads optimization" },
        { name: "Analytics & Reporting", description: "Performance tracking, insights" },
        { name: "Conversion Optimization", description: "Landing pages, A/B testing" },
      ],
      technologies: ["Google Analytics", "SEMrush", "Google Ads", "Facebook Business"],
      priceRange: "From €300/month",
      timeline: "Ongoing",
      deliverables: "Monthly reports, strategy documents, campaign assets, performance dashboards",
      pattern: "geometric"
    }
  ];

  const getPatternElement = (pattern: string, index: number) => {
    switch (pattern) {
      case 'angular':
        return (
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/10 transform rotate-45 rounded-tl-lg"></div>
        );
      case 'curved':
        return (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/10 rounded-full"></div>
        );
      case 'geometric':
        return (
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent/10 clip-path-polygon-[0_0,100%_0,50%_100%]"></div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-1/4 w-2 h-2 bg-primary/5 rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-accent/5 rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-4 h-4 bg-primary/5 transform rotate-45"></div>
          <div className="absolute bottom-10 right-10 w-6 h-6 bg-accent/5 rounded-tl-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
            Our Expertise Areas
            <div className="absolute -top-3 -right-3 w-4 h-4 bg-accent rounded-full opacity-30"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions that combine technical expertise with creative excellence 
            to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white relative overflow-hidden h-full"
            >
              {getPatternElement(service.pattern, index)}
              
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl w-fit group-hover:scale-110 transition-transform duration-500 relative">
                  {service.icon}
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent/30 rounded-full"></div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.detailedDescription}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0 relative z-10 flex flex-col flex-grow">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    What We Deliver
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        <div className="font-medium text-gray-800">{feature.name}</div>
                        <div className="text-gray-600 text-xs mt-1">{feature.description}</div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <div className="border-t pt-4 space-y-3 bg-gradient-to-r from-gray-50/80 to-white/80 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500 block">Investment</span>
                        <span className="font-bold text-primary">{service.priceRange}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Timeline</span>
                        <span className="font-bold text-primary">{service.timeline}</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      <span className="text-gray-500 text-xs block mb-1">Includes:</span>
                      <span className="text-xs text-gray-700">{service.deliverables}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Transform Your Digital Presence?</h3>
            <p className="text-gray-600">Let's discuss how we can help you achieve your business goals</p>
          </div>
          <Button 
            onClick={() => document.getElementById('discovery-call')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 text-lg flex items-center gap-3 mx-auto relative overflow-hidden group shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="relative z-10 flex items-center gap-3">
              Schedule Free Consultation
              <ArrowRight size={20} />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
