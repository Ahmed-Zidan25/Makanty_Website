// tailwind.config.js

module.exports = {
  // ... other configuration ...
  theme: {
    extend: {
      // 1. Define the custom movement
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      // 2. Define the animation speed and loop
      animation: {
        marquee: 'marquee 15s linear infinite', 
      },
    },
  },
  // ... rest of the file ...
}