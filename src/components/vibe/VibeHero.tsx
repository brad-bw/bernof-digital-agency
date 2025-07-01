
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
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium text-red-300">AI Development Crisis?</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              When Your{" "}
              <span className="text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text">
                AI-Built App
              </span>{" "}
              Hits a Wall, We Break Through
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              From Cursor crashes to Bubble breakdowns - get expert help to scale your 
              vibe-coded dreams into production-ready reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToConsultation}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-2xl text-lg group"
              >
                Get Emergency Help
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToConsultation}
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-2xl text-lg font-medium"
              >
                Free Consultation
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>24/7 Emergency Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Production-Ready Solutions</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-500/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30">
                <div className="text-red-400 mb-2">Before</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-red-300">
                    <AlertTriangle className="w-3 h-3" />
                    <span>Cursor crashes</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-300">
                    <AlertTriangle className="w-3 h-3" />
                    <span>Scaling issues</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-300">
                    <AlertTriangle className="w-3 h-3" />
                    <span>Security gaps</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-300">
                    <AlertTriangle className="w-3 h-3" />
                    <span>CSS inconsistencies</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-500/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
                <div className="text-green-400 mb-2">After</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-green-300">
                    <CheckCircle className="w-3 h-3" />
                    <span>Stable production</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-300">
                    <CheckCircle className="w-3 h-3" />
                    <span>Scalable architecture</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-300">
                    <CheckCircle className="w-3 h-3" />
                    <span>Security hardened</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-300">
                    <CheckCircle className="w-3 h-3" />
                    <span>Clean, maintainable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibeHero;
