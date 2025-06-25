
import { Button } from "@/components/ui/button";
import { CountryConfig } from "@/config/countries";
import { Calendar, Mail, Phone, ArrowRight, CheckCircle, Clock, Users, TrendingDown, Shield } from "lucide-react";

interface CountryCTAProps {
  country: CountryConfig;
  serviceType: 'web' | 'software' | 'startup';
}

const CountryCTA = ({ country, serviceType }: CountryCTAProps) => {
  const getServiceContent = () => {
    switch (serviceType) {
      case 'web':
        return {
          title: `Ready to Save 60% on Your ${country.name} Web Development?`,
          subtitle: `Join successful ${country.name} businesses who chose Bernof Co over expensive local agencies`,
          primaryCta: 'Get Your Web Development Quote',
          secondaryCta: 'Schedule Free Consultation',
          benefits: [
            'Professional website delivered in 4-6 weeks',
            '60% cost savings vs local agencies',
            'GDPR compliant & mobile-optimized',
            'Free consultation & project planning'
          ]
        };
      case 'software':
        return {
          title: `Stop Overpaying for Software Development in ${country.name}`,
          subtitle: `Get enterprise-grade software at 60% less cost than local development teams`,
          primaryCta: 'Discuss Your Software Project',
          secondaryCta: 'Get Technical Assessment',
          benefits: [
            'Senior developers at 60% lower cost',
            'Scalable architecture & modern tech stack',
            'No recruitment delays or employment costs',
            'European standards & compliance included'
          ]
        };
      case 'startup':
        return {
          title: `Launch Your ${country.name} Startup Without Burning Your Budget`,
          subtitle: `Build your MVP for 60% less and extend your runway by 8+ months`,
          primaryCta: 'Validate Your Startup Idea',
          secondaryCta: 'Book Strategy Session',
          benefits: [
            'MVP ready in 8-12 weeks, not 6+ months',
            '60% cost savings = 8+ months extra runway',
            'Investor-ready documentation included',
            'Technical co-founder expertise without equity'
          ]
        };
      default:
        return {
          title: 'Ready to Get Started?',
          subtitle: 'Let\'s discuss your project',
          primaryCta: 'Get Started',
          secondaryCta: 'Schedule Call',
          benefits: []
        };
    }
  };

  const content = getServiceContent();

  const handlePrimaryAction = () => {
    window.open('https://calendly.com/bernof-co', '_blank');
  };

  const handleSecondaryAction = () => {
    if (serviceType === 'software') {
      // For software services, "Get Technical Assessment" should also book a call
      window.open('https://calendly.com/bernof-co', '_blank');
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white relative overflow-hidden" id="cta">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric patterns */}
        <div className="absolute top-10 left-10 w-40 h-40 border border-white/10 rotate-12 rounded-lg"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-2 bg-gradient-to-r from-white/20 to-transparent rotate-45"></div>
        
        {/* Additional geometric elements */}
        <div className="absolute top-32 right-1/4 w-20 h-20 border-2 border-white/15 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-12 h-12 bg-white/10 rotate-45"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Section */}
          <div className="text-center mb-16">
            {/* Country Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-white/20">
              <span className="text-3xl">{country.flag}</span>
              <span className="text-white font-semibold text-lg">Serving {country.name}</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {content.title}
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              {content.subtitle}
            </p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-green-400"></div>
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                onClick={handlePrimaryAction}
                className="bg-accent hover:bg-accent/90 text-white font-bold px-10 py-5 rounded-2xl text-xl h-auto transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Calendar className="w-6 h-6 mr-3" />
                {content.primaryCta}
              </Button>
              <Button 
                onClick={handleSecondaryAction}
                variant="outline"
                className="border-2 border-white/30 text-white bg-transparent hover:bg-white hover:text-primary font-bold px-10 py-5 rounded-2xl text-xl h-auto transition-all duration-300"
              >
                {content.secondaryCta}
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 border border-white/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-white/10 rounded-bl-3xl"></div>
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Direct Call</h3>
              <p className="text-white/80 mb-4">Speak with our team immediately</p>
              <a 
                href="tel:+442030000000" 
                className="text-accent hover:text-accent/80 font-bold text-lg transition-colors"
              >
                +44 20 3000 0000
              </a>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 border border-white/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-accent/10 rounded-bl-3xl"></div>
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email Us</h3>
              <p className="text-white/80 mb-4">Detailed response within 1 business day</p>
              <a 
                href="mailto:info@bernofco.com" 
                className="text-accent hover:text-accent/80 font-bold text-lg transition-colors"
              >
                info@bernofco.com
              </a>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 border border-white/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-green-400/10 rounded-bl-3xl"></div>
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Book Meeting</h3>
              <p className="text-white/80 mb-4">Free 30-minute consultation</p>
              <button 
                onClick={handlePrimaryAction}
                className="text-accent hover:text-accent/80 font-bold text-lg transition-colors"
              >
                Available Now
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-primary to-green-400"></div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Why {country.name} Businesses Choose Bernof Co</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
                <TrendingDown className="w-8 h-8 mx-auto mb-3 text-accent" />
                <div className="text-4xl font-bold text-white mb-2">60%</div>
                <div className="text-white/80 font-medium">Cost Savings</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-4xl font-bold text-white mb-2">48h</div>
                <div className="text-white/80 font-medium">Project Start</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-green-400"></div>
                <Users className="w-8 h-8 mx-auto mb-3 text-green-400" />
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-white/80 font-medium">Expert Developers</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-400"></div>
                <Shield className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 font-medium">Money-Back Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryCTA;
