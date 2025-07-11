
import { CheckCircle, X, AlertTriangle } from "lucide-react";

const comparisonData = [
  {
    category: "Cost",
    italyAgency: "€60-€100/hour",
    italyAgencyIcon: AlertTriangle,
    italyAgencyColor: "text-orange-500",
    bernofCo: "€24-€40/hour",
    bernofCoIcon: CheckCircle,
    bernofCoColor: "text-green-500"
  },
  {
    category: "Project Timeline",
    italyAgency: "4-6 months",
    italyAgencyIcon: AlertTriangle,
    italyAgencyColor: "text-orange-500",
    bernofCo: "4-8 weeks",
    bernofCoIcon: CheckCircle,
    bernofCoColor: "text-green-500"
  },
  {
    category: "Availability",
    italyAgency: "2-4 month waiting",
    italyAgencyIcon: X,
    italyAgencyColor: "text-red-500",
    bernofCo: "48h project start",
    bernofCoIcon: CheckCircle,
    bernofCoColor: "text-green-500"
  },
  {
    category: "Technology Expertise",
    italyAgency: "Limited advanced tech",
    italyAgencyIcon: X,
    italyAgencyColor: "text-red-500",
    bernofCo: "Cutting-edge frameworks",
    bernofCoIcon: CheckCircle,
    bernofCoColor: "text-green-500"
  },
  {
    category: "Digital Transformation",
    italyAgency: "18 months behind EU",
    italyAgencyIcon: X,
    italyAgencyColor: "text-red-500",
    bernofCo: "Latest EU standards",
    bernofCoIcon: CheckCircle,
    bernofCoColor: "text-green-500"
  }
];

export const ItalyWebComparison = () => {
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
              Why Italian businesses struggle
              <span className="block text-red-600">with digital transformation</span>
            </h2>
            <p className="text-xl text-gray-600 font-satoshi max-w-3xl mx-auto">
              Bridge Italy's digital gap with advanced European development expertise
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
                <h3 className="text-lg font-satoshi font-semibold text-red-600">Italian Agencies</h3>
                <p className="text-sm font-satoshi text-gray-500 mt-1">Limited expertise</p>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-satoshi font-semibold text-brand-teal">Bernof Co</h3>
                <p className="text-sm font-satoshi text-gray-500 mt-1">Advanced solutions</p>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {comparisonData.map((item, index) => {
                const ItalyIcon = item.italyAgencyIcon;
                const BernofIcon = item.bernofCoIcon;
                
                return (
                  <div key={index} className="grid grid-cols-3 hover:bg-gray-50 transition-colors">
                    <div className="p-6">
                      <span className="font-satoshi font-medium text-gray-900">{item.category}</span>
                    </div>
                    <div className="p-6 text-center border-x border-gray-200">
                      <div className="flex items-center justify-center space-x-2">
                        <ItalyIcon className={`w-5 h-5 ${item.italyAgencyColor}`} />
                        <span className="font-satoshi text-gray-700">{item.italyAgency}</span>
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
                Accelerate your digital transformation with modern solutions
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-3xl font-satoshi font-bold text-brand-teal mb-2">4.2%</div>
              <div className="text-gray-600 font-satoshi">Digital economy of GDP</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-3xl font-satoshi font-bold text-brand-teal mb-2">135,000</div>
              <div className="text-gray-600 font-satoshi">Tech skills gap by 2025</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-3xl font-satoshi font-bold text-brand-teal mb-2">18 months</div>
              <div className="text-gray-600 font-satoshi">Behind EU digital average</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
