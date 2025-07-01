import { CheckCircle, Shield, Zap, Wrench, Users } from "lucide-react";
const VibeSolution = () => {
  const solutions = [{
    icon: Zap,
    title: "Emergency Fixes",
    description: "Critical issues resolved in hours, not days"
  }, {
    icon: Shield,
    title: "Production Migration",
    description: "Scale from prototype to enterprise-ready"
  }, {
    icon: Wrench,
    title: "Custom Integrations",
    description: "Connect APIs, databases, and services seamlessly"
  }, {
    icon: Users,
    title: "Ongoing Support",
    description: "Expert monitoring and maintenance"
  }];
  const benefits = ["Deep AI Tool Knowledge - We know every quirk and workaround", "Production Experience - 150+ successful migrations completed", "24/7 Emergency Support - Critical issues don't wait for business hours", "Technology Agnostic - React, Vue, Python, Node.js - we've got you covered", "Security First - We fix vulnerabilities that AI tools often introduce", "Scalable Solutions - Architecture designed to grow with your success"];
  return <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Your AI Development{" "}
            <span className="text-emerald-300">Lifeline</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Don't let AI tool limitations kill your vision. We bridge the gap between 
            rapid prototyping and production-ready applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution, index) => <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-emerald-300">
                <solution.icon className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-white/80 text-sm">{solution.description}</p>
            </div>)}
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-center mb-8">
            Why Choose Our Vibe Coding Support?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-sm">{benefit}</span>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default VibeSolution;