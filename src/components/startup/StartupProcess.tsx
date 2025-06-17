
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="startup-process">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              From Idea to Launch in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                4 Simple Steps
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures your startup gets to market quickly and efficiently, 
              without the complexity of managing a development team.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Step Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center">
                          {/* Geometric background inspired by uploaded images */}
                          <div className="absolute inset-0 rounded-2xl overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 bg-accent/10 rounded-full transform translate-x-2 -translate-y-2"></div>
                          </div>
                          <span className="relative z-10 text-primary font-bold text-xl">{step.step}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          <div className="text-accent font-semibold">{step.duration}</div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Key Deliverables:</h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              <span className="text-gray-700">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative">
                      {/* Geometric pattern inspired by uploaded images */}
                      <div className="w-full h-64 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
                        {/* Background geometric shapes */}
                        <div className="absolute inset-0">
                          <div className="absolute top-4 left-4 w-16 h-16 bg-primary/10 rounded-full"></div>
                          <div className="absolute top-8 right-8 w-12 h-12 bg-accent/10 rounded-lg transform rotate-45"></div>
                          <div className="absolute bottom-6 left-8 w-20 h-20 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl transform -rotate-12"></div>
                          <div className="absolute bottom-4 right-4 w-14 h-14 bg-primary/8 rounded-full"></div>
                          
                          {/* Central step indicator */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-2xl">{step.step}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center py-8">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
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
