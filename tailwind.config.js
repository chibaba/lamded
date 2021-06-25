 // tailwind.config.js
 module.exports = {
  // purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
     sm: "640px",
     md: "768px",
     xl: "1280px",
     "2xl": "1536px"
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }