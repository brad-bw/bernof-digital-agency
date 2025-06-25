
import { TrendingDown, DollarSign, Clock, Users, Sparkles } from "lucide-react";

interface CostComparisonProps {
  localCost: string;
  bernofCost: string;
  iconBg: string;
  IconComponent: React.ComponentType<any>;
}

export const CountryHeroCostComparison = ({ 
  localCost, 
  bernofCost, 
  iconBg, 
  IconComponent 
}: CostComparisonProps) => {
  return (
    <div className="space-y-8">
      {/* Cost Comparison Card */}
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
        {/* Abstract design elements */}
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-white/20 rounded-tl-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-tr-3xl"></div>
        
        <div className="text-center mb-8 relative z-10">
          <div className={`w-20 h-20 mx-auto mb-4 ${iconBg} rounded-2xl flex items-center justify-center shadow-lg`}>
            <IconComponent className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Cost Comparison</h2>
          <p className="text-gray-300">See how much you can save</p>
        </div>

        <div className="space-y-6 relative z-10">
          {/* Local Cost */}
          <div className="bg-red-900/30 rounded-xl p-6 border border-red-800/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/10 rounded-bl-xl"></div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 mb-1">Local Market Agencies</p>
                <p className="text-3xl font-bold text-red-400">{localCost}</p>
              </div>
              <TrendingDown className="w-8 h-8 text-red-400" />
            </div>
          </div>

          {/* VS Divider */}
          <div className="text-center relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <span className="bg-primary px-4 text-white font-bold text-xl">VS</span>
          </div>

          {/* Bernof Cost */}
          <div className="bg-primary/20 rounded-xl p-6 border border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-xl"></div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 mb-1">Bernof Co</p>
                <p className="text-3xl font-bold text-white">{bernofCost}</p>
              </div>
              <div className="text-right">
                <div className="bg-accent text-white px-4 py-2 rounded-lg font-bold text-lg mb-1 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  60% LESS
                </div>
                <p className="text-gray-300 text-sm">You Save</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
          <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-2">
            <Clock className="w-5 h-5 text-accent" />
          </div>
          <p className="text-lg font-bold text-white mb-1">48h</p>
          <p className="text-xs text-gray-300">Project Start</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
          <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-2">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <p className="text-lg font-bold text-white mb-1">50+</p>
          <p className="text-xs text-gray-300">Expert Devs</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-green-400"></div>
          <div className="w-10 h-10 bg-green-400/20 rounded-xl flex items-center justify-center mx-auto mb-2">
            <Sparkles className="w-5 h-5 text-green-400" />
          </div>
          <p className="text-lg font-bold text-white mb-1">60%</p>
          <p className="text-xs text-gray-300">Cost Savings</p>
        </div>
      </div>
    </div>
  );
};
