
import { Button } from "@/components/ui/button";
import { CountryConfig } from "@/config/countries";
import { Calendar, Mail, Phone } from "lucide-react";

interface CountryCTAProps {
  country: CountryConfig;
  serviceType: 'web' | 'software' | 'startup';
}

const CountryCTA = ({ country, serviceType }: CountryCTAProps) => {
  const getServiceCTAs = () => {
    switch (serviceType) {
      case 'web':
        return {
          primary: 'Get Your Website Quote',
          secondary: 'Schedule Web Development Call',
          title: 'Ready to Transform Your Web Presence?',
          subtitle: `Join successful ${country.name} businesses who chose Bernof Co for their web development needs.`
        };
      case 'software':
        return {
          primary: 'Discuss Your Software Project',
          secondary: 'Get Technical Assessment',
          title: 'Ready to Build Your Software Solution?',
          subtitle: `Transform your business with custom software built specifically for the ${country.name} market.`
        };
      case 'startup':
        return {
          primary: 'Validate Your Startup Idea',
          secondary: 'Book Startup Strategy Call',
          title: 'Ready to Launch Your Startup?',
          subtitle: `Join successful ${country.name} entrepreneurs who chose Bernof Co to build their MVPs and scale their startups.`
        };
      default:
        return {
          primary: 'Get Started',
          secondary: 'Schedule Call',
          title: 'Ready to Get Started?',
          subtitle: 'Let\'s discuss your project.'
        };
    }
  };

  const ctas = getServiceCTAs();

  const handlePrimaryAction = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSecondaryAction = () => {
    window.open('https://calendly.com/bernof-co', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden" id="cta">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Country Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-6 py-2 mb-8">
            <span className="text-2xl">{country.flag}</span>
            <span className="text-white font-semibold">Serving {country.name}</span>
          </div>

          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              {ctas.title}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {ctas.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleSecondaryAction}
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {ctas.secondary}
              </Button>
              <Button 
                onClick={handlePrimaryAction}
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300"
              >
                {ctas.primary}
              </Button>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-white/80 mb-2">Speak directly with our team</p>
              <a href="tel:+442030000000" className="text-white hover:text-white/80 font-semibold">
                +44 20 3000 0000
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-white/80 mb-2">Get detailed response within 24h</p>
              <a href="mailto:info@bernofco.com" className="text-white hover:text-white/80 font-semibold">
                info@bernofco.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule Call</h3>
              <p className="text-white/80 mb-2">Free consultation</p>
              <span className="text-white font-semibold">
                Available GMT
              </span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <span>No upfront payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <span>Money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryCTA;
