
import { AlertTriangle } from "lucide-react";

const VibeProblem = () => {
  const tools = [
    {
      name: "Cursor AI",
      logo: "https://cursor.sh/favicon.ico",
      issues: ["Version inconsistencies", "Prompt credit burning", "Context limitations"],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Lovable",
      logo: "https://lovable.dev/favicon.ico", 
      issues: ["Limited backend control", "Scaling issues", "Deployment challenges"],
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Bolt.new",
      logo: "https://bolt.new/favicon.ico",
      issues: ["Security vulnerabilities", "Production gaps", "Performance issues"],
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Bubble",
      logo: "https://bubble.io/favicon.ico",
      issues: ["Complex workflow debugging", "Performance bottlenecks", "Scaling limitations"],
      color: "from-blue-400 to-blue-500"
    },
    {
      name: "v0.dev",
      logo: "https://v0.dev/favicon.ico",
      issues: ["CSS consistency problems", "Limited customization", "Integration challenges"],
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Webflow",
      logo: "https://webflow.com/favicon.ico",
      issues: ["Complex interactions debugging", "CMS limitations", "Code export issues"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Framer",
      logo: "https://framer.com/favicon.ico",
      issues: ["Code export complications", "Performance issues", "Responsive problems"],
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "Claude Artifacts",
      logo: "https://claude.ai/favicon.ico",
      issues: ["Context limitations", "Integration challenges", "Scaling difficulties"],
      color: "from-amber-500 to-amber-600"
    },
    {
      name: "Windsurf",
      logo: "https://windsurf.codeium.com/favicon.ico",
      issues: ["Environment configuration", "Dependency management", "Deployment issues"],
      color: "from-teal-500 to-teal-600"
    },
    {
      name: "Replit",
      logo: "https://replit.com/favicon.ico",
      issues: ["Deployment challenges", "Scaling limitations", "Performance constraints"],
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            The Vibe Coding{" "}
            <span className="text-red-500">Reality Check</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AI coding tools promise quick prototypes, but reality hits hard when you need production-ready applications. 
            Here's what developers are really experiencing across the most popular platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {tools.map((tool, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center overflow-hidden`}>
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} logo`}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<div class="w-6 h-6 text-white font-bold text-xs flex items-center justify-center">${tool.name.charAt(0)}</div>`;
                    }}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{tool.name}</h3>
              </div>
              
              <ul className="space-y-2">
                {tool.issues.map((issue, issueIndex) => (
                  <li key={issueIndex} className="flex items-start gap-2 text-xs text-gray-600">
                    <AlertTriangle className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Sound Familiar?
            </h3>
            <p className="text-lg text-red-700 mb-8">
              You're not alone. Thousands of developers hit these walls every day. 
              The good news? We've been solving these exact problems for years.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">73%</div>
                <div className="text-sm text-gray-600">Of AI-generated apps fail in production</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">48hrs</div>
                <div className="text-sm text-gray-600">Average time stuck on deployment issues</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">$12K</div>
                <div className="text-sm text-gray-600">Average cost of starting over</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibeProblem;
