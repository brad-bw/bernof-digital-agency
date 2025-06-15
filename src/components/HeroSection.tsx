
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
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Logo-inspired geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 opacity-5">
          <div className="w-full h-full bg-primary transform rotate-45 rounded-tl-3xl"></div>
        </div>
        <div className="absolute bottom-20 left-10 w-24 h-24 opacity-5">
          <div className="w-full h-full bg-accent rounded-full"></div>
        </div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 opacity-5">
          <div className="w-full h-full bg-primary clip-path-polygon-[0_0,100%_0,50%_100%]"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Managing the
            <span className="text-primary block relative">
              Future
              {/* Logo-inspired decorative element */}
              <div className="absolute -right-8 top-2 w-6 h-6 bg-accent rounded-full opacity-20"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-inter">
            Transform your digital presence with comprehensive development solutions, 
            creative design services, and strategic marketing that drives measurable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToDiscoveryCall}
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 text-lg flex items-center gap-2 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              Book Discovery Call
              <ArrowRight size={20} />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-lg flex items-center gap-2 relative overflow-hidden group"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="relative z-10 flex items-center gap-2">
                <Play size={18} />
                View Our Services
              </div>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-fade-in relative">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-accent rounded-full opacity-30"></div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center animate-fade-in relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 transform rotate-45"></div>
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-gray-600 font-medium">Core Service Pillars</div>
            </div>
            <div className="text-center animate-fade-in relative">
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent/40 rounded-tl-full"></div>
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
