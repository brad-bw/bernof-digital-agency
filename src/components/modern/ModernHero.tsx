
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const ModernHero = () => {
  const scrollToDiscoveryCall = () => {
    const element = document.getElementById('discovery-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-white">
      {/* Minimal background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Modern typography-focused hero */}
          <div className="space-y-8 mb-16">
            <div className="space-y-4">
              <h1 className="font-inter text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 leading-[0.9] tracking-tight">
                Managing
                <br />
                <span className="text-primary relative">
                  the Future
                  <div className="absolute -right-8 top-1/2 w-3 h-3 bg-accent rounded-full"></div>
                </span>
              </h1>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                Comprehensive digital solutions that transform businesses through strategic development, 
                creative design, and growth-driven marketing.
              </p>
            </div>
          </div>

          {/* Modern CTA section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button 
              onClick={scrollToDiscoveryCall}
              className="bg-primary hover:bg-primary/90 text-white font-medium px-12 py-6 rounded-none text-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
            >
              <span className="relative z-10">Book Discovery Call</span>
              <ArrowRight className="w-5 h-5 ml-3 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-primary/20 text-primary hover:bg-primary hover:text-white font-medium px-12 py-6 rounded-none text-lg transition-all duration-300 hover:scale-[1.02]"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="w-5 h-5 mr-3" />
              View Services
            </Button>
          </div>

          {/* Modern stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-gray-200">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary font-inter">50+</div>
              <div className="text-gray-600 font-light tracking-wide">Projects Delivered</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary font-inter">3</div>
              <div className="text-gray-600 font-light tracking-wide">Core Service Pillars</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary font-inter">100%</div>
              <div className="text-gray-600 font-light tracking-wide">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
