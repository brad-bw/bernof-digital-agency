
import { TrendingUp, Users, MessageSquare, CheckCircle } from "lucide-react";

const VibeMarketInsights = () => {
  const insights = [
    {
      icon: TrendingUp,
      stat: "400%",
      label: "Growth in AI coding tools",
      description: "Vibe coding has stormed the market with tools like Cursor, Lovable, and Claude"
    },
    {
      icon: Users,
      stat: "73%",
      label: "Developers comparing options",
      description: "Users actively comparing traditional no-code tools like Bubble with AI alternatives"
    },
    {
      icon: MessageSquare,
      stat: "MVP Ready",
      label: "But not production-ready",
      description: "Research shows vibe coding is 'great for MVP but not ready for production'"
    },
    {
      icon: CheckCircle,
      stat: "Security First",
      label: "Common pain points",
      description: "Issues include security, CSS consistency, limited control, and network dependency"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The AI Coding Revolution: Market Reality
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Independent research reveals the explosive growth and critical challenges 
            facing AI-powered development tools in today's market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <insight.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">{insight.stat}</div>
              <div className="font-semibold text-gray-900 mb-3">{insight.label}</div>
              <p className="text-sm text-gray-600">{insight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VibeMarketInsights;
