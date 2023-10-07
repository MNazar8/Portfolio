/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Helvetica': ['Helvetica'],
        'Viberate' : ['Viberate'],
        'Montserrat': ['Montserrat']
      },
      fontSize: {
        'text-huge':'12rem'
      },
      backgroundImage:{
        'my-background': "url('../src/assets/images/background1.jpg')"
      }
    },
  },
  plugins: [],
}

