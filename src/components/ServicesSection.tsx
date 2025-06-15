
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
      timeline: "2-8 weeks"
    },
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "Creative Design Services",
      description: "Compelling visual identity, motion graphics, and video production that captures your brand essence.",
      features: ["Visual Identity & Branding", "Motion Design & Animation", "Video Production", "Publication Design"],
      priceRange: "€200 - €2,000+",
      timeline: "1-6 weeks"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Strategic Marketing & Growth",
      description: "Data-driven marketing campaigns and SEO strategies that deliver measurable business results.",
      features: ["SEO Optimization", "Social Media Management", "Advertising Campaigns", "Marketing Audits"],
      priceRange: "€300 - €1,500/month",
      timeline: "Ongoing"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Service Pillars
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
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-4 space-y-2">
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
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 text-lg flex items-center gap-2 mx-auto"
          >
            Discuss Your Project
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
