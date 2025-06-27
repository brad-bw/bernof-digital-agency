
import { TrendingUp, Clock, Award, Users } from "lucide-react";

const CaseStudiesStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "98%",
      label: "Project Success Rate",
      description: "On-time delivery with quality assurance"
    },
    {
      icon: Clock,
      value: "4.8",
      label: "Average Project Duration",
      description: "Weeks from concept to launch"
    },
    {
      icon: Award,
      value: "100+",
      label: "Completed Projects",
      description: "Across various industries"
    },
    {
      icon: Users,
      value: "95%",
      label: "Client Retention Rate",
      description: "Long-term partnerships"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-brand-teal to-brand-teal-light">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-inter">
              Proven Track Record
            </h2>
            <p className="text-xl text-white/90 font-inter">
              Numbers that speak for our expertise and commitment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 font-inter">{stat.value}</div>
                <div className="text-lg font-semibold text-white/90 mb-2 font-inter">{stat.label}</div>
                <div className="text-sm text-white/70 font-inter">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesStats;
