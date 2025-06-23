
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, TrendingDown } from "lucide-react";
import { CountryConfig } from "@/config/countries";

interface CountryHeroProps {
  country: CountryConfig;
  service: 'web' | 'software' | 'startup';
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

const CountryHero = ({ country, service, title, subtitle, ctaPrimary, ctaSecondary }: CountryHeroProps) => {
  const handlePrimaryAction = () => {
    window.open('https://calendly.com/bernof-co', '_blank');
  };

  const getServiceStats = () => {
    switch (service) {
      case 'web':
        return {
          localCost: country.marketContext.heroStats.localCost,
          bernofCost: country.marketContext.heroStats.bernofCost,
          savings: country.marketContext.heroStats.savings
        };
      case 'software':
        return {
          localCost: `${country.currencySymbol}${(country.pricing.software.localMin / 1000).toFixed(0)}k-${(country.pricing.software.localMax / 1000).toFixed(0)}k`,
          bernofCost: `${country.currencySymbol}${(country.pricing.software.min / 1000).toFixed(0)}k-${(country.pricing.software.max / 1000).toFixed(0)}k`,
          savings: '60% less'
        };
      case 'startup':
        return {
          localCost: `${country.currencySymbol}${(country.pricing.startup.localMin / 1000).toFixed(0)}k-${(country.pricing.startup.localMax / 1000).toFixed(0)}k`,
          bernofCost: `${country.currencySymbol}${(country.pricing.startup.min / 1000).toFixed(0)}k-${(country.pricing.startup.max / 1000).toFixed(0)}k`,
          savings: '60% less'
        };
      default:
        return {
          localCost: country.marketContext.heroStats.localCost,
          bernofCost: country.marketContext.heroStats.bernofCost,
          savings: country.marketContext.heroStats.savings
        };
    }
  };

  const stats = getServiceStats();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rotate-45 rounded-lg"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent/10 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-40 h-2 bg-gradient-to-r from-primary/30 to-transparent"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-40 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Country Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 border border-white/20">
              <span className="text-3xl">{country.flag}</span>
              <span className="text-white font-semibold text-lg">Serving {country.name}</span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Problem Statement */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-red-400">{country.name} Businesses</span>
                  <br />
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Are Overpaying
                  </span>
                </h1>
                
                <div className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  <p className="mb-4">{subtitle}</p>
                  <p className="text-accent font-semibold">
                    Here's how Bernof Co solves this →
                  </p>
                </div>
              </div>

              {/* Key Pain Points */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-300 mb-4">The Reality in {country.name}:</h3>
                {country.marketContext.painPoints.slice(0, 2).map((point, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-red-900/20 rounded-xl border border-red-800/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-red-400"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* Primary CTA only */}
              <div className="pt-4">
                <Button 
                  onClick={handlePrimaryAction}
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-5 rounded-xl text-xl h-auto transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  {ctaPrimary}
                </Button>
              </div>
            </div>

            {/* Right Column - Cost Comparison */}
            <div className="space-y-8">
              {/* Cost Comparison Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
                {/* Abstract design elements */}
                <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-primary/20 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-tr-3xl"></div>
                
                <div className="text-center mb-8 relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center">
                    <TrendingDown className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Cost Comparison</h2>
                  <p className="text-gray-300">See how much you can save</p>
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Local Cost */}
                  <div className="bg-red-900/30 rounded-xl p-6 border border-red-800/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/10 rounded-bl-xl"></div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 mb-1">Local {country.name} Agencies</p>
                        <p className="text-3xl font-bold text-red-400">{stats.localCost}</p>
                      </div>
                      <TrendingDown className="w-8 h-8 text-red-400" />
                    </div>
                  </div>

                  {/* VS Divider */}
                  <div className="text-center relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/20"></div>
                    </div>
                    <span className="bg-gray-900 px-4 text-white font-bold text-xl">VS</span>
                  </div>

                  {/* Bernof Cost */}
                  <div className="bg-green-900/30 rounded-xl p-6 border border-green-800/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/10 rounded-bl-xl"></div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 mb-1">Bernof Co</p>
                        <p className="text-3xl font-bold text-green-400">{stats.bernofCost}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-bold text-lg">{stats.savings}</p>
                        <p className="text-gray-300 text-sm">savings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
                  <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold text-white">48h</p>
                  <p className="text-xs text-gray-400">Project Start</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent"></div>
                  <Users className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-2xl font-bold text-white">50+</p>
                  <p className="text-xs text-gray-400">Expert Devs</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-transparent"></div>
                  <TrendingDown className="w-6 h-6 mx-auto mb-2 text-green-400" />
                  <p className="text-2xl font-bold text-white">60%</p>
                  <p className="text-xs text-gray-400">Cost Savings</p>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary CTA Section */}
          <div className="mt-20 pt-8 border-t border-white/20">
            <div className="text-center mb-8">
              <Button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                variant="outline"
                className="border-2 border-white/30 text-white bg-transparent hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-xl text-lg h-auto transition-all duration-300"
              >
                {ctaSecondary}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="font-medium">Free consultation & quote</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="font-medium">No upfront payment required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="font-medium">100% money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryHero;
