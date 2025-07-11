
import { CheckCircle, X, AlertTriangle } from "lucide-react";

const comparisonData = [
  {
    category: "Cost",
    ukAgency: "£80-£120/hour",
    ukAgencyIcon: X,
    ukAgencyColor: "text-red-500",
    bernofCo: "£32-£48/hour",
    bernofCoIcon: CheckCircle,
    bernofCoColor: "text-green-500"
  },
  {
    category: "Project Timeline",
    ukAgency: "3-6 months",
    ukAgencyIcon: AlertTriangle,
    ukAgencyColor: "text-orange-500",
    bernofCo: "4-8 weeks",
    bernofCoIcon: CheckCircle,
    bernofCoColor: "text-green-500"
  },
  {
    category: "Availability",
    ukAgency: "4-6 month waiting",
    ukAgencyIcon: X,
    ukAgencyColor: "text-red-500",
    bernofCo: "48h project start",
    bernofCoIcon: CheckCircle,
    bernofCoColor: "text-green-500"
  },
  {
    category: "Team Size",
    ukAgency: "2-3 developers",
    ukAgencyIcon: AlertTriangle,
    ukAgencyColor: "text-orange-500",
    bernofCo: "Full team access",
    bernofCoIcon: CheckCircle,
    bernofCoColor: "text-green-500"
  },
  {
    category: "Technology Stack",
    ukAgency: "Limited expertise",
    ukAgencyIcon: AlertTriangle,
    ukAgencyColor: "text-orange-500",
    bernofCo: "Latest frameworks",
    bernofCoIcon: CheckCircle,
    bernofCoColor: "text-green-500"
  }
];

export const UKWebComparison = () => {
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
              Why UK businesses are
              <span className="block text-red-600">overpaying for web development</span>
            </h2>
            <p className="text-xl text-gray-600 font-satoshi max-w-3xl mx-auto">
              Industry research reveals the true cost of working with local agencies vs. European alternatives
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
                <h3 className="text-lg font-satoshi font-semibold text-red-600">UK Agencies</h3>
                <p className="text-sm font-satoshi text-gray-500 mt-1">Traditional approach</p>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-satoshi font-semibold text-brand-teal">Bernof Co</h3>
                <p className="text-sm font-satoshi text-gray-500 mt-1">Smart alternative</p>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {comparisonData.map((item, index) => {
                const UKIcon = item.ukAgencyIcon;
                const BernofIcon = item.bernofCoIcon;
                
                return (
                  <div key={index} className="grid grid-cols-3 hover:bg-gray-50 transition-colors">
                    <div className="p-6">
                      <span className="font-satoshi font-medium text-gray-900">{item.category}</span>
                    </div>
                    <div className="p-6 text-center border-x border-gray-200">
                      <div className="flex items-center justify-center space-x-2">
                        <UKIcon className={`w-5 h-5 ${item.ukAgencyColor}`} />
                        <span className="font-satoshi text-gray-700">{item.ukAgency}</span>
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
                Save thousands while getting better quality and faster delivery
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-3xl font-satoshi font-bold text-brand-teal mb-2">15,000+</div>
              <div className="text-gray-600 font-satoshi">Unfilled IT positions in UK</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-3xl font-satoshi font-bold text-brand-teal mb-2">4-6 months</div>
              <div className="text-gray-600 font-satoshi">Average hiring time</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-3xl font-satoshi font-bold text-brand-teal mb-2">£149B</div>
              <div className="text-gray-600 font-satoshi">UK tech sector value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
