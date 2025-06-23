
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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {content.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Market Research & Pain Points */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mr-6">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Market Reality</h3>
                    <p className="text-gray-600">Based on industry research</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {country.marketContext.painPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border border-red-100">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-800 leading-relaxed font-medium">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Statistics */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-6 h-6 text-primary mr-3" />
                  <h4 className="text-xl font-bold text-gray-900">Key Market Statistics</h4>
                </div>
                <div className="space-y-4">
                  {country.marketContext.keyStats.map((stat, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bernof Co Solutions */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-primary/10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mr-6">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Bernof Co Solution</h3>
                    <p className="text-gray-600">How we solve these challenges</p>
                  </div>
                </div>
                
                <div className="space-y-5">
                  {content.solutions.map((solution, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-green-100">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-800 leading-relaxed font-medium">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value Proposition Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">60% Savings</h4>
                  <p className="text-sm text-gray-600">Compared to local agencies</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <Clock className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">48h Start</h4>
                  <p className="text-sm text-gray-600">No waiting lists</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <Users className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">50+ Experts</h4>
                  <p className="text-sm text-gray-600">Ready to scale</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Stop Overpaying?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join {country.name} businesses who chose smart development partnerships
            </p>
            <button 
              onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
              className="bg-white text-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-colors"
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
