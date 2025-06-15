
import React from 'react';
import { Badge } from '../ui/badge';

export const PaymentMethodsSection = () => {
  const paymentMethods = [
    { currency: 'GBP', symbol: '£', label: 'British Pound' },
    { currency: 'USD', symbol: '$', label: 'US Dollar' },
    { currency: 'EUR', symbol: '€', label: 'Euro' },
    { currency: 'AUD', symbol: 'A$', label: 'Australian Dollar' },
    { currency: 'BTC', symbol: '₿', label: 'Bitcoin' },
  ];

  return (
    <div className="mt-8 mb-4 relative">
      {/* Simplified geometric background pattern */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute -top-2 -left-4 w-16 h-16 bg-primary/3 rounded-full opacity-40"></div>
        <div className="absolute -bottom-3 -right-6 w-20 h-20 bg-accent/3 rounded-full opacity-30"></div>
      </div>
      
      <div className="relative bg-gradient-to-r from-gray-50/60 to-white/80 rounded-xl border border-gray-200/40 py-4 px-5">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-6 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <h3 className="text-base font-semibold text-gray-900">Global Payment Support</h3>
            <div className="w-6 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-3">
            {paymentMethods.map((method) => (
              <Badge
                key={method.currency}
                variant="outline"
                className="flex items-center gap-2 px-3 py-1.5 bg-white/80 border-gray-200/60 hover:bg-white hover:border-primary/20 transition-all duration-200 text-gray-700 hover:text-primary"
              >
                <span className="text-sm font-bold text-primary">
                  {method.symbol}
                </span>
                <div className="text-left">
                  <div className="text-xs font-semibold text-gray-900">{method.currency}</div>
                </div>
              </Badge>
            ))}
          </div>
          
          <div className="mt-3 text-xs text-gray-500">
            <span className="inline-flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              Secure payments processed globally
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
