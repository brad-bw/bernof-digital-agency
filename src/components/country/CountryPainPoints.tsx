
import { CountryConfig } from "@/config/countries";
import { AlertTriangle, TrendingUp } from "lucide-react";

interface CountryPainPointsProps {
  country: CountryConfig;
  serviceType: 'web' | 'software' | 'startup';
}

const CountryPainPoints = ({ country, serviceType }: CountryPainPointsProps) => {
  const getServiceSpecificSolutions = () => {
    switch (serviceType) {
      case 'web':
        return [
          'Custom web development at 60-70% cost savings',
          'Expert UI/UX design that converts visitors',
          'E-commerce solutions with local payment integration',
          'SEO optimization for local market visibility'
        ];
      case 'software':
        return [
          'Custom software development with agile methodology',
          'Mobile app development for iOS and Android',
          'Enterprise solutions with scalable architecture',
          'AI integration and automation capabilities'
        ];
      case 'startup':
        return [
          'MVP development in 4-8 weeks',
          'Technical co-founder expertise',
          'Startup strategy and market validation',
          'Fundraising preparation and pitch deck creation'
        ];
      default:
        return [];
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              The Reality of {country.name}'s Digital Market
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the challenges and opportunities that define success in {country.name}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pain Points */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Market Challenges</h3>
              </div>
              
              <div className="space-y-4">
                {country.marketContext.painPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>

              {/* Key Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Key Market Statistics:</h4>
                <div className="space-y-2">
                  {country.marketContext.keyStats.map((stat, index) => (
                    <div key={index} className="text-sm text-gray-600">
                      • {stat}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Solutions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Solutions</h3>
              </div>
              
              <div className="space-y-4">
                {getServiceSpecificSolutions().map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{solution}</p>
                  </div>
                ))}
              </div>

              {/* Cost Comparison */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Cost Savings Comparison:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Local Agency/Team:</span>
                    <span className="font-semibold text-red-600">
                      {country.currencySymbol}{(country.pricing[serviceType]?.max * 2).toLocaleString()}+
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Bernof Co:</span>
                    <span className="font-semibold text-green-600">
                      {country.currencySymbol}{country.pricing[serviceType]?.min.toLocaleString()} - {country.currencySymbol}{country.pricing[serviceType]?.max.toLocaleString()}
                    </span>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 mt-4">
                    <p className="text-green-800 font-semibold text-center">
                      Save 60-70% compared to local alternatives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryPainPoints;
