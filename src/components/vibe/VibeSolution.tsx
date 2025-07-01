
import { CheckCircle, Shield, Zap, Wrench } from "lucide-react";

const VibeSolution = () => {
  const solutions = [
    {
      icon: Zap,
      title: "One-time Code Rescue",
      description: "Emergency fixes for critical issues that are blocking your progress right now."
    },
    {
      icon: Shield,
      title: "Production Migration",
      description: "Transform your prototype into a scalable, secure, production-ready application."
    },
    {
      icon: Wrench,
      title: "Custom Integrations",
      description: "Connect APIs, databases, and third-party services that AI tools can't handle."
    },
    {
      icon: CheckCircle,
      title: "Ongoing Maintenance",
      description: "Keep your creation running smoothly with expert monitoring and support."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your AI Development{" "}
            <span className="text-accent">Lifeline</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Don't let AI tool limitations kill your vision. We bridge the gap between 
            rapid prototyping and production-ready applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                <solution.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-white/80">{solution.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Why Choose Our Vibe Coding Support?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Deep AI Tool Knowledge</h4>
                <p className="text-sm text-white/80">We know every quirk, limitation, and workaround for popular AI coding tools.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Production Experience</h4>
                <p className="text-sm text-white/80">50+ successful migrations from prototype to production-ready applications.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">24/7 Emergency Support</h4>
                <p className="text-sm text-white/80">Critical issues don't wait for business hours. Neither do we.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Technology Agnostic</h4>
                <p className="text-sm text-white/80">Whether it's React, Vue, Python, or Node.js - we've got you covered.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Security First</h4>
                <p className="text-sm text-white/80">We fix the security vulnerabilities that AI tools often introduce.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Scalable Solutions</h4>
                <p className="text-sm text-white/80">Architecture designed to grow with your success, not break under pressure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibeSolution;
