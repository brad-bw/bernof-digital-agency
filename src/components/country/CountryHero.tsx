
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
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

  const handleSecondaryAction = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Country Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-6 py-2 mb-8">
            <span className="text-2xl">{country.flag}</span>
            <span className="text-white font-semibold">Serving {country.name}</span>
          </div>

          {/* Main Headlines */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            {subtitle}
          </p>

          {/* Key Pain Point */}
          <div className="bg-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-3">Why Choose Us for {country.name}?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
              {country.marketContext.painPoints.slice(0, 2).map((point, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handlePrimaryAction}
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              {ctaPrimary}
            </Button>
            <Button 
              onClick={handleSecondaryAction}
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300"
            >
              {ctaSecondary}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              <span>Fixed-price projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              <span>Money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryHero;
