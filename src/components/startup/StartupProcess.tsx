
import { CheckCircle, ArrowRight, Search, Palette, Code, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const StartupProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Market Validation",
      description: "We conduct comprehensive market research and validate your startup idea to ensure product-market fit before development begins.",
      fullDeliverables: [
        "Competitive landscape analysis",
        "Target audience research", 
        "Market size evaluation",
        "Technical feasibility assessment",
        "Revenue model validation",
        "Risk assessment report",
        "Detailed project roadmap",
        "Accurate cost estimation"
      ],
      duration: "3-5 days",
      icon: Search,
      colorScheme: {
        bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
        border: "border-blue-200",
        iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
        numberBg: "bg-blue-100",
        numberText: "text-blue-700",
        titleText: "text-blue-900",
        hover: "hover:shadow-blue-100"
      }
    },
    {
      step: "02", 
      title: "UX/UI Design & Architecture Planning",
      description: "We design intuitive user experiences and plan the technical architecture that will scale with your startup's growth.",
      fullDeliverables: [
        "User journey mapping",
        "Interactive wireframes",
        "High-fidelity UI mockups",
        "Design system creation",
        "Scalable technical architecture",
        "Database schema design",
        "API endpoint planning",
        "Security framework setup"
      ],
      duration: "1-2 weeks",
      icon: Palette,
      colorScheme: {
        bg: "bg-gradient-to-br from-purple-50 to-pink-50",
        border: "border-purple-200",
        iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
        numberBg: "bg-purple-100",
        numberText: "text-purple-700",
        titleText: "text-purple-900",
        hover: "hover:shadow-purple-100"
      }
    },
    {
      step: "03",
      title: "Agile Development & Testing",
      description: "We build your MVP using agile methodology with continuous testing to ensure high-quality, bug-free software delivery.",
      fullDeliverables: [
        "Core MVP feature development",
        "Responsive web application",
        "Cross-browser compatibility",
        "Performance optimization",
        "Security implementation",
        "Automated testing suite",
        "Quality assurance testing",
        "Code documentation"
      ],
      duration: "2-4 weeks",
      icon: Code,
      colorScheme: {
        bg: "bg-gradient-to-br from-green-50 to-emerald-50",
        border: "border-green-200",
        iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
        numberBg: "bg-green-100",
        numberText: "text-green-700",
        titleText: "text-green-900",
        hover: "hover:shadow-green-100"
      }
    },
    {
      step: "04",
      title: "Launch & Growth Support",
      description: "We deploy your startup to production and provide ongoing support to help you iterate based on real user feedback.",
      fullDeliverables: [
        "Production deployment setup",
        "Domain and hosting configuration",
        "Analytics implementation",
        "Performance monitoring",
        "Launch strategy consultation",
        "User feedback collection tools",
        "Iteration planning sessions",
        "30-day post-launch support"
      ],
      duration: "Ongoing",
      icon: Rocket,
      colorScheme: {
        bg: "bg-gradient-to-br from-orange-50 to-red-50",
        border: "border-orange-200",
        iconBg: "bg-gradient-to-br from-orange-500 to-red-600",
        numberBg: "bg-orange-100",
        numberText: "text-orange-700",
        titleText: "text-orange-900",
        hover: "hover:shadow-orange-100"
      }
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" id="startup-process">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              From Startup Idea to Market Launch in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                4 Proven Steps
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our battle-tested startup development process has helped over 100 founders 
              transform their ideas into successful businesses. Here's exactly how we'll bring your vision to life.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  <div className={`${step.colorScheme.bg} ${step.colorScheme.border} ${step.colorScheme.hover} rounded-2xl border-2 p-8 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`${step.colorScheme.iconBg} w-16 h-16 rounded-xl flex items-center justify-center shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className={`${step.colorScheme.numberBg} ${step.colorScheme.numberText} px-3 py-1 rounded-full text-sm font-bold mb-2 inline-block`}>
                            Step {step.step}
                          </div>
                          <h3 className={`text-xl font-bold ${step.colorScheme.titleText}`}>
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-gray-600 bg-white px-3 py-1 rounded-full">
                          {step.duration}
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Deliverables */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                        What You'll Receive:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.fullDeliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700 leading-relaxed">
                              {deliverable}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step connector for large screens */}
                    {index < processSteps.length - 1 && index % 2 === 0 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Timeline for Mobile */}
          <div className="lg:hidden mb-12">
            <div className="text-center text-sm text-gray-500">
              Complete startup development process • Proven methodology • 100+ successful launches
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              onClick={() => scrollToSection('startup-pricing')}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Your Startup Journey Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Free consultation • No upfront payment • Money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupProcess;
