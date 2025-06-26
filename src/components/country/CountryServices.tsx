
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Service {
  title: string;
  challenge: string;
  solution: string;
  savings: string;
  link: string;
  description: string;
}

interface CountryServicesProps {
  services: Service[];
  countryName: string;
}

export const CountryServices = ({ services, countryName }: CountryServicesProps) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Digital Solutions for {countryName} Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive services tailored for the {countryName} market with local expertise and European excellence.
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
                    <div className="text-sm text-gray-500 mb-1">{countryName} Market Challenge</div>
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
