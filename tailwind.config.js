/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html",
  "./dist/js/*.js",
],
  theme: {
    extend: {
      backgroundImage: {
        'herobg': "url('/assets/herobg.png')",
        'prone': "url('/assets/p1.png')",
        'edu' : "url('/assets/education.png')",
        'tcdox' : "url('/assets/techdox.png')"
      },
      fontFamily:{
        'raleway':['Raleway','sans-serif']
      },
      
    },
  },
  plugins: [],
};
