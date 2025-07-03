
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CountryConfig } from "@/config/countries";

interface CountryServicesProps {
  country: CountryConfig;
  serviceType: 'web' | 'software' | 'startup';
}

const getServicesForType = (country: CountryConfig, serviceType: string) => {
  const baseServices = [
    {
      title: "Web Development",
      challenge: "High local costs",
      solution: "60% cost savings",
      savings: "Save 60%",
      link: `/${country.code}/web-development`,
      description: "Professional websites and e-commerce solutions"
    },
    {
      title: "Software Development", 
      challenge: "Talent shortage",
      solution: "Expert team ready",
      savings: "Save 65%",
      link: `/${country.code}/software-development`,
      description: "Custom applications and enterprise solutions"
    },
    {
      title: "Startup Development",
      challenge: "High MVP costs",
      solution: "Affordable MVPs",
      savings: "Save 70%",
      link: `/${country.code}/startup-development`, 
      description: "MVP development and technical consulting"
    }
  ];

  // Filter out the current service type
  return baseServices.filter(service => {
    if (serviceType === 'web') return service.title !== "Web Development";
    if (serviceType === 'software') return service.title !== "Software Development";  
    if (serviceType === 'startup') return service.title !== "Startup Development";
    return true;
  });
};

export const CountryServices = ({ country, serviceType }: CountryServicesProps) => {
  const services = getServicesForType(country, serviceType);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Digital Solutions for {country.name} Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive services tailored for the {country.name} market with local expertise and European excellence.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">{country.name} Market Challenge</div>
                    <div className="text-lg font-semibold text-red-600">{service.challenge}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Bernof Co Solution</div>
                    <div className="text-lg font-semibold text-primary">{service.solution}</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-lg mb-4">
                      {service.savings}
                    </div>
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-accent hover:text-accent/80 font-semibold transition-colors"
                    >
                      Explore Service <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
