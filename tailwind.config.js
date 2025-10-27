// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... other configuration ...
  theme: {
    extend: {
      // ADD THIS SECTION
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite', 
      },
      // END OF NEW SECTION
    },
  },
  // ... rest of the file ...
}