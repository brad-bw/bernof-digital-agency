
import { CountryConfig } from "@/config/countries";
import { AlertTriangle, TrendingUp, BarChart3, Clock, DollarSign, Users } from "lucide-react";

interface CountryPainPointsProps {
  country: CountryConfig;
  serviceType: 'web' | 'software' | 'startup';
}

const CountryPainPoints = ({ country, serviceType }: CountryPainPointsProps) => {
  const getServiceContent = () => {
    switch (serviceType) {
      case 'web':
        return {
          title: `The Hidden Reality of Web Development in ${country.name}`,
          subtitle: 'Market research reveals the true cost of local agencies vs. European alternatives',
          solutions: [
            'Custom web development with 60% cost savings vs local agencies',
            'Enterprise-grade websites using React, Vue.js, and modern frameworks',
            'Complete GDPR compliance and European data protection standards',
            'Mobile-first design with sub-2 second loading times',
            'Multi-language support and local payment gateway integration',
            'SEO optimization for local market visibility and growth'
          ]
        };
      case 'software':
        return {
          title: `${country.name} Enterprises Are Bleeding Money on Software Development`,
          subtitle: 'Industry analysis shows massive overspending on development talent and projects',
          solutions: [
            'Senior development teams at 60% lower cost than local hiring',
            'Immediate access to AI, cloud, and microservices expertise',
            'Enterprise-grade architecture with scalability built-in',
            'Full-stack development from front-end to database design',
            'DevOps and CI/CD implementation for faster deployment',
            'Technical leadership and architecture consulting included'
          ]
        };
      case 'startup':
        return {
          title: `${country.name} Startups Are Burning Through Funding on Overpriced MVPs`,
          subtitle: 'Startup ecosystem data reveals massive waste in development spending',
          solutions: [
            'MVP development for 60% less than local agencies',
            'Rapid 8-12 week development cycles to reach market faster',
            'Investor-ready technical documentation and architecture',
            'Scalable foundation that grows with your funding rounds',
            'Technical co-founder expertise without equity dilution',
            'Growth and user acquisition strategy included'
          ]
        };
      default:
        return {
          title: `Digital Development Challenges in ${country.name}`,
          subtitle: 'Understanding the market dynamics',
          solutions: []
        };
    }
  };

  const content = getServiceContent();

  return (
    <section className="py-24 bg-gradient-to-b from-brand-sage-light/20 via-white to-brand-sage-light/10 relative overflow-hidden">
      {/* Background Elements matching hero design */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-brand-teal-dark/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Geometric elements */}
        <div className="absolute top-1/3 left-10 w-8 h-8 bg-brand-teal/20 rotate-45 rounded-lg animate-pulse"></div>
        <div className="absolute bottom-1/3 right-16 w-12 h-12 border-2 border-brand-teal/20 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-inter">
              {content.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-inter">
              {content.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Market Research & Pain Points */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-brand-sage/30">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mr-6 border border-red-100">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-inter">Market Reality</h3>
                    <p className="text-gray-600 font-inter">Based on industry research</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {country.marketContext.painPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border border-red-100">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-800 leading-relaxed font-medium font-inter">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Statistics */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-brand-sage/30">
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-6 h-6 text-brand-teal mr-3" />
                  <h4 className="text-xl font-bold text-gray-900 font-inter">Key Market Statistics</h4>
                </div>
                <div className="space-y-4">
                  {country.marketContext.keyStats.map((stat, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-brand-sage-light/30 rounded-lg border border-brand-sage/20">
                      <div className="w-2 h-2 bg-brand-teal rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium font-inter">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bernof Co Solutions */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-brand-sage-light/30 to-brand-sage-light/10 rounded-3xl p-8 border border-brand-sage/30">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-inter">Bernof Co Solution</h3>
                    <p className="text-gray-600 font-inter">How we solve these challenges</p>
                  </div>
                </div>
                
                <div className="space-y-5">
                  {content.solutions.map((solution, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-brand-sage/20">
                      <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-800 leading-relaxed font-medium font-inter">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value Proposition Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-brand-sage/20 text-center">
                  <DollarSign className="w-8 h-8 text-brand-teal mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2 font-inter">60% Savings</h4>
                  <p className="text-sm text-gray-600 font-inter">Compared to local agencies</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-brand-sage/20 text-center">
                  <Clock className="w-8 h-8 text-brand-teal mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2 font-inter">48h Start</h4>
                  <p className="text-sm text-gray-600 font-inter">No waiting lists</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-brand-sage/20 text-center">
                  <Users className="w-8 h-8 text-brand-teal mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2 font-inter">50+ Experts</h4>
                  <p className="text-sm text-gray-600 font-inter">Ready to scale</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-3xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 font-inter">Ready to Stop Overpaying?</h3>
            <p className="text-xl mb-8 opacity-90 font-inter">
              Join {country.name} businesses who chose smart development partnerships
            </p>
            <button 
              onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
              className="bg-white text-brand-teal font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg font-inter"
            >
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryPainPoints;
