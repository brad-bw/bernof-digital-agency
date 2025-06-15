
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const scrollToDiscoveryCall = () => {
    const element = document.getElementById('discovery-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Managing the
            <span className="text-primary block">Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-inter">
            Transform your digital presence with comprehensive development solutions, 
            creative design services, and strategic marketing that drives measurable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToDiscoveryCall}
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 text-lg flex items-center gap-2"
            >
              Book Discovery Call
              <ArrowRight size={20} />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-lg flex items-center gap-2"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play size={18} />
              View Our Services
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-gray-600 font-medium">Core Service Pillars</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
