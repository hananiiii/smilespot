/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
 
    theme: {
      screens:{
      sm:'550px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
      },

    extend: {
     fontFamily:{
      inika:'Inika&family',
     }
    },

  },
  plugins: [],
}
