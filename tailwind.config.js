/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     screens: {
      'xs': '480px',   // custom extra small
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      borderColor:{
        primary : 'rgb(85,81,227)',
        secondary : '#2b2d77',
      }
    },
    fontFamily:{
      'hero-font':'Sriracha',
    }
  },
  plugins: [],
}