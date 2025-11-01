
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Zap, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ModernAbout = () => {
  const values = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Quality First",
      description: "Every project is built to enterprise standards with clean code, comprehensive testing, and thorough documentation."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Partnership Approach", 
      description: "We work as an extension of your team, providing transparent communication and collaborative problem-solving."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Speed & Innovation",
      description: "Rapid development cycles using cutting-edge technologies to get your product to market faster."
    }
  ];

  const achievements = [
    "ISO 27001 security compliance",
    "99.9% uptime guarantee", 
    "GDPR & privacy compliant",
    "24/7 monitoring & support",
    "Agile development methodology",
    "Continuous integration & deployment"
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
              Why choose us
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              Built for the <span className="text-gradient">modern web</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We blend technical mastery with business insight to create solutions 
              that perform flawlessly and deliver measurable results.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            
            {/* Left column - Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="group flex items-start gap-5 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column - Achievements */}
            <div className="bg-white p-10 rounded-3xl border border-border shadow-md">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Enterprise-grade standards
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Every project meets the rigorous quality standards we deliver for Fortune 500 companies.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-foreground font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="bg-white rounded-3xl p-12 mb-16 border border-border shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-5xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">50+</div>
                <div className="text-muted-foreground text-sm font-medium">Projects delivered</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">3</div>
                <div className="text-muted-foreground text-sm font-medium">Years experience</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">100%</div>
                <div className="text-muted-foreground text-sm font-medium">Client satisfaction</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">24/7</div>
                <div className="text-muted-foreground text-sm font-medium">Support available</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative overflow-hidden text-center gradient-primary rounded-3xl p-16 text-white shadow-glow">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Let's build something <br />extraordinary together
              </h3>
              <p className="text-xl opacity-95 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Ready to transform your vision into reality? Let's discuss how we can accelerate your growth with cutting-edge technology.
              </p>
              <Button 
                onClick={() => document.getElementById('discovery-call')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-white text-primary hover:bg-slate-50 font-bold px-12 py-7 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] group"
              >
                <span>Start your project</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;
