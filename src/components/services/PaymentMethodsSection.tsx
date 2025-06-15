
import React from 'react';
import { Badge } from '../ui/badge';

export const PaymentMethodsSection = () => {
  const paymentMethods = [
    { currency: 'GBP', symbol: '£', label: 'British Pound' },
    { currency: 'USD', symbol: '$', label: 'US Dollar' },
    { currency: 'EUR', symbol: '€', label: 'Euro' },
    { currency: 'AUD', symbol: '$', label: 'Australian Dollar', flag: 'AU' },
    { currency: 'BTC', symbol: '₿', label: 'Bitcoin' },
  ];

  return (
    <div className="mt-12 mb-8 relative">
      {/* Curved geometric background pattern inspired by your design */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute -top-4 -left-8 w-24 h-24 bg-primary/5 rounded-full opacity-60"></div>
        <div className="absolute -bottom-6 -right-12 w-32 h-32 bg-accent/5 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/8 rounded-full opacity-50"></div>
      </div>
      
      <div className="relative bg-gradient-to-r from-gray-50/80 to-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 py-8 px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-900">Global Payment Support</h3>
            <div className="w-8 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
          </div>
          
          <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto">
            We accept multiple currencies to serve our international clients seamlessly
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method.currency}
                className="group relative"
              >
                {/* Curved background element */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                
                <Badge
                  variant="outline"
                  className="relative flex items-center gap-3 px-4 py-2.5 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-primary"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full">
                    <span className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {method.symbol}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-gray-900">{method.currency}</div>
                    <div className="text-xs text-gray-500">{method.label}</div>
                  </div>
                </Badge>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-xs text-gray-500">
            <span className="inline-flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Secure payments processed globally
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
