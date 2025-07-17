
import React from 'react';

const CustomerLogosSection = () => {
  const logos = [
    { name: "Accenture", src: "https://images.ctfassets.net/w6r2i5d8q73s/7qqYuOhg1XTnQgadkFNiAI/36f4e55d8f672c9ad1a1bc742f9a356e/Logo-Accenture.svg" },
    { name: "Comcast", src: "https://images.ctfassets.net/w6r2i5d8q73s/39Fxqujl1tqb7E0wuVSTZb/b425bd1f604601ab6a8cc1892792befe/Logo-Comcast.svg" },
    { name: "CVS Health", src: "https://images.ctfassets.net/w6r2i5d8q73s/7lcceRAA48IOYIq81FwiDy/27fba31958cc2c3999d758dee92a8d2d/Logo-CVS-Health.svg" },
    { name: "Danaher", src: "https://images.ctfassets.net/w6r2i5d8q73s/3EuFwdkoYJOlxxZ8KNrSA8/279c6de72a01c38ecd14eded6e5949e3/Logo-Danaher.svg" },
    { name: "Deloitte", src: "https://images.ctfassets.net/w6r2i5d8q73s/6pwT3MtxBInt7oNINB4Li6/0d73ea7a8fc668ca7909f599ce42ee90/Logo-Delloite.svg" },
    { name: "Dropbox", src: "https://images.ctfassets.net/w6r2i5d8q73s/5wsL1M2LKRoe0jbv5yj0kM/77b1eb193453975bc2b6b931b0da3b55/Logo-Dropbox.svg" },
    { name: "Hanes", src: "https://images.ctfassets.net/w6r2i5d8q73s/FRhbgj2OqoAKNalplKqwC/084b68e4be26647cdd82cf54ac7941ad/Logo-Hanes.svg" },
    { name: "H&R Block", src: "https://images.ctfassets.net/w6r2i5d8q73s/7eMrWKnItcRdYc7KJfKjOs/75ad57cac9321832e74714107f27f3fd/Logo-Hr-block.svg" },
    { name: "Kimberly-Clark", src: "https://images.ctfassets.net/w6r2i5d8q73s/4Sl71c85CSimVrBQ6OIdI0/1e954c70c12bca3947b91e14462afb51/Logo-Kimberly-Clark.svg" }
  ];

  return (
    <section className="bg-gray-900 text-white py-20 overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
          .logo-ticker-wrapper {
            display: flex;
            flex-wrap: nowrap;
            overflow: hidden;
            position: relative;
            padding: 1rem 0;
          }
          
          .logo-ticker-container {
            display: flex;
            width: max-content;
            flex-wrap: nowrap;
            animation: ticker-scroll 60s linear infinite;
          }

          .logo-ticker-wrapper:hover .logo-ticker-container {
            animation-play-state: paused;
          }
          
          .logo-ticker-item {
            display: flex;
            align-items: center;
            padding: 0 40px;
            flex-shrink: 0;
          }

          .logo-ticker-item img {
            max-height: 48px;
            width: auto;
            filter: brightness(0) invert(1);
            opacity: 0.7;
            transition: opacity 0.3s ease;
          }

          .logo-ticker-item:hover img {
            opacity: 1;
          }

          @keyframes ticker-scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @media (max-width: 768px) {
            .logo-ticker-item {
              padding: 0 25px;
            }
          }
        `
      }} />

      <div className="container mx-auto px-6">
        <h2 className="text-white text-center text-2xl md:text-3xl font-semibold mb-15">
          Trusted by industry-leading brands
        </h2>
      </div>

      <div className="logo-ticker-wrapper">
        <div className="logo-ticker-container">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="logo-ticker-item">
              <img alt={`${logo.name} logo`} src={logo.src} />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="logo-ticker-item">
              <img alt={`${logo.name} logo`} src={logo.src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerLogosSection;
