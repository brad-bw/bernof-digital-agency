
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
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Main geometric background using the uploaded image */}
      <div className="absolute inset-0 geometric-bg-primary opacity-60"></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>
      
      {/* Additional flowing geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 opacity-10 animate-geometric-float">
          <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-full"></div>
        </div>
        <div className="absolute bottom-20 left-10 w-32 h-32 opacity-10 animate-fluid-motion">
          <div className="w-full h-full bg-gradient-to-tr from-accent to-primary organic-shape"></div>
        </div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 opacity-15 animate-geometric-float" style={{ animationDelay: '5s' }}>
          <div className="w-full h-full bg-primary/20 curved-element"></div>
        </div>
        
        {/* Flowing curves background elements */}
        <div className="absolute top-0 left-0 w-full h-full flowing-curves"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-inter text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight relative">
            Managing the
            <span className="text-primary block relative">
              Future
              {/* Enhanced decorative elements with organic shapes */}
              <div className="absolute -right-12 top-4 w-8 h-8 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full animate-geometric-float"></div>
              <div className="absolute -left-8 -top-2 w-6 h-6 bg-accent/20 curved-element animate-fluid-motion" style={{ animationDelay: '3s' }}></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-inter relative">
            Transform your digital presence with comprehensive development solutions, 
            creative design services, and strategic marketing that drives measurable growth.
            {/* Subtle geometric accent */}
            <div className="absolute -bottom-4 right-1/4 w-16 h-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full"></div>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToDiscoveryCall}
              className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl text-lg flex items-center gap-2 relative overflow-hidden group font-inter"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="relative z-10 flex items-center gap-2">
                Book Discovery Call
                <ArrowRight size={20} />
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-primary/30 text-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary/90 hover:text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-500 text-lg flex items-center gap-2 relative overflow-hidden group backdrop-blur-sm font-inter"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
              <div className="relative z-10 flex items-center gap-2">
                <Play size={18} />
                View Our Services
              </div>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-fade-in relative group">
              <div className="absolute -top-4 -left-4 w-6 h-6 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-geometric-float"></div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 font-inter">50+</div>
              <div className="text-gray-600 font-medium font-inter">Projects Delivered</div>
            </div>
            <div className="text-center animate-fade-in relative group" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -top-3 -right-3 w-5 h-5 bg-gradient-to-tr from-primary/20 to-accent/20 curved-element opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-fluid-motion"></div>
              <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2 font-inter">3</div>
              <div className="text-gray-600 font-medium font-inter">Core Service Pillars</div>
            </div>
            <div className="text-center animate-fade-in relative group" style={{ animationDelay: '0.4s' }}>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-bl from-accent/20 to-primary/20 organic-shape opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-geometric-float"></div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 font-inter">100%</div>
              <div className="text-gray-600 font-medium font-inter">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
