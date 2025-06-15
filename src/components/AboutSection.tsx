
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Zap } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Premium Quality",
      description: "We deliver exceptional results that exceed expectations and drive real business value."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Client Partnership",
      description: "Your success is our success. We build lasting relationships through transparent collaboration."
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Innovation Focus",
      description: "Cutting-edge technology and creative solutions that keep you ahead of the competition."
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

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Managing the Future, Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Bernoff Co, we combine strategic thinking with technical excellence to deliver 
              digital solutions that transform businesses and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Commitment to Excellence
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We believe in delivering more than just services – we deliver results. Our comprehensive 
                approach ensures every project meets the highest standards of quality, performance, and user experience.
              </p>
              
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        {value.icon}
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

          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join successful businesses who trust Bernoff Co to manage their digital future. 
              Let's discuss how we can drive your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold">Free</div>
                <div className="text-sm opacity-90">30-minute consultation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Custom</div>
                <div className="text-sm opacity-90">Tailored proposals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Guaranteed</div>
                <div className="text-sm opacity-90">Satisfaction promise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
