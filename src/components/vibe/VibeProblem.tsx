
import { AlertTriangle } from "lucide-react";

const VibeProblem = () => {
  const tools = [
    {
      name: "Cursor AI",
      issues: ["Version inconsistencies", "Prompt credit burning", "Context limitations"]
    },
    {
      name: "Lovable",
      issues: ["Limited backend control", "Scaling issues", "Deployment challenges"]
    },
    {
      name: "Bolt.new",
      issues: ["Security vulnerabilities", "Production gaps", "Performance issues"]
    },
    {
      name: "Bubble",
      issues: ["Complex workflow debugging", "Performance bottlenecks", "Scaling limitations"]
    },
    {
      name: "v0.dev",
      issues: ["CSS consistency problems", "Limited customization", "Integration challenges"]
    },
    {
      name: "Webflow",
      issues: ["Complex interactions debugging", "CMS limitations", "Code export issues"]
    },
    {
      name: "Framer",
      issues: ["Code export complications", "Performance issues", "Responsive problems"]
    },
    {
      name: "Claude Artifacts",
      issues: ["Context limitations", "Integration challenges", "Scaling difficulties"]
    },
    {
      name: "Windsurf",
      issues: ["Environment configuration", "Dependency management", "Deployment issues"]
    },
    {
      name: "Replit",
      issues: ["Deployment challenges", "Scaling limitations", "Performance constraints"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Vibe Coding{" "}
            <span className="text-red-500">Reality Check</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI coding tools promise quick prototypes, but reality hits hard when you need production-ready applications. 
            Here's what developers are really experiencing:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{tool.name}</h3>
              </div>
              
              <ul className="space-y-2">
                {tool.issues.map((issue, issueIndex) => (
                  <li key={issueIndex} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Sound Familiar?
            </h3>
            <p className="text-lg text-red-700 mb-6">
              You're not alone. Thousands of developers hit these walls every day. 
              The good news? We've been solving these exact problems for years.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-red-600 mb-1">73%</div>
                <div className="text-sm text-gray-600">Of AI-generated apps fail in production</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-red-600 mb-1">48hrs</div>
                <div className="text-sm text-gray-600">Average time stuck on deployment issues</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-red-600 mb-1">$12K</div>
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
