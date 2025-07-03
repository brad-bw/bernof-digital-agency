
import { Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PaymentMethodsSection } from "@/components/services/PaymentMethodsSection";

const StartupPricing = () => {
  const pricingPlans = [
    {
      name: "MVP Validation",
      price: "from £2,999",
      description: "Perfect for testing your idea with a basic working prototype",
      features: [
        "Market research & validation",
        "Basic MVP with core features",
        "Mobile responsive design",
        "Basic testing & bug fixes",
        "1 month support",
        "Source code delivery"
      ],
      popular: false,
      cta: "Start Validation",
      timeline: "2-3 weeks"
    },
    {
      name: "Full MVP Launch",
      price: "starts at £7,999",
      description: "Complete MVP ready for real users and investor presentations",
      features: [
        "Everything in MVP Validation",
        "Advanced features & integrations",
        "User authentication & profiles",
        "Admin dashboard",
        "Performance optimization",
        "SEO optimization",
        "3 months support",
        "Launch assistance"
      ],
      popular: true,
      cta: "Launch Your MVP",
      timeline: "4-6 weeks"
    },
    {
      name: "Scale-Ready Platform",
      price: "from £14,999",
      description: "Enterprise-ready solution built to handle growth and scaling",
      features: [
        "Everything in Full MVP Launch",
        "Advanced integrations",
        "Multi-user roles & permissions",
        "Analytics & reporting",
        "API development",
        "Security audit",
        "6 months support",
        "Scaling consultation"
      ],
      popular: false,
      cta: "Build to Scale",
      timeline: "6-8 weeks"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white" id="startup-pricing">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Every Stage
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              No hidden fees, no ongoing contracts. Final pricing based on project scope and requirements. 
              Optional maintenance available per project basis.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 font-semibold">
              <Star className="w-4 h-4 mr-2" />
              Custom pricing based on your specific needs
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-accent shadow-2xl bg-gradient-to-b from-white to-accent/5' 
                    : 'border-gray-200 hover:border-accent/30 hover:shadow-xl bg-white'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Custom quote based on requirements</div>
                  </div>
                  
                  <div className="text-accent font-semibold">{plan.timeline}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => scrollToSection('startup-cta')}
                  className={`w-full font-semibold py-3 rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-accent hover:bg-accent/90 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>

          {/* Payment Methods */}
          <PaymentMethodsSection />

          {/* Additional Info */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Maintenance Made Simple
            </h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Need updates or new features? Our project-based maintenance means you only pay 
              when you need changes. No monthly fees, no contracts - just transparent pricing 
              for each project.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">from £99</div>
                <div className="text-sm text-gray-600">Minor updates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">from £499</div>
                <div className="text-sm text-gray-600">New features</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">from £999</div>
                <div className="text-sm text-gray-600">Major upgrades</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupPricing;
