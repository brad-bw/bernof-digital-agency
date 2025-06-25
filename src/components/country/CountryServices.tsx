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
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {serviceData.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              {serviceData.subtitle}
            </p>
          </div>

          {/* Services Grid - Redesigned Modern Cards */}
          <div className="space-y-8 mb-16">
            {serviceData.packages.slice(0, 3).map((pkg, index) => (
              <div key={index} className="group relative">
                {/* Background Card with Abstract Elements */}
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                  {/* Abstract Background Elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-700"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-2xl group-hover:from-accent/10 group-hover:to-primary/10 transition-all duration-700"></div>
                    <div className="absolute top-8 right-8 w-24 h-24 border border-primary/10 group-hover:border-primary/20 transition-all duration-500 rounded-2xl rotate-12"></div>
                  </div>

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 items-center">
                    {/* Service Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                          {pkg.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                            {pkg.name}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{pkg.description}</p>
                    </div>

                    {/* Market Challenge */}
                    <div className="text-center">
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {country.name} Market Challenge
                        </span>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-xl p-4">
                        <div className="text-red-600 dark:text-red-400 font-bold text-lg line-through">
                          {pkg.localPrice}
                        </div>
                        <div className="text-red-500 dark:text-red-400 text-sm font-medium mt-1">
                          {index === 0 ? 'local cost' : index === 1 ? 'annual talent cost' : 'MVP costs'}
                        </div>
                      </div>
                    </div>

                    {/* Bernof Solution */}
                    <div className="text-center">
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Bernof Co Solution
                        </span>
                      </div>
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                        <div className="text-primary font-bold text-lg">
                          {pkg.bernofPrice}
                        </div>
                        <div className="text-primary/80 text-sm font-medium mt-1">
                          delivery
                        </div>
                      </div>
                    </div>

                    {/* Savings & CTA */}
                    <div className="text-center">
                      <div className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-xl mb-4 group-hover:bg-primary/90 transition-colors duration-300">
                        60% savings
                      </div>
                      <Button 
                        className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 group-hover:shadow-lg"
                        onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
                      >
                        Explore Service
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 text-center text-white">
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
