
import React from 'react';

const LogoSection = () => {
  return (
    <div className="flex items-center space-x-4">
      <svg 
        width="60" 
        height="60" 
        viewBox="0 0 60 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
      >
        {/* Main geometric shape - left angular piece */}
        <path 
          d="M0 0 L20 0 L20 20 L10 30 L0 20 Z" 
          fill="#2D5A5A"
        />
        
        {/* Main geometric shape - right curved piece */}
        <path 
          d="M20 0 L60 0 C60 22.091 42.091 40 20 40 L20 20 C31.046 20 40 11.046 40 0 L20 0 Z" 
          fill="#2D5A5A"
        />
        
        {/* Bottom curved element */}
        <path 
          d="M20 20 C31.046 20 40 28.954 40 40 L60 40 C60 17.909 42.091 0 20 0 L20 20 Z" 
          fill="#2D5A5A"
        />
      </svg>
      
      <div className="flex flex-col">
        <div className="flex items-baseline space-x-1">
          <span className="font-light text-3xl text-primary tracking-wide">bernof</span>
          <span className="font-light text-3xl text-primary tracking-wide">co.</span>
        </div>
        <span className="font-light text-sm text-gray-600 tracking-wider -mt-1">managing the future</span>
      </div>
    </div>
  );
};

export default LogoSection;
