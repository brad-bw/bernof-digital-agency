
import React from 'react';

const CustomerLogos = () => {
  const logos = [
    { name: "Microsoft", width: 120, height: 48 },
    { name: "Google", width: 100, height: 48 },
    { name: "Amazon", width: 110, height: 48 },
    { name: "Apple", width: 90, height: 48 },
    { name: "Meta", width: 85, height: 48 },
    { name: "Netflix", width: 115, height: 48 },
    { name: "Spotify", width: 105, height: 48 },
    { name: "Airbnb", width: 95, height: 48 },
    { name: "Uber", width: 80, height: 48 }
  ];

  const secondRowLogos = [
    { name: "Tesla", width: 100, height: 48 },
    { name: "PayPal", width: 110, height: 48 },
    { name: "Slack", width: 90, height: 48 },
    { name: "Adobe", width: 95, height: 48 },
    { name: "Shopify", width: 105, height: 48 },
    { name: "Zoom", width: 85, height: 48 },
    { name: "Stripe", width: 100, height: 48 },
    { name: "Dropbox", width: 110, height: 48 },
    { name: "Discord", width: 95, height: 48 }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-gray-600 text-sm font-medium mb-8">
          Trusted by leading companies worldwide
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center"
              style={{ width: logo.width, height: logo.height }}
            >
              <span className="text-gray-400 font-semibold text-sm">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;
