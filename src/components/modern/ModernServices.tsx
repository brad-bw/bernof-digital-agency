
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModernServices = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Development",
      subtitle: "Web & Tech Solutions",
      description: "Modern web applications built with cutting-edge technologies for optimal performance and user experience.",
      features: ["Custom Web Development", "E-Commerce Platforms", "API Integration", "Performance Optimization"]
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Design",
      subtitle: "Brand & Visual Identity", 
      description: "Comprehensive visual identities that tell your brand story through strategic design and creative excellence.",
      features: ["Brand Identity Design", "Motion Graphics", "Video Production", "Print & Digital Assets"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Growth",
      subtitle: "Digital Marketing",
      description: "Data-driven strategies that increase visibility, drive traffic, and convert visitors into loyal customers.",
      features: ["SEO Optimization", "Social Media Strategy", "PPC Advertising", "Analytics & Reporting"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Modern section header */}
          <div className="text-center mb-20">
            <h2 className="font-inter text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Three core pillars that drive digital transformation and sustainable business growth.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group bg-gray-50/50 hover:bg-white">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="mb-4 p-3 bg-white rounded-lg w-fit shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      {service.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-primary font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 font-light leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA section */}
          <div className="text-center">
            <Button 
              onClick={() => document.getElementById('discovery-call')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-white font-medium px-12 py-6 rounded-none text-lg transition-all duration-300 hover:scale-[1.02] group"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernServices;
