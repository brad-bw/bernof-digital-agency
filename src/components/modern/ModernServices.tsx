
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModernServices = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Web Development",
      subtitle: "Full-stack solutions",
      description: "Custom web applications built for performance, scalability, and user experience. From MVP to enterprise-scale platforms.",
      features: [
        "React & Next.js applications",
        "API development & integration", 
        "Database design & optimization",
        "Cloud deployment & DevOps"
      ],
      pricing: "From €2,000",
      timeline: "2-12 weeks"
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Brand & Design",
      subtitle: "Visual identity systems", 
      description: "Comprehensive brand development and UI/UX design that tells your story and converts visitors into customers.",
      features: [
        "Brand identity & logo design",
        "UI/UX design & prototyping",
        "Design systems & guidelines",
        "Motion graphics & video"
      ],
      pricing: "From €800",
      timeline: "1-6 weeks"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Digital Marketing",
      subtitle: "Growth-driven strategies",
      description: "Data-driven marketing campaigns that increase visibility, drive qualified traffic, and convert leads into revenue.",
      features: [
        "SEO & content strategy",
        "PPC advertising management",
        "Social media marketing",
        "Analytics & conversion optimization"
      ],
      pricing: "From €500/month",
      timeline: "Ongoing"
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our services
            </div>
            <h2 className="font-inter text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Everything you need
              <br />
              to scale your business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              From initial concept to market launch, we provide comprehensive digital solutions 
              that help ambitious companies achieve their growth objectives.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group bg-white hover:bg-gray-50/50 rounded-2xl">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="mb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-primary font-medium text-sm mb-4">{service.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex justify-between items-center text-sm mb-4">
                      <div>
                        <span className="text-gray-500">Starting at</span>
                        <div className="font-bold text-gray-900">{service.pricing}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Timeline</span>
                        <div className="font-bold text-gray-900">{service.timeline}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA section */}
          <div className="text-center bg-gray-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to start your project?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a free consultation to discuss your requirements and get a custom proposal 
              tailored to your specific needs and budget.
            </p>
            <Button 
              onClick={() => document.getElementById('discovery-call')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-10 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] group"
            >
              <span>Book free consultation</span>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernServices;
