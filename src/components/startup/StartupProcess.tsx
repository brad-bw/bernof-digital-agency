
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const StartupProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Validation",
      description: "We analyze your idea, validate the market fit, and create a detailed development roadmap.",
      deliverables: ["Market research", "Technical feasibility study", "Project roadmap", "Cost estimate"],
      duration: "3-5 days"
    },
    {
      step: "02", 
      title: "MVP Design & Planning",
      description: "Design the core features that matter most to your users and plan the technical architecture.",
      deliverables: ["User journey mapping", "Wireframes & mockups", "Technical architecture", "Feature prioritization"],
      duration: "1 week"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build your MVP with regular updates and testing to ensure quality and functionality.",
      deliverables: ["Core MVP features", "Quality testing", "Performance optimization", "Security implementation"],
      duration: "2-3 weeks"
    },
    {
      step: "04",
      title: "Launch & Iterate",
      description: "Deploy your MVP and provide ongoing support as you gather user feedback and iterate.",
      deliverables: ["Production deployment", "Launch support", "Performance monitoring", "Iteration planning"],
      duration: "Ongoing"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white" id="startup-process">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              From Idea to Launch in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                4 Simple Steps
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven process ensures your startup gets to market quickly and efficiently.
            </p>
          </div>

          {/* Process Steps - Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Card */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                  {/* Step Number */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-semibold text-accent">{step.duration}</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Key Deliverables */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Key Deliverables:</h4>
                    <ul className="space-y-1">
                      {step.deliverables.slice(0, 2).map((deliverable, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{deliverable}</span>
                        </li>
                      ))}
                      {step.deliverables.length > 2 && (
                        <li className="text-xs text-gray-500">+{step.deliverables.length - 2} more</li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Arrow - Only show on larger screens and not on last item */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-gray-400" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              onClick={() => scrollToSection('startup-pricing')}
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Journey Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupProcess;
