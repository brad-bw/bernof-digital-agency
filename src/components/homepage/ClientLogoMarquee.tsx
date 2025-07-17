
import React from 'react';

const ClientLogoMarquee = () => {
  // Using placeholder logos - in real implementation, these would be actual client logos
  const logos = [
    { name: 'Accenture', src: 'https://images.ctfassets.net/w6r2i5d8q73s/7qqYuOhg1XTnQgadkFNiAI/36f4e55d8f672c9ad1a1bc742f9a356e/Logo-Accenture.svg' },
    { name: 'Comcast', src: 'https://images.ctfassets.net/w6r2i5d8q73s/39Fxqujl1tqb7E0wuVSTZb/b425bd1f604601ab6a8cc1892792befe/Logo-Comcast.svg' },
    { name: 'CVS Health', src: 'https://images.ctfassets.net/w6r2i5d8q73s/7lcceRAA48IOYIq81FwiDy/27fba31958cc2c3999d758dee92a8d2d/Logo-CVS-Health.svg' },
    { name: 'Danaher', src: 'https://images.ctfassets.net/w6r2i5d8q73s/3EuFwdkoYJOlxxZ8KNrSA8/279c6de72a01c38ecd14eded6e5949e3/Logo-Danaher.svg' },
    { name: 'Deloitte', src: 'https://images.ctfassets.net/w6r2i5d8q73s/6pwT3MtxBInt7oNINB4Li6/0d73ea7a8fc668ca7909f599ce42ee90/Logo-Delloite.svg' },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-charcoal font-semibold mb-8 text-lg">
          Trusted by the next generation of innovators
        </h3>
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-pause-on-hover">
            <div className="flex space-x-16 px-8 flex-shrink-0">
              {logos.map((logo, index) => (
                <img
                  key={`first-${index}`}
                  src={logo.src}
                  className="h-8 grayscale opacity-60 hover:opacity-80 transition-opacity duration-300"
                  alt={`${logo.name} logo`}
                />
              ))}
            </div>
            <div className="flex space-x-16 px-8 flex-shrink-0">
              {logos.map((logo, index) => (
                <img
                  key={`second-${index}`}
                  src={logo.src}
                  className="h-8 grayscale opacity-60 hover:opacity-80 transition-opacity duration-300"
                  alt={`${logo.name} logo`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogoMarquee;
