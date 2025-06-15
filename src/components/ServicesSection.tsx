
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Palette, TrendingUp, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Development Solutions",
      description: "Custom websites, e-commerce platforms, and full-stack applications built with cutting-edge technology.",
      features: ["UI/UX Design", "Website Development", "E-Commerce Solutions", "Front-End & Back-End Development"],
      priceRange: "€700 - €2,200",
      timeline: "2-8 weeks",
      pattern: "angular"
    },
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "Creative Design Services",
      description: "Compelling visual identity, motion graphics, and video production that captures your brand essence.",
      features: ["Visual Identity & Branding", "Motion Design & Animation", "Video Production", "Publication Design"],
      priceRange: "€200 - €2,000+",
      timeline: "1-6 weeks",
      pattern: "curved"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Strategic Marketing & Growth",
      description: "Data-driven marketing campaigns and SEO strategies that deliver measurable business results.",
      features: ["SEO Optimization", "Social Media Management", "Advertising Campaigns", "Marketing Audits"],
      priceRange: "€300 - €1,500/month",
      timeline: "Ongoing",
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
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Logo-inspired background pattern */}
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
            Our Service Pillars
            <div className="absolute -top-3 -right-3 w-4 h-4 bg-accent rounded-full opacity-30"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Three comprehensive service pillars designed to transform your digital presence 
            and drive sustainable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
            >
              {getPatternElement(service.pattern, index)}
              
              {/* Subtle gradient overlay inspired by logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/2 to-accent/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 relative">
                  {service.icon}
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent/20 rounded-full"></div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0 relative z-10">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-4 space-y-2 bg-gradient-to-r from-gray-50/50 to-white/50 p-4 rounded-lg">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Investment:</span>
                    <span className="font-semibold text-primary">{service.priceRange}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Timeline:</span>
                    <span className="font-semibold text-primary">{service.timeline}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => document.getElementById('discovery-call')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 text-lg flex items-center gap-2 mx-auto relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="relative z-10 flex items-center gap-2">
              Discuss Your Project
              <ArrowRight size={20} />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
