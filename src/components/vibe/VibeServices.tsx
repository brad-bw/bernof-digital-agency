
import { Button } from "@/components/ui/button";
import { AlertTriangle, Rocket, Link, Gauge, HeadphonesIcon } from "lucide-react";

const VibeServices = () => {
  const services = [
    {
      icon: AlertTriangle,
      title: "Emergency Debugging",
      description: "Fix critical issues fast",
      details: [
        "Cursor AI crashes and version conflicts",
        "Lovable deployment failures", 
        "Bubble workflow breakdowns",
        "Security vulnerability patches",
        "Performance bottleneck resolution"
      ],
      price: "From $297",
      timeframe: "2-4 hours",
      popular: true
    },
    {
      icon: Rocket,
      title: "Production Migration",
      description: "Scale from prototype to production",
      details: [
        "Code architecture review and optimization",
        "Database design and implementation",
        "Security hardening and compliance",
        "CI/CD pipeline setup",
        "Load testing and optimization"
      ],
      price: "From $1,997",
      timeframe: "1-2 weeks"
    },
    {
      icon: Link,
      title: "Integration Solutions", 
      description: "Connect APIs, databases, third-party services",
      details: [
        "Payment gateway integration",
        "Authentication system setup",
        "Third-party API connections",
        "Database migration and optimization",
        "Real-time features implementation"
      ],
      price: "From $797",
      timeframe: "3-7 days"
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description: "Speed up and stabilize your app",
      details: [
        "Code splitting and lazy loading",
        "Database query optimization", 
        "CDN setup and caching strategies",
        "Image and asset optimization",
        "Mobile performance tuning"
      ],
      price: "From $597",
      timeframe: "2-5 days"
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Maintenance",
      description: "Keep your creation running smoothly",
      details: [
        "24/7 monitoring and alerts",
        "Regular security updates",
        "Performance monitoring",
        "Bug fixes and improvements", 
        "Feature updates and enhancements"
      ],
      price: "From $497/month",
      timeframe: "Ongoing"
    }
  ];

  const scrollToCTA = () => {
    const element = document.getElementById('vibe-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Service Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the right level of support for your AI-generated project. 
            From emergency fixes to complete production overhauls.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border ${service.popular ? 'border-primary shadow-lg' : 'border-gray-100'}`}>
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.popular ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-gray-100 pt-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                  <div className="text-sm text-gray-500">{service.timeframe}</div>
                </div>
                
                <Button 
                  onClick={scrollToCTA}
                  className={`w-full font-semibold py-3 rounded-xl ${service.popular ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center border border-primary/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Not Sure Which Service You Need?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Book a free 15-minute consultation and we'll recommend the best approach for your specific situation.
          </p>
          <Button 
            onClick={scrollToCTA}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-2xl"
          >
            Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VibeServices;
