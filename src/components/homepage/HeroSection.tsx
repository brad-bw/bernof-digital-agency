
import React, { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    // Apply load animations on mount
    const elements = document.querySelectorAll('.load-hidden');
    elements.forEach((el) => {
      (el as HTMLElement).style.animationPlayState = 'running';
    });
  }, []);

  return (
    <section className="bg-off-white min-h-screen flex items-center px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 text-center md:text-left">
          <h1 
            className="load-hidden text-4xl md:text-6xl font-extrabold text-charcoal leading-tight mb-4"
            style={{ '--delay': '0.1s' } as React.CSSProperties}
          >
            Premium Software & Website Development for Your Business
          </h1>
          <p 
            className="load-hidden text-lg md:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0 mb-8"
            style={{ '--delay': '0.2s' } as React.CSSProperties}
          >
            We are the expert engineering partner for ambitious startups and small businesses. We build, upgrade, and scale the resilient digital platforms you need to grow.
          </p>
          <div 
            className="load-hidden flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            style={{ '--delay': '0.3s' } as React.CSSProperties}
          >
            <a 
              href="#contact" 
              className="bg-brand-teal text-white font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300 shadow-lg text-center"
            >
              Get a Free Quote
            </a>
            <a 
              href="#work" 
              className="bg-transparent text-brand-teal font-bold py-3 px-6 rounded-lg text-lg hover:bg-gray-200 transition-colors duration-300 text-center"
            >
              View Our Work →
            </a>
          </div>
        </div>
        <div className="md:w-1/3 mt-12 md:mt-0">
          <div className="w-full h-64 md:h-96 bg-gradient-to-br from-brand-teal/10 to-brand-gold/10 rounded-lg flex items-center justify-center border border-light-gray">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-teal/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-brand-teal rounded-full animate-pulse"></div>
              </div>
              <span className="text-gray-500 text-sm">3D Visual Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
