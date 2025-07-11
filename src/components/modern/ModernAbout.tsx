
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Zap, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ModernAbout = () => {
  const values = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Quality First",
      description: "Every project is built to enterprise standards with clean code, comprehensive testing, and thorough documentation."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Partnership Approach", 
      description: "We work as an extension of your team, providing transparent communication and collaborative problem-solving."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Speed & Innovation",
      description: "Rapid development cycles using cutting-edge technologies to get your product to market faster."
    }
  ];

  const achievements = [
    "ISO 27001 security compliance",
    "99.9% uptime guarantee", 
    "GDPR & privacy compliant",
    "24/7 monitoring & support",
    "Agile development methodology",
    "Continuous integration & deployment"
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Why choose us
            </div>
            <h2 className="font-inter text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Built for the modern web
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              We combine technical excellence with business acumen to deliver solutions 
              that not only work flawlessly but drive real business results.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Left column - Values */}
            <div className="space-y-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column - Achievements */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Enterprise-grade standards
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Every project is delivered with the same attention to detail and quality 
                standards we use for Fortune 500 companies.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="bg-white rounded-3xl p-12 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600 text-sm">Projects delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
                <div className="text-gray-600 text-sm">Years experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600 text-sm">Client satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Support available</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Let's build something great together
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Ready to transform your ideas into reality? Get in touch and let's discuss 
              how we can help accelerate your business growth.
            </p>
            <Button 
              onClick={() => document.getElementById('discovery-call')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-white text-primary hover:bg-gray-50 font-medium px-10 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] group"
            >
              <span>Start your project</span>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;
