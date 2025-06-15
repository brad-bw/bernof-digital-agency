
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Zap } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Premium Quality",
      description: "We deliver exceptional results that exceed expectations and drive real business value.",
      pattern: "curved"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Client Partnership",
      description: "Your success is our success. We build lasting relationships through transparent collaboration.",
      pattern: "angular"
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Innovation Focus",
      description: "Cutting-edge technology and creative solutions that keep you ahead of the competition.",
      pattern: "geometric"
    }
  ];

  const achievements = [
    "Industry best practices and coding standards",
    "Cross-browser and device compatibility",
    "Performance optimization and security",
    "Accessibility compliance (WCAG 2.1 AA)",
    "Satisfaction guarantee on all projects",
    "Post-launch support included"
  ];

  const getPatternElement = (pattern: string) => {
    switch (pattern) {
      case 'curved':
        return <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/10 rounded-full"></div>;
      case 'angular':
        return <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent/10 transform rotate-45 rounded-tl-lg"></div>;
      case 'geometric':
        return <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/10 clip-path-polygon-[0_0,100%_0,50%_100%]"></div>;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Logo-inspired geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-accent/3 transform rotate-45 rounded-tl-3xl blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/2 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
              Managing the Future, Today
              <div className="absolute -top-4 -right-4 w-5 h-5 bg-accent/20 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary/20 transform rotate-45"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Bernoff Co, we combine strategic thinking with technical excellence to deliver 
              digital solutions that transform businesses and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent/5 rounded-tl-3xl"></div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 relative">
                Our Commitment to Excellence
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We believe in delivering more than just services – we deliver results. Our comprehensive 
                approach ensures every project meets the highest standards of quality, performance, and user experience.
              </p>
              
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 relative">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                    {index % 3 === 0 && (
                      <div className="absolute -left-8 top-0 w-2 h-2 bg-primary/10 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                  {getPatternElement(value.pattern)}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/2 to-accent/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl relative">
                        {value.icon}
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-accent/30 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            {/* Logo-inspired decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent/20 transform rotate-45 rounded-tl-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-accent/30 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join successful businesses who trust Bernoff Co to manage their digital future. 
                Let's discuss how we can drive your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <div className="text-center relative">
                  <div className="absolute -top-2 -left-2 w-3 h-3 bg-accent/30 rounded-full"></div>
                  <div className="text-2xl font-bold">Free</div>
                  <div className="text-sm opacity-90">30-minute consultation</div>
                </div>
                <div className="text-center relative">
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/20 transform rotate-45"></div>
                  <div className="text-2xl font-bold">Custom</div>
                  <div className="text-sm opacity-90">Tailored proposals</div>
                </div>
                <div className="text-center relative">
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent/20 rounded-tl-full"></div>
                  <div className="text-2xl font-bold">Guaranteed</div>
                  <div className="text-sm opacity-90">Satisfaction promise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
