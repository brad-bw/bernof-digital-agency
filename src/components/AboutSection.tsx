import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Zap, ArrowRight, Clock, Gift, Shield } from "lucide-react";

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

  const ctaFeatures = [
    {
      icon: <Clock className="w-5 h-5 text-white" />,
      title: "Free",
      subtitle: "30-minute consultation",
      description: "No strings attached strategy session"
    },
    {
      icon: <Gift className="w-5 h-5 text-white" />,
      title: "Custom",
      subtitle: "Tailored proposals",
      description: "Solutions designed for your needs"
    },
    {
      icon: <Shield className="w-5 h-5 text-white" />,
      title: "Guaranteed",
      subtitle: "Satisfaction promise",
      description: "100% commitment to your success"
    }
  ];

  const getPatternElement = (pattern: string) => {
    switch (pattern) {
      case 'curved':
        return <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full animate-geometric-float"></div>;
      case 'angular':
        return <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-tr from-primary/20 to-accent/20 curved-element animate-fluid-motion"></div>;
      case 'geometric':
        return <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-bl from-accent/20 to-primary/20 organic-shape animate-geometric-float"></div>;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Enhanced geometric background with flowing elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-gray-50/60"></div>
      <div className="absolute inset-0 geometric-pattern"></div>
      
      {/* Flowing organic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl animate-fluid-motion"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-tr from-accent/5 to-primary/5 curved-element blur-3xl animate-geometric-float"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-primary/3 to-accent/3 organic-shape blur-2xl animate-fluid-motion" style={{ animationDelay: '10s' }}></div>
        
        {/* Additional subtle geometric elements */}
        <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-accent/10 rounded-full animate-geometric-float" style={{ animationDelay: '5s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-primary/10 curved-element animate-fluid-motion" style={{ animationDelay: '7s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
              Managing the Future, Today
              <div className="absolute -top-4 -right-4 w-5 h-5 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full animate-geometric-float"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-bl from-primary/30 to-accent/30 curved-element animate-fluid-motion"></div>
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

          {/* Enhanced CTA Section with flowing design */}
          <div className="relative">
            {/* Dynamic background with geometric patterns */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90 rounded-3xl overflow-hidden">
              {/* Flowing geometric background elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-white/10 to-accent/20 rounded-full blur-3xl animate-fluid-motion"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-accent/20 to-white/10 curved-element blur-2xl animate-geometric-float"></div>
              <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-white/5 organic-shape blur-xl animate-fluid-motion" style={{ animationDelay: '8s' }}></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-12 text-center text-white">
              <div className="max-w-3xl mx-auto mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 font-playfair relative">
                  Ready to Transform Your Digital Presence?
                  <div className="absolute -top-2 -right-8 w-4 h-4 bg-accent/40 rounded-full animate-geometric-float"></div>
                </h3>
                <p className="text-xl opacity-90 leading-relaxed">
                  Join successful businesses who trust Bernoff Co to manage their digital future. 
                  Let's discuss how we can drive your growth together.
                </p>
              </div>

              {/* Enhanced feature cards with geometric elements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {ctaFeatures.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-accent/30 to-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-geometric-float"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/10 curved-element opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-fluid-motion"></div>
                    
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-white/20 to-accent/20 rounded-xl relative">
                        {feature.icon}
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-accent/50 rounded-full animate-geometric-float"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-accent">{feature.title}</h4>
                      <p className="font-semibold text-white">{feature.subtitle}</p>
                      <p className="text-sm text-white/80">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced call to action button */}
              <div className="flex flex-col items-center space-y-4">
                <Button 
                  onClick={() => document.getElementById('discovery-call')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-500 hover:scale-105 text-lg flex items-center gap-3 relative overflow-hidden group shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative z-10 flex items-center gap-3">
                    Start Your Transformation
                    <ArrowRight size={20} />
                  </div>
                </Button>
                
                <p className="text-sm text-white/70">
                  Book your free consultation • No commitment required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
