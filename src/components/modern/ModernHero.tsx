
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Code, Palette, TrendingUp, Sparkles } from "lucide-react";

const ModernHero = () => {
  const scrollToDiscoveryCall = () => {
    const element = document.getElementById('discovery-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/30"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(215, 20%, 90%) 1px, transparent 1px), linear-gradient(90deg, hsl(215, 20%, 90%) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          opacity: 0.3
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center max-w-5xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Modern Web Development Excellence</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]">
            <span className="text-foreground">Build the future.</span>
            <br />
            <span className="text-gradient">Ship today.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Transform your vision into exceptional digital experiences. We craft scalable web applications with precision, elegance, and cutting-edge technology.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Ship in weeks, not months', 'Enterprise-grade quality', 'Fixed pricing', '24/7 support'].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button 
              onClick={scrollToDiscoveryCall}
              size="lg"
              className="gradient-primary text-white font-semibold px-10 py-7 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group border-0"
            >
              <span>Start your project</span>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 bg-white hover:bg-slate-50 px-10 py-7 rounded-2xl text-lg font-semibold transition-all duration-300"
            >
              Explore services
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="font-medium">50+ Projects delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <span className="font-medium">100% Client satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              <span className="font-medium">3 Years excellence</span>
            </div>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: <Code className="w-7 h-7" />,
              title: "Development",
              description: "Modern web applications built with the latest technologies and best practices"
            },
            {
              icon: <Palette className="w-7 h-7" />,
              title: "Design",
              description: "Stunning interfaces crafted with attention to every pixel and interaction"
            },
            {
              icon: <TrendingUp className="w-7 h-7" />,
              title: "Growth",
              description: "Strategic solutions engineered to drive measurable business results"
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-3xl border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
