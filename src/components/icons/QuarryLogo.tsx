import React from 'react';

export const QuarryLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle representing the quarry rim */}
      <circle 
        cx="256" 
        cy="256" 
        r="240" 
        stroke="currentColor" 
        strokeWidth="32" 
        fill="none" 
        opacity="0.2"
      />
      
      {/* Middle circle representing a level */}
      <circle 
        cx="256" 
        cy="256" 
        r="180" 
        stroke="currentColor" 
        strokeWidth="32" 
        fill="none" 
        opacity="0.4"
      />
      
      {/* Inner circle representing the deepest level */}
      <circle 
        cx="256" 
        cy="256" 
        r="120" 
        stroke="currentColor" 
        strokeWidth="32" 
        fill="none" 
        opacity="0.6"
      />
      
      {/* Center circle representing the core */}
      <circle 
        cx="256" 
        cy="256" 
        r="60" 
        fill="currentColor"
      />
    </svg>
  );
};