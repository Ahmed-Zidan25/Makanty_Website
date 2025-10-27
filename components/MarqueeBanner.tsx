// components/MarqueeBanner.tsx

import React from 'react';

// ... other code ...

export const MarqueeBanner: React.FC<MarqueeProps> = ({ items }) => {
  // ... logic to create doubledItems ...

  return (
    // Must have overflow-hidden
    <div className="w-full overflow-hidden bg-primary/90 py-2">
      
      {/* Must have inline-block, whitespace-nowrap, AND the custom animation class */}
      <div className="inline-block whitespace-nowrap animate-marquee">
        {doubledItems.map((text, index) => (
          // Use 'px-8' or similar for spacing between items
          <span key={index} className="px-8 text-sm font-semibold text-primary-foreground tracking-wide">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};