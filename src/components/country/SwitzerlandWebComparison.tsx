
import { CheckCircle, X, AlertTriangle } from "lucide-react";

const comparisonData = [
  {
    category: "Cost",
    swissAgency: "€90-€135/hour",
    swissAgencyIcon: X,
    swissAgencyColor: "text-red-500",
    bernofCo: "€38-€53/hour",
    bernofCoIcon: CheckCircle,
    bernofCoColor: "text-green-500"
  },
  {
    category: "Project Timeline",
    swissAgency: "4-8 months",
    swissAgencyIcon: AlertTriangle,
    swissAgencyColor: "text-orange-500",
    bernofCo: "4-8 weeks",
    bernofCoIcon: CheckCircle,
    bernofCoColor: "text-green-500"
  },
  {
    category: "Availability",
    swissAgency: "4-6 month waiting",
    swissAgencyIcon: X,
    swissAgencyColor: "text-red-500",
    bernofCo: "48h project start",
    bernofCoIcon: CheckCircle,
    bernofCoColor: "text-green-500"
  },
  {
    category: "Team Size",
    swissAgency: "2-3 developers",
    swissAgencyIcon: AlertTriangle,
    swissAgencyColor: "text-orange-500",
    bernofCo: "Full team access",
    bernofCoIcon: CheckCircle,
    bernofCoColor: "text-green-500"
  },
  {
    category: "Talent Pool",
    swissAgency: "Limited local talent",
    swissAgencyIcon: X,
    swissAgencyColor: "text-red-500",
    bernofCo: "European expertise",
    bernofCoIcon: CheckCircle,
    bernofCoColor: "text-green-500"
  }
];

export const SwitzerlandWebComparison = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-50 text-red-600 text-sm font-satoshi font-medium px-4 py-2 rounded-full mb-6">
              Market Reality Check
            </div>
            <h2 className="text-4xl lg:text-5xl font-satoshi font-bold text-gray-900 mb-6">
              Why Swiss businesses pay
              <span className="block text-red-600">3x more for web development</span>
            </h2>
            <p className="text-xl text-gray-600 font-satoshi max-w-3xl mx-auto">
              Swiss premium pricing meets European talent shortage - discover the smart alternative
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-satoshi font-semibold text-gray-900">Comparison</h3>
              </div>
              <div className="p-6 text-center border-x border-gray-200">
                <h3 className="text-lg font-satoshi font-semibold text-red-600">Swiss Agencies</h3>
                <p className="text-sm font-satoshi text-gray-500 mt-1">Premium pricing</p>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-satoshi font-semibold text-brand-teal">Bernof Co</h3>
                <p className="text-sm font-satoshi text-gray-500 mt-1">Smart alternative</p>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {comparisonData.map((item, index) => {
                const SwissIcon = item.swissAgencyIcon;
                const BernofIcon = item.bernofCoIcon;
                
                return (
                  <div key={index} className="grid grid-cols-3 hover:bg-gray-50 transition-colors">
                    <div className="p-6">
                      <span className="font-satoshi font-medium text-gray-900">{item.category}</span>
                    </div>
                    <div className="p-6 text-center border-x border-gray-200">
                      <div className="flex items-center justify-center space-x-2">
                        <SwissIcon className={`w-5 h-5 ${item.swissAgencyColor}`} />
                        <span className="font-satoshi text-gray-700">{item.swissAgency}</span>
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <BernofIcon className={`w-5 h-5 ${item.bernofCoColor}`} />
                        <span className="font-satoshi text-gray-700">{item.bernofCo}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Highlight */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 text-center border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-2xl font-satoshi font-bold text-green-600">60% Cost Savings</span>
              </div>
              <p className="text-gray-600 font-satoshi">
                Maintain Swiss quality standards while reducing costs significantly
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-3xl font-satoshi font-bold text-brand-teal mb-2">15,000+</div>
              <div className="text-gray-600 font-satoshi">IT specialist shortage</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-3xl font-satoshi font-bold text-brand-teal mb-2">3.2x</div>
              <div className="text-gray-600 font-satoshi">Higher than EU average</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-3xl font-satoshi font-bold text-brand-teal mb-2">4-6 months</div>
              <div className="text-gray-600 font-satoshi">Average hiring delay</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
