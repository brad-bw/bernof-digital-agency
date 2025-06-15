
import React from 'react';
import { DollarSign, Euro, PoundSterling, Bitcoin } from 'lucide-react';
import { Badge } from '../ui/badge';

export const PaymentMethodsSection = () => {
  const paymentMethods = [
    { currency: 'GBP', icon: <PoundSterling className="w-4 h-4" />, label: 'GBP' },
    { currency: 'USD', icon: <DollarSign className="w-4 h-4" />, label: 'USD' },
    { currency: 'EUR', icon: <Euro className="w-4 h-4" />, label: 'EUR' },
    { currency: 'AUD', icon: <DollarSign className="w-4 h-4" />, label: 'AUD' },
    { currency: 'BTC', icon: <Bitcoin className="w-4 h-4" />, label: 'Bitcoin' },
  ];

  return (
    <div className="mt-12 mb-8 py-6 bg-gray-50/50 rounded-xl border border-gray-100">
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-medium text-gray-800">Global Payment Support:</span> We accept multiple currencies for your convenience
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-3">
          {paymentMethods.map((method) => (
            <Badge
              key={method.currency}
              variant="outline"
              className="flex items-center gap-2 px-3 py-1.5 bg-white hover:bg-primary/5 hover:border-primary/30 transition-colors duration-200"
            >
              <div className="text-primary">
                {method.icon}
              </div>
              <span className="text-xs font-medium">{method.label}</span>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
