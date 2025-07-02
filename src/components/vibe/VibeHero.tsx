
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";

const VibeHero = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById('vibe-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white overflow-hidden pt-16 pb-12">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('/lovable-uploads/87978c55-5497-4099-bba4-4a5affd48d0b.png')`,
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-red-50 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-red-700">AI Development Crisis?</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
            When Your{" "}
            <span className="text-primary">AI-Built App</span>{" "}
            Hits a Wall, We Break Through
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            From Cursor crashes to Bubble breakdowns - get expert help to scale your 
            vibe-coded dreams into production-ready reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToConsultation}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-2xl text-lg group"
            >
              Get Emergency Help
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToConsultation}
              className="border-primary/30 text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-2xl text-lg font-medium"
            >
              Free Consultation
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>24/7 Emergency Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Production-Ready Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Expert AI Tool Knowledge</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibeHero;
