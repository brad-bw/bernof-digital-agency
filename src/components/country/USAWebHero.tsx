
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Globe, Zap, Shield, TrendingDown } from "lucide-react";

export const USAWebHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-brand-teal/20 rotate-45 rounded-lg animate-float" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-[24px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-satoshi font-bold text-gray-900 leading-tight">
                  Web development
                  <span className="block text-brand-teal">that competes</span>
                </h1>

                {/* Trust Badge - moved below title */}
                <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm font-satoshi">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Trusted by 200+ US businesses</span>
                </div>
                
                <p className="text-xl lg:text-2xl text-gray-600 font-satoshi leading-relaxed max-w-2xl">
                  Compete in America's demanding digital marketplace with cutting-edge websites and e-commerce solutions that deliver results while optimizing your development budget.
                </p>
              </div>

              {/* Modern Cost Comparison */}
              <div className="relative bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 space-y-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <h3 className="text-lg font-satoshi font-medium text-slate-800">Market reality</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  {/* US Agencies */}
                  <div className="flex items-center justify-between p-4 bg-red-50/50 rounded-2xl border border-red-100/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full opacity-60"></div>
                      <span className="text-sm font-satoshi text-slate-600">US agencies</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-satoshi font-semibold text-slate-800">$15k–$40k</div>
                      <div className="text-xs font-satoshi text-red-600">Silicon Valley premium</div>
                    </div>
                  </div>

                  {/* Bernof Co */}
                  <div className="flex items-center justify-between p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                      <span className="text-sm font-satoshi text-slate-600">Our approach</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-satoshi font-semibold text-slate-800">$6k–$16k</div>
                      <div className="text-xs font-satoshi text-emerald-600">same quality</div>
                    </div>
                  </div>
                </div>

                {/* Savings Indicator */}
                <div className="flex items-center justify-center pt-4 border-t border-slate-200/50">
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-2 rounded-full border border-emerald-200/50">
                    <TrendingDown className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-satoshi font-medium text-emerald-700">60% cost reduction</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-brand-teal hover:bg-brand-teal-dark text-white font-satoshi font-semibold px-8 py-4 rounded-xl text-lg group" 
                  onClick={() => window.open("https://calendly.com/bernof-co", "_blank")}
                >
                  Get Your Website Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-satoshi font-semibold px-8 py-4 rounded-xl text-lg" 
                  onClick={() => window.open("https://calendly.com/bernof-co", "_blank")}
                >
                  Schedule Free Consultation
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-brand-teal" />
                  <span className="text-sm text-gray-600 font-satoshi">East Coast overlap</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-brand-teal" />
                  <span className="text-sm text-gray-600 font-satoshi">48h project start</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-brand-teal" />
                  <span className="text-sm text-gray-600 font-satoshi">Enterprise security</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Browser Mock */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-4 bg-white rounded-md px-3 py-1 text-xs text-gray-500 font-satoshi">
                      yoursite.com
                    </div>
                  </div>
                </div>
                
                {/* Website Preview */}
                <div className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="h-4 bg-brand-teal rounded-lg w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded-lg w-full"></div>
                    <div className="h-3 bg-gray-200 rounded-lg w-5/6"></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-brand-sage-light/30 rounded-lg p-4 h-20"></div>
                    <div className="bg-brand-sage-light/30 rounded-lg p-4 h-20"></div>
                    <div className="bg-brand-sage-light/30 rounded-lg p-4 h-20"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded-lg w-full"></div>
                    <div className="h-3 bg-gray-200 rounded-lg w-4/5"></div>
                    <div className="h-3 bg-gray-200 rounded-lg w-3/4"></div>
                  </div>
                  
                  <div className="bg-brand-teal rounded-lg h-12 w-40"></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg border border-gray-200 p-4 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-satoshi font-medium text-gray-700">Live & Secure</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg border border-gray-200 p-4 animate-float delay-1000">
                <div className="text-sm font-satoshi font-medium text-gray-700">⚡ 2s load time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
