// components/MarqueeBanner.tsx

import React from 'react';

interface MarqueeProps {
  // Expects an array of text strings for the banner content
  items: string[];
}

export const MarqueeBanner: React.FC<MarqueeProps> = ({ items }) => {
  if (items.length === 0) return null;

  // We duplicate the items array twice for a seamless looping effect
  const doubledItems = [...items, ...items];

  return (
    // Outer container: sets the background and hides the overflowing content
    <div className="w-full overflow-hidden bg-primary/90 py-2">
      
      {/* Inner container: applies the continuous scrolling animation */}
      <div className="inline-block animate-marquee">
        {doubledItems.map((text, index) => (
          // Each item gets spacing to separate it from the next
          <span 
            key={index} 
            className="px-8 text-sm font-semibold text-primary-foreground tracking-wide"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};