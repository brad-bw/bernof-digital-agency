
import React from 'react';

const CustomerSection = () => {
  // Company logos with their names for better SEO and accessibility
  const companies = [
    { name: "Microsoft", logo: "🏢" },
    { name: "Google", logo: "🔍" },
    { name: "Amazon", logo: "📦" },
    { name: "Apple", logo: "🍎" },
    { name: "Meta", logo: "📱" },
    { name: "Netflix", logo: "🎬" },
    { name: "Spotify", logo: "🎵" },
    { name: "Uber", logo: "🚗" },
    { name: "Airbnb", logo: "🏠" },
    { name: "Tesla", logo: "⚡" },
    { name: "Shopify", logo: "🛍️" },
    { name: "Slack", logo: "💬" },
    { name: "Zoom", logo: "📹" },
    { name: "Adobe", logo: "🎨" },
    { name: "Salesforce", logo: "☁️" }
  ];

  return (
    <section className="py-20 bg-gray-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-accent/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-primary/30 rounded-full animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-inter text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Join 500+ companies worldwide who trust Bernof Co to transform their digital presence and drive sustainable growth.
          </p>
        </div>

        {/* Animated Logo Ticker */}
        <div className="relative">
          {/* First row - moving left to right */}
          <div className="flex overflow-hidden mb-8">
            <div className="flex animate-marquee whitespace-nowrap">
              {companies.slice(0, 8).map((company, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex items-center justify-center mx-8 bg-white rounded-2xl shadow-sm border border-gray-200/50 hover:shadow-md transition-all duration-300 group"
                  style={{ minWidth: '140px', height: '80px' }}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
                      {company.logo}
                    </div>
                    <div className="text-xs font-medium text-gray-700">
                      {company.name}
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {companies.slice(0, 8).map((company, index) => (
                <div
                  key={`row1-dup-${index}`}
                  className="flex items-center justify-center mx-8 bg-white rounded-2xl shadow-sm border border-gray-200/50 hover:shadow-md transition-all duration-300 group"
                  style={{ minWidth: '140px', height: '80px' }}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
                      {company.logo}
                    </div>
                    <div className="text-xs font-medium text-gray-700">
                      {company.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - moving right to left */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee-reverse whitespace-nowrap">
              {companies.slice(8, 15).map((company, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex items-center justify-center mx-8 bg-white rounded-2xl shadow-sm border border-gray-200/50 hover:shadow-md transition-all duration-300 group"
                  style={{ minWidth: '140px', height: '80px' }}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
                      {company.logo}
                    </div>
                    <div className="text-xs font-medium text-gray-700">
                      {company.name}
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {companies.slice(8, 15).map((company, index) => (
                <div
                  key={`row2-dup-${index}`}
                  className="flex items-center justify-center mx-8 bg-white rounded-2xl shadow-sm border border-gray-200/50 hover:shadow-md transition-all duration-300 group"
                  style={{ minWidth: '140px', height: '80px' }}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
                      {company.logo}
                    </div>
                    <div className="text-xs font-medium text-gray-700">
                      {company.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600 font-medium">Countries Served</div>
          </div>
          <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30">
            <div className="text-3xl font-bold text-primary mb-2">99%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translate3d(-100%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CustomerSection;
