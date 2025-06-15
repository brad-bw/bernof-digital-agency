
import React from 'react';
import { DollarSign, Euro, PoundSterling, Bitcoin } from 'lucide-react';

export const PaymentMethodsSection = () => {
  const paymentMethods = [
    { currency: 'GBP', icon: <PoundSterling className="w-6 h-6" />, label: 'British Pounds' },
    { currency: 'USD', icon: <DollarSign className="w-6 h-6" />, label: 'US Dollars' },
    { currency: 'EUR', icon: <Euro className="w-6 h-6" />, label: 'Euros' },
    { currency: 'AUD', icon: <DollarSign className="w-6 h-6" />, label: 'Australian Dollars' },
    { currency: 'BTC', icon: <Bitcoin className="w-6 h-6" />, label: 'Bitcoin' },
  ];

  return (
    <div className="mt-16 mb-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          We Accept Multiple Currencies
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Making it convenient for our global clients to work with us
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
        {paymentMethods.map((method, index) => (
          <div
            key={method.currency}
            className="flex flex-col items-center group hover:scale-110 transition-all duration-300"
          >
            <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-3 group-hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary group-hover:text-accent transition-colors duration-300">
                {method.icon}
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700 text-center">
              {method.currency}
            </span>
            <span className="text-xs text-gray-500 text-center">
              {method.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
