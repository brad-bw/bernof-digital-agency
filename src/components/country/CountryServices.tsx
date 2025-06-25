
import { CountryConfig } from "@/config/countries";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Zap, Shield, Rocket, Users } from "lucide-react";

interface CountryServicesProps {
  country: CountryConfig;
  serviceType: 'web' | 'software' | 'startup';
}

const CountryServices = ({ country, serviceType }: CountryServicesProps) => {
  const getServiceData = () => {
    switch (serviceType) {
      case 'web':
        return {
          title: `Complete Web Development Solutions for ${country.name}`,
          subtitle: 'Everything you need to dominate your market online',
          packages: [
            {
              name: 'Professional Website',
              description: 'Perfect for established businesses looking to strengthen their online presence',
              features: [
                'Custom responsive design',
                'Mobile-first development',
                'SEO optimization included',
                'GDPR compliance built-in',
                'Local payment integration',
                'Multi-language support',
                'Performance optimization',
                'Basic analytics setup'
              ],
              localPrice: `${country.currencySymbol}${country.pricing.web.localMin.toLocaleString()}-${country.currencySymbol}${country.pricing.web.localMax.toLocaleString()}`,
              bernofPrice: `${country.currencySymbol}${country.pricing.web.min.toLocaleString()}-${country.currencySymbol}${country.pricing.web.max.toLocaleString()}`,
              popular: false,
              icon: <Zap className="w-6 h-6" />
            },
            {
              name: 'E-Commerce Platform',
              description: 'Complete online store solution with advanced features',
              features: [
                'Custom e-commerce platform',
                'Payment gateway integration',
                'Inventory management system',
                'Customer account portal',
                'Order management dashboard',
                'Multi-currency support',
                'Advanced analytics',
                'Marketing automation setup'
              ],
              localPrice: `${country.currencySymbol}${Math.floor(country.pricing.web.localMin * 1.5).toLocaleString()}-${country.currencySymbol}${Math.floor(country.pricing.web.localMax * 1.5).toLocaleString()}`,
              bernofPrice: `${country.currencySymbol}${Math.floor(country.pricing.web.min * 1.5).toLocaleString()}-${country.currencySymbol}${Math.floor(country.pricing.web.max * 1.5).toLocaleString()}`,
              popular: true,
              icon: <Rocket className="w-6 h-6" />
            },
            {
              name: 'Enterprise Web Solution',
              description: 'Scalable platform for large organizations with complex needs',
              features: [
                'Custom web application',
                'Enterprise integrations',
                'Advanced security features',
                'Scalable architecture',
                'API development',
                'User management system',
                'Comprehensive analytics',
                'Dedicated support'
              ],
              localPrice: `${country.currencySymbol}${Math.floor(country.pricing.web.localMin * 2).toLocaleString()}+`,
              bernofPrice: `${country.currencySymbol}${Math.floor(country.pricing.web.min * 2).toLocaleString()}+`,
              popular: false,
              icon: <Shield className="w-6 h-6" />
            }
          ]
        };
      case 'software':
        return {
          title: `Enterprise Software Development for ${country.name}`,
          subtitle: 'Custom solutions that scale with your business',
          packages: [
            {
              name: 'Custom Software Development',
              description: 'Tailored software solutions for your specific business needs',
              features: [
                'Full-stack development',
                'Custom database design',
                'API development & integration',
                'Cloud deployment included',
                'Mobile app development',
                'Enterprise security',
                'Performance optimization',
                'Technical documentation'
              ],
              localPrice: `${country.currencySymbol}${Math.floor(country.pricing.software.localMin / 1000)}k-${Math.floor(country.pricing.software.localMax / 1000)}k`,
              bernofPrice: `${country.currencySymbol}${Math.floor(country.pricing.software.min / 1000)}k-${Math.floor(country.pricing.software.max / 1000)}k`,
              popular: false,
              icon: <Zap className="w-6 h-6" />
            },
            {
              name: 'Enterprise Platform',
              description: 'Comprehensive business platform with advanced capabilities',
              features: [
                'Microservices architecture',
                'Enterprise integrations',
                'Advanced analytics',
                'AI/ML capabilities',
                'Automated workflows',
                'Multi-tenant support',
                'Advanced security',
                'Dedicated support team'
              ],
              localPrice: `${country.currencySymbol}${Math.floor(country.pricing.software.localMin * 1.5 / 1000)}k-${Math.floor(country.pricing.software.localMax * 1.5 / 1000)}k`,
              bernofPrice: `${country.currencySymbol}${Math.floor(country.pricing.software.min * 1.5 / 1000)}k-${Math.floor(country.pricing.software.max * 1.5 / 1000)}k`,
              popular: true,
              icon: <Rocket className="w-6 h-6" />
            },
            {
              name: 'Development Team',
              description: 'Dedicated development team for ongoing projects',
              features: [
                'Senior developers only',
                'Project management included',
                'Flexible scaling',
                'Direct communication',
                'European time zones',
                'Quality assurance',
                'DevOps support',
                'Technical leadership'
              ],
              localPrice: `${country.currencySymbol}${Math.floor(country.pricing.software.localMin * 2 / 1000)}k+/year`,
              bernofPrice: `${country.currencySymbol}${Math.floor(country.pricing.software.min * 2 / 1000)}k+/year`,
              popular: false,
              icon: <Users className="w-6 h-6" />
            }
          ]
        };
      case 'startup':
        return {
          title: `Startup Development Services for ${country.name}`,
          subtitle: 'From idea to market-ready product',
          packages: [
            {
              name: 'MVP Validation',
              description: 'Validate your idea quickly and cost-effectively',
              features: [
                'Market research & analysis',
                'User persona development',
                'Rapid prototyping',
                'User testing & feedback',
                'Technical feasibility study',
                'Go-to-market strategy',
                'Basic analytics setup',
                'Launch preparation'
              ],
              localPrice: `${country.currencySymbol}${Math.floor(country.pricing.startup.localMin * 0.6 / 1000)}k-${Math.floor(country.pricing.startup.localMax * 0.6 / 1000)}k`,
              bernofPrice: `${country.currencySymbol}${Math.floor(country.pricing.startup.min * 0.6 / 1000)}k-${Math.floor(country.pricing.startup.max * 0.6 / 1000)}k`,
              popular: false,
              icon: <Zap className="w-6 h-6" />
            },
            {
              name: 'Complete MVP Launch',
              description: 'Full MVP development with launch support',
              features: [
                'Complete product development',
                'Professional UI/UX design',
                'Mobile-responsive platform',
                'User authentication system',
                'Payment processing',
                'Admin dashboard',
                'Analytics & monitoring',
                'Post-launch support'
              ],
              localPrice: `${country.currencySymbol}${Math.floor(country.pricing.startup.localMin / 1000)}k-${Math.floor(country.pricing.startup.localMax / 1000)}k`,
              bernofPrice: `${country.currencySymbol}${Math.floor(country.pricing.startup.min / 1000)}k-${Math.floor(country.pricing.startup.max / 1000)}k`,
              popular: true,
              icon: <Rocket className="w-6 h-6" />
            },
            {
              name: 'Scale & Growth',
              description: 'Advanced features and scaling support',
              features: [
                'Advanced feature development',
                'Scalable architecture',
                'Performance optimization',
                'Security enhancements',
                'Third-party integrations',
                'Growth marketing setup',
                'Investor pitch support',
                'Technical due diligence'
              ],
              localPrice: `${country.currencySymbol}${Math.floor(country.pricing.startup.localMin * 1.5 / 1000)}k+`,
              bernofPrice: `${country.currencySymbol}${Math.floor(country.pricing.startup.min * 1.5 / 1000)}k+`,
              popular: false,
              icon: <Shield className="w-6 h-6" />
            }
          ]
        };
      default:
        return { title: '', subtitle: '', packages: [] };
    }
  };

  const serviceData = getServiceData();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {serviceData.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {serviceData.subtitle}
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-8 mb-16">
            {serviceData.packages.slice(0, 3).map((pkg, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mr-4">
                        {pkg.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                    </div>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">{country.name} Market Challenge</div>
                    <div className="text-lg font-semibold text-red-600">{pkg.localPrice}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Bernof Co Solution</div>
                    <div className="text-lg font-semibold text-primary">{pkg.bernofPrice}</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-lg mb-4">
                      60% savings
                    </div>
                    <Button 
                      className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                      onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
                    >
                      Explore Service
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Not Sure Which Package is Right?</h3>
            <p className="text-xl mb-8 opacity-90">
              Book a free consultation and we'll help you choose the perfect solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl text-lg"
                onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
              >
                Schedule Free Consultation
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-xl text-lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryServices;
