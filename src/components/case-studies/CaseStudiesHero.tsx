
import { ArrowRight, Award, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudiesHero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('case-studies-grid');
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
        
        {/* Geometric elements */}
        <div className="absolute top-1/3 left-10 w-8 h-8 bg-brand-teal/20 rotate-45 rounded-lg animate-pulse"></div>
        <div className="absolute bottom-1/3 right-16 w-12 h-12 border-2 border-brand-teal/20 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-brand-sage-light/50 rounded-full text-brand-teal-dark font-semibold text-sm">
              <Award className="w-4 h-4 mr-2" />
              100+ Successful Projects Delivered
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight font-inter">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-teal-light">
                Success Stories
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed font-inter max-w-3xl mx-auto">
              Discover how we've transformed ideas into successful digital products. 
              From startups to enterprise solutions, explore our portfolio of innovative 
              web applications, mobile apps, and digital platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-brand-teal to-brand-teal-light hover:from-brand-teal-dark hover:to-brand-teal text-white font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-inter"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300 font-inter"
              >
                Start Your Project
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-brand-teal font-inter">100+</div>
                <div className="text-gray-600 font-inter">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-brand-teal font-inter">15+</div>
                <div className="text-gray-600 font-inter">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-brand-teal font-inter">98%</div>
                <div className="text-gray-600 font-inter">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
