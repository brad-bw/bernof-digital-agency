
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Zap } from "lucide-react";

const ModernAbout = () => {
  const values = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Excellence",
      description: "Delivering exceptional results that exceed expectations and drive real business value."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Partnership", 
      description: "Building lasting relationships through transparent collaboration and shared success."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Innovation",
      description: "Cutting-edge solutions that keep you ahead of the competition in an evolving digital landscape."
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="font-inter text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Managing the Future, Today
                </h2>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  At Bernof Co, we combine strategic thinking with technical excellence to deliver 
                  digital solutions that transform businesses and drive sustainable growth.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Our Commitment</h3>
                <div className="space-y-4">
                  {[
                    "Industry best practices and coding standards",
                    "Cross-browser and device compatibility", 
                    "Performance optimization and security",
                    "Accessibility compliance (WCAG 2.1 AA)",
                    "Satisfaction guarantee on all projects"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Values cards */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                        <p className="text-gray-600 font-light leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;
