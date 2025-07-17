
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
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 max-w-4xl mx-auto leading-relaxed">
              Trusted by 50+ companies and 10,000+ users worldwide to build exceptional digital experiences
            </h2>
          </div>

          {/* Logo Ticker - First Row */}
          <div className="relative overflow-hidden mb-8">
            <div className="flex animate-marquee-left gap-12 items-center">
              {[...logos, ...logos].map((logo, index) => (
                <div 
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  style={{ minWidth: `${logo.width}px`, height: `${logo.height}px` }}
                >
                  <div 
                    className="bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 font-medium text-sm"
                    style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
                  >
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo Ticker - Second Row (desktop only) */}
          <div className="hidden lg:block relative overflow-hidden">
            <div className="flex animate-marquee-right gap-12 items-center">
              {[...secondRowLogos, ...secondRowLogos].map((logo, index) => (
                <div 
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  style={{ minWidth: `${logo.width}px`, height: `${logo.height}px` }}
                >
                  <div 
                    className="bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 font-medium text-sm"
                    style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
                  >
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;
