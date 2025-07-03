
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Rocket, Users, PoundSterling, Clock, TrendingUp } from "lucide-react";

const UKStartupHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-brand-sage-light via-white to-brand-sage-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-brand-teal-dark/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* UK Flag accent */}
        <div className="absolute top-20 right-20 w-16 h-16 opacity-10">
          <div className="text-4xl">🇬🇧</div>
        </div>
        
        {/* Geometric elements with brand theme */}
        <div className="absolute top-1/3 left-10 w-8 h-8 bg-brand-teal/20 rotate-45 rounded-lg animate-pulse"></div>
        <div className="absolute bottom-1/3 right-16 w-12 h-12 border-2 border-brand-teal/20 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-brand-sage-light/50 rounded-full text-brand-teal-dark font-semibold text-sm">
                  <span className="text-xl mr-2">🇬🇧</span>
                  UK Startup Development Experts
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight font-inter">
                  Launch Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-teal-light">
                    UK Startup
                  </span>{" "}
                  Successfully
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed font-inter">
                  Join the UK's thriving startup ecosystem. From concept to launch - we handle the tech 
                  so you can focus on conquering the British market and scaling globally. 
                  Save 60% compared to London agencies.
                </p>
              </div>

              {/* UK Market Stats */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-brand-sage/30">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 font-inter">Why Choose UK for Your Startup?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <PoundSterling className="w-5 h-5 text-brand-teal" />
                    <span className="text-sm text-gray-700 font-inter">£2.3B VC Investment (2024)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-brand-teal" />
                    <span className="text-sm text-gray-700 font-inter">Europe's Fintech Capital</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-brand-teal" />
                    <span className="text-sm text-gray-700 font-inter">48hrs Company Setup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-brand-teal" />
                    <span className="text-sm text-gray-700 font-inter">Global Market Access</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('startup-pricing')}
                  className="bg-gradient-to-r from-brand-teal to-brand-teal-light hover:from-brand-teal-dark hover:to-brand-teal text-white font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-inter"
                >
                  Get Your UK MVP Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('startup-process')}
                  className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300 font-inter"
                >
                  How It Works
                </Button>
              </div>

              {/* UK-specific Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-teal font-inter">2-4</div>
                  <div className="text-sm text-gray-600 font-inter">Weeks to UK MVP</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-teal font-inter">60%</div>
                  <div className="text-sm text-gray-600 font-inter">vs London Costs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-teal font-inter">50+</div>
                  <div className="text-sm text-gray-600 font-inter">UK Startups Launched</div>
                </div>
              </div>
            </div>

            {/* Right Content - Enhanced Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-brand-sage/30 relative overflow-hidden">
                {/* UK-themed background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-sage-light/30 to-transparent rounded-full -translate-y-8 translate-x-8"></div>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-semibold text-gray-900 font-inter">Your UK Startup Journey</h3>
                      <span className="text-2xl">🇬🇧</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-brand-teal rounded-full animate-pulse"></div>
                      <span className="text-sm text-brand-teal font-medium font-inter">Live</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-brand-sage-light/30 to-brand-sage-light/10 rounded-xl border border-brand-sage/20">
                      <div className="w-10 h-10 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-sm font-bold font-inter">1</span>
                      </div>
                      <div>
                        <span className="text-gray-900 font-medium font-inter">UK Market Analysis & Validation</span>
                        <div className="text-sm text-gray-600 font-inter">Competitive landscape + regulations</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-brand-sage-light/30 to-brand-sage-light/10 rounded-xl border border-brand-sage/20">
                      <div className="w-10 h-10 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-sm font-bold font-inter">2</span>
                      </div>
                      <div>
                        <span className="text-gray-900 font-medium font-inter">GDPR-Compliant MVP Development</span>
                        <div className="text-sm text-gray-600 font-inter">Built for UK/EU regulations</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-brand-sage-light/30 to-brand-sage-light/10 rounded-xl border border-brand-sage/20">
                      <div className="w-10 h-10 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-sm font-bold font-inter">3</span>
                      </div>
                      <div>
                        <span className="text-gray-900 font-medium font-inter">UK User Testing & Feedback</span>
                        <div className="text-sm text-gray-600 font-inter">British user preferences focus</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-brand-sage-light/30 to-brand-sage-light/10 rounded-xl border border-brand-sage/20">
                      <div className="w-10 h-10 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-sm font-bold font-inter">4</span>
                      </div>
                      <div>
                        <span className="text-gray-900 font-medium font-inter">Launch & Scale Globally</span>
                        <div className="text-sm text-gray-600 font-inter">UK base, worldwide reach</div>
                      </div>
                    </div>
                  </div>

                  {/* UK Success Indicator */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-xl text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm opacity-90 font-inter">Success Rate in UK Market</div>
                        <div className="text-2xl font-bold font-inter">94%</div>
                      </div>
                      <TrendingUp className="w-8 h-8 opacity-80" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Icons with UK theme */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center animate-float shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-brand-teal-light to-brand-teal rounded-full flex items-center justify-center animate-float delay-1000 shadow-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UKStartupHero;
