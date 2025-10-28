
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Code, Palette, TrendingUp } from "lucide-react";

const ModernHero = () => {
  const scrollToDiscoveryCall = () => {
    const element = document.getElementById('discovery-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Main hero content */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Now available for new projects
            </div>
            
            <h1 className="font-inter text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-8">
              Build the future.
              <br />
              <span className="text-primary">Ship today.</span>
            </h1>
            
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light mb-8">
                We transform ambitious ideas into production-ready digital solutions. 
                From concept to launch, we handle the complexity so you can focus on growth.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Enterprise-grade development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Modern tech stack</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Scalable architecture</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                onClick={scrollToDiscoveryCall}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-10 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                <span>Get started</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-10 py-4 rounded-xl text-lg"
              >
                View our work
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-6">Trusted by startups and enterprises</p>
              <div className="grid grid-cols-3 gap-12 max-w-md mx-auto text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-500">Projects shipped</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-500">On-time delivery</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-500">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Service preview cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50/50 border border-gray-200/50 rounded-2xl p-8 hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Full-stack web applications, APIs, and custom software solutions built with modern frameworks.
              </p>
            </div>
            
            <div className="bg-gray-50/50 border border-gray-200/50 rounded-2xl p-8 hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Brand identity, UI/UX design, and visual systems that connect with your audience.
              </p>
            </div>
            
            <div className="bg-gray-50/50 border border-gray-200/50 rounded-2xl p-8 hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Digital marketing strategies, SEO optimization, and performance analytics that drive results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
