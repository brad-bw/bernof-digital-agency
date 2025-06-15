
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
        {/* Main Circle */}
        <circle 
          cx="24" 
          cy="24" 
          r="22" 
          fill="#2D5A5A" 
          stroke="#F4A261" 
          strokeWidth="2"
        />
        
        {/* Letter B */}
        <path 
          d="M14 14 L14 34 L24 34 C27.5 34 30 31.5 30 28 C30 26 29 24.5 27.5 24 C29 23.5 30 22 30 20 C30 16.5 27.5 14 24 14 L14 14 Z M17 17 L23 17 C25.5 17 27 18.5 27 20 C27 21.5 25.5 23 23 23 L17 23 Z M17 26 L24 26 C26.5 26 28 27.5 28 29 C28 30.5 26.5 32 24 32 L17 32 Z" 
          fill="#FFFFFF"
        />
        
        {/* Accent Elements */}
        <circle cx="35" cy="13" r="2" fill="#F4A261" opacity="0.8" />
        <circle cx="37" cy="35" r="1.5" fill="#F4A261" opacity="0.6" />
        <circle cx="11" cy="37" r="1" fill="#F4A261" opacity="0.4" />
      </svg>
      
      <div className="flex flex-col">
        <span className="font-playfair text-2xl font-bold text-primary">Bernoff</span>
        <span className="font-inter text-sm text-gray-600 -mt-1">Co</span>
      </div>
    </div>
  );
};

export default LogoSection;
