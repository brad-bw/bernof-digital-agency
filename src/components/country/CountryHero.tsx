
import { Code, Zap, Rocket } from "lucide-react";
import { CountryConfig } from "@/config/countries";
import { CountryHeroHeader } from "./CountryHeroHeader";
import { CountryHeroPainPoints } from "./CountryHeroPainPoints";
import { CountryHeroCostComparison } from "./CountryHeroCostComparison";
import { CountryHeroActions } from "./CountryHeroActions";

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

  const handleSecondaryAction = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getServiceStats = () => {
    switch (service) {
      case 'web':
        return {
          localCost: country.marketContext.heroStats.localCost,
          bernofCost: country.marketContext.heroStats.bernofCost,
          savings: country.marketContext.heroStats.savings,
          icon: Code,
          iconBg: 'bg-primary'
        };
      case 'software':
        return {
          localCost: `${country.currencySymbol}${(country.pricing.software.localMin / 1000).toFixed(0)}k-${(country.pricing.software.localMax / 1000).toFixed(0)}k`,
          bernofCost: `${country.currencySymbol}${(country.pricing.software.min / 1000).toFixed(0)}k-${(country.pricing.software.max / 1000).toFixed(0)}k`,
          savings: '60% less',
          icon: Zap,
          iconBg: 'bg-accent'
        };
      case 'startup':
        return {
          localCost: `${country.currencySymbol}${(country.pricing.startup.localMin / 1000).toFixed(0)}k-${(country.pricing.startup.localMax / 1000).toFixed(0)}k`,
          bernofCost: `${country.currencySymbol}${(country.pricing.startup.min / 1000).toFixed(0)}k-${(country.pricing.startup.max / 1000).toFixed(0)}k`,
          savings: '60% less',
          icon: Rocket,
          iconBg: 'bg-accent'
        };
      default:
        return {
          localCost: country.marketContext.heroStats.localCost,
          bernofCost: country.marketContext.heroStats.bernofCost,
          savings: country.marketContext.heroStats.savings,
          icon: Code,
          iconBg: 'bg-primary'
        };
    }
  };

  const stats = getServiceStats();

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rotate-45 rounded-lg"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-40 h-2 bg-gradient-to-r from-white/30 to-transparent"></div>
        <div className="absolute top-60 right-20 w-16 h-16 border border-white/30 rounded-full"></div>
        
        {/* Floating elements */}
        <div className="absolute top-80 left-1/4 w-6 h-6 bg-white/20 rotate-45"></div>
        <div className="absolute bottom-60 right-1/3 w-8 h-8 border border-white/20 rounded-full"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-40 w-72 h-72 bg-white/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid - Reduced spacing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
            {/* Left Column - Problem Statement */}
            <div className="space-y-6">
              <CountryHeroHeader
                countryFlag={country.flag}
                countryName={country.name}
                title={title}
                subtitle={subtitle}
                ctaPrimary={ctaPrimary}
                onPrimaryAction={handlePrimaryAction}
              />

              <CountryHeroPainPoints
                countryName={country.name}
                painPoints={country.marketContext.painPoints}
              />
            </div>

            {/* Right Column - Cost Comparison */}
            <CountryHeroCostComparison
              localCost={stats.localCost}
              bernofCost={stats.bernofCost}
              iconBg={stats.iconBg}
              IconComponent={stats.icon}
            />
          </div>

          {/* Secondary CTA Section */}
          <CountryHeroActions
            ctaSecondary={ctaSecondary}
            onSecondaryAction={handleSecondaryAction}
          />
        </div>
      </div>
    </section>
  );
};

export default CountryHero;
