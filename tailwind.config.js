/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'herobg': "url('/assets/herobg.png')",
        'prone': "url('/assets/p1.png')",
        'edu' : "url('/assets/education.png')",
      },
      fontFamily:{
        'raleway':['Raleway','sans-serif']
      },
      
    },
  },
  plugins: [],
};
