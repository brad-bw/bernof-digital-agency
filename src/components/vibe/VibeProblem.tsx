
import { AlertTriangle } from "lucide-react";

const VibeProblem = () => {
  const tools = [
    {
      name: "Cursor AI",
      logo: "https://www.cursor.com/favicon.ico",
      issues: ["Version inconsistencies", "Prompt credit burning", "Context limitations"],
      fallbackLogo: "/lovable-uploads/7925c9db-4f1b-46eb-8237-eec49d499d8e.png"
    },
    {
      name: "Lovable",
      logo: "https://lovable.dev/favicon.ico",
      issues: ["Limited backend control", "Scaling issues", "Deployment challenges"]
    },
    {
      name: "Bolt.new",
      logo: "/lovable-uploads/3ca0f47e-971a-4e40-bbf7-cea4a375cfa2.png",
      issues: ["Security vulnerabilities", "Production gaps", "Performance issues"]
    },
    {
      name: "Bubble",
      logo: "/lovable-uploads/7925c9db-4f1b-46eb-8237-eec49d499d8e.png",
      issues: ["Complex workflow debugging", "Performance bottlenecks", "Scaling limitations"]
    },
    {
      name: "v0.dev",
      logo: "/lovable-uploads/cbc5e8c7-7bae-421a-bc68-8e1b51b33258.png",
      issues: ["CSS consistency problems", "Limited customization", "Integration challenges"]
    },
    {
      name: "Webflow",
      logo: "https://webflow.com/favicon.ico",
      issues: ["Complex interactions debugging", "CMS limitations", "Code export issues"]
    },
    {
      name: "Framer",
      logo: "https://framer.com/favicon.ico",
      issues: ["Code export complications", "Performance issues", "Responsive problems"]
    },
    {
      name: "Claude Artifacts",
      logo: "https://claude.ai/favicon.ico",
      issues: ["Context limitations", "Integration challenges", "Scaling difficulties"]
    },
    {
      name: "Windsurf",
      logo: "https://codeium.com/favicon.ico",
      issues: ["Environment configuration", "Dependency management", "Deployment issues"]
    },
    {
      name: "Replit",
      logo: "/lovable-uploads/1e7c062a-48f0-41c9-a602-8369aed7b963.png",
      issues: ["Deployment challenges", "Scaling limitations", "Performance constraints"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            The Vibe Coding{" "}
            <span className="text-red-500">Reality Check</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AI coding tools promise quick prototypes, but reality hits hard when you need production-ready applications. 
            Here's what developers are really experiencing across the most popular platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {tools.map((tool, index) => (
            <div key={index} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-red-200">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} logo`} 
                    onError={(e) => {
                      if (tool.fallbackLogo) {
                        e.currentTarget.src = tool.fallbackLogo;
                      } else {
                        e.currentTarget.style.display = 'none';
                        const fallbackDiv = document.createElement('div');
                        fallbackDiv.className = 'w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 font-bold text-sm';
                        fallbackDiv.textContent = tool.name.charAt(0);
                        e.currentTarget.parentElement!.appendChild(fallbackDiv);
                      }
                    }} 
                    className="w-12 h-12 object-contain" 
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-3">{tool.name}</h3>
                
                <ul className="space-y-2">
                  {tool.issues.map((issue, issueIndex) => (
                    <li key={issueIndex} className="flex items-start gap-2 text-xs text-gray-600">
                      <AlertTriangle className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="font-bold mb-4 text-primary text-4xl">
              Sound Familiar?
            </h3>
            <p className="text-lg mb-8 text-gray-700">
              You're not alone. Thousands of developers hit these walls every day. 
              The good news? We've been solving these exact problems for years.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">73%</div>
                <div className="text-sm text-gray-600">Of AI-generated apps fail in production</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">48hrs</div>
                <div className="text-sm text-gray-600">Average time stuck on deployment issues</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">$12K</div>
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
