
import { CountryConfig } from "@/config/countries";
import { Button } from "@/components/ui/button";

interface CountryServicesProps {
  country: CountryConfig;
  serviceType: 'web' | 'software' | 'startup';
}

const CountryServices = ({ country, serviceType }: CountryServicesProps) => {
  const getServiceData = () => {
    switch (serviceType) {
      case 'web':
        return {
          title: 'Web Development Services',
          subtitle: 'Complete digital solutions for your business growth',
          services: [
            {
              name: 'Custom Website Development',
              description: 'Responsive, fast-loading websites built with modern technologies',
              features: ['React/Next.js development', 'Mobile-first design', 'SEO optimization', 'Performance optimization'],
              price: `${country.currencySymbol}${country.pricing.webDevelopment.min.toLocaleString()} - ${country.currencySymbol}${country.pricing.webDevelopment.max.toLocaleString()}`
            },
            {
              name: 'E-commerce Solutions',
              description: 'Full-featured online stores with payment integration',
              features: ['Custom e-commerce platform', 'Payment gateway integration', 'Inventory management', 'Analytics dashboard'],
              price: `${country.currencySymbol}${(country.pricing.webDevelopment.min * 1.5).toLocaleString()} - ${country.currencySymbol}${(country.pricing.webDevelopment.max * 1.5).toLocaleString()}`
            },
            {
              name: 'UI/UX Design',
              description: 'User-centered design that converts visitors into customers',
              features: ['User research & analysis', 'Wireframing & prototyping', 'Visual design', 'Usability testing'],
              price: `${country.currencySymbol}${Math.floor(country.pricing.webDevelopment.min * 0.6).toLocaleString()} - ${country.currencySymbol}${Math.floor(country.pricing.webDevelopment.max * 0.6).toLocaleString()}`
            },
            {
              name: 'Digital Marketing',
              description: 'SEO, social media, and advertising campaigns',
              features: ['Local SEO optimization', 'Social media management', 'Google Ads campaigns', 'Content marketing'],
              price: `${country.currencySymbol}1,500 - ${country.currencySymbol}5,000/month`
            }
          ]
        };
      case 'software':
        return {
          title: 'Software Development Services',
          subtitle: 'Custom software solutions that scale with your business',
          services: [
            {
              name: 'Custom Software Development',
              description: 'Tailored software solutions for your specific business needs',
              features: ['Full-stack development', 'API development', 'Database design', 'Cloud deployment'],
              price: `${country.currencySymbol}${country.pricing.softwareDevelopment.min.toLocaleString()} - ${country.currencySymbol}${country.pricing.softwareDevelopment.max.toLocaleString()}`
            },
            {
              name: 'Mobile App Development',
              description: 'Native and cross-platform mobile applications',
              features: ['iOS & Android development', 'React Native/Flutter', 'App Store deployment', 'Push notifications'],
              price: `${country.currencySymbol}${(country.pricing.softwareDevelopment.min * 0.8).toLocaleString()} - ${country.currencySymbol}${(country.pricing.softwareDevelopment.max * 0.8).toLocaleString()}`
            },
            {
              name: 'Enterprise Solutions',
              description: 'Scalable enterprise software with advanced features',
              features: ['Microservices architecture', 'Enterprise integrations', 'Advanced security', 'Performance monitoring'],
              price: `${country.currencySymbol}${(country.pricing.softwareDevelopment.min * 1.5).toLocaleString()} - ${country.currencySymbol}${(country.pricing.softwareDevelopment.max * 1.5).toLocaleString()}`
            },
            {
              name: 'AI Integration',
              description: 'Artificial intelligence and automation solutions',
              features: ['Machine learning models', 'Process automation', 'Chatbot development', 'Data analytics'],
              price: `${country.currencySymbol}${(country.pricing.softwareDevelopment.min * 0.7).toLocaleString()} - ${country.currencySymbol}${(country.pricing.softwareDevelopment.max * 0.7).toLocaleString()}`
            }
          ]
        };
      case 'startup':
        return {
          title: 'Startup Development Services',
          subtitle: 'From idea to market-ready product',
          services: [
            {
              name: 'MVP Development',
              description: 'Rapid prototype development to validate your idea',
              features: ['4-8 week development', 'Core feature focus', 'User testing', 'Market validation'],
              price: `${country.currencySymbol}${country.pricing.startupDevelopment.min.toLocaleString()} - ${country.currencySymbol}${Math.floor(country.pricing.startupDevelopment.max * 0.6).toLocaleString()}`
            },
            {
              name: 'Full Product Development',
              description: 'Complete product development from concept to launch',
              features: ['Technical architecture', 'Full development', 'Quality assurance', 'Deployment & launch'],
              price: `${country.currencySymbol}${Math.floor(country.pricing.startupDevelopment.min * 1.2).toLocaleString()} - ${country.currencySymbol}${country.pricing.startupDevelopment.max.toLocaleString()}`
            },
            {
              name: 'Technical Consulting',
              description: 'Strategic technical guidance for your startup',
              features: ['Technology selection', 'Architecture planning', 'Team scaling advice', 'Code review'],
              price: `${country.currencySymbol}2,000 - ${country.currencySymbol}8,000/month`
            },
            {
              name: 'Growth & Marketing',
              description: 'Marketing strategies to accelerate your growth',
              features: ['Growth strategy', 'User acquisition', 'Conversion optimization', 'Analytics setup'],
              price: `${country.currencySymbol}3,000 - ${country.currencySymbol}12,000/month`
            }
          ]
        };
      default:
        return { title: '', subtitle: '', services: [] };
    }
  };

  const serviceData = getServiceData();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {serviceData.title} for {country.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {serviceData.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceData.services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Get Quote for {service.name}
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4"
              onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryServices;
