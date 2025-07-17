
import React from 'react';

const FinalCTA = () => {
  return (
    <section id="contact" className="bg-brand-teal text-white">
      <div className="container mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Ready to build your digital future?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-8">
          Let's discuss your project. We provide clear, comprehensive quotes and strategic advice to help you make the best decision for your business. No pressure, just possibilities.
        </p>
        <a
          href="#"
          className="inline-block bg-brand-gold text-brand-teal font-bold py-4 px-10 rounded-lg text-xl hover:opacity-90 transition-opacity duration-300 shadow-2xl animate-pulse-slow"
        >
          Get Your Free Quote
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
