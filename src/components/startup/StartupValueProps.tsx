
import { Shield, Clock, DollarSign, Zap, Code, Users } from "lucide-react";

const StartupValueProps = () => {
  const valueProps = [
    {
      icon: DollarSign,
      title: "No Massive Upfront Investment",
      description: "Launch your MVP for a fraction of traditional development costs. Pay only for what you need, when you need it.",
      highlight: "70% less than hiring a dev team"
    },
    {
      icon: Clock,
      title: "Rapid Prototyping",
      description: "From idea to working prototype in weeks, not months. Get to market faster and start validating with real users.",
      highlight: "2-4 weeks to MVP"
    },
    {
      icon: Zap,
      title: "Built to Scale",
      description: "Your MVP is built with growth in mind. Add features, users, and functionality as your startup evolves.",
      highlight: "Future-proof architecture"
    },
    {
      icon: Shield,
      title: "Maintenance Freedom",
      description: "Project-based maintenance means no ongoing contracts. Update when you want, how you want, without breaking the bank.",
      highlight: "Pay per project only"
    },
    {
      icon: Code,
      title: "Modern Tech Stack",
      description: "We use the latest, most reliable technologies that ensure your app is fast, secure, and maintainable.",
      highlight: "Enterprise-grade quality"
    },
    {
      icon: Users,
      title: "Founder-Focused Support",
      description: "We understand startup challenges. Direct communication with our team, no account managers or middlemen.",
      highlight: "Direct founder support"
    }
  ];

  return (
    <section className="py-20 bg-white" id="startup-value">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Founders Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Bernof Co.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've helped over 100 startups go from idea to launch without breaking their budget or timeline.
            </p>
          </div>

          {/* Value Props Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div 
                key={index}
                className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-accent/20 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <prop.icon className="w-6 h-6 text-accent group-hover:text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {prop.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {prop.description}
                </p>
                
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold">
                  {prop.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupValueProps;
