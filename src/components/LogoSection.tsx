
import React from 'react';

const LogoSection = () => {
  return (
    <div className="flex items-center space-x-3">
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
      >
        {/* Main Circle Background */}
        <circle 
          cx="24" 
          cy="24" 
          r="24" 
          fill="#2D5A5A"
        />
        
        {/* Letter B - Top Part */}
        <path 
          d="M14 12 L14 36 L26 36 C29.5 36 32 33.5 32 30 C32 28.2 31.2 26.6 29.8 25.5 C31.2 24.4 32 22.8 32 21 C32 17.5 29.5 15 26 15 L14 15 Z M17 18 L25 18 C27 18 28.5 19.5 28.5 21 C28.5 22.5 27 24 25 24 L17 24 Z M17 27 L26 27 C28 27 29.5 28.5 29.5 30 C29.5 31.5 28 33 26 33 L17 33 Z" 
          fill="#FFFFFF"
        />
      </svg>
      
      <div className="flex flex-col">
        <span className="font-playfair text-2xl font-bold text-primary">Bernoff</span>
        <span className="font-inter text-sm text-gray-600 -mt-1">Co</span>
      </div>
    </div>
  );
};

export default LogoSection;
