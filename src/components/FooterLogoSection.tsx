
import React from 'react';

const FooterLogoSection = () => {
  return (
    <div className="flex items-center space-x-4">
      <img 
        src="/images/bernof-logo-white-alt.png"
        alt="Bernof Co. Logo"
        width="240"
        height="60"
        className="transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default FooterLogoSection;
