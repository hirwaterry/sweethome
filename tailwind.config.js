/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding:{
        DEFAULT: '15px'
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1330px',
    },

    extend: {
      colors: {
        'primary': '#242a2b',
        'secondary': '#808080',
        accent:{
          DEFAULT: '#1cbccf',
          secondary: '#18abbc',
          tertiary: '#90c6cd',
        },
        grey: '#e8f0f1'
    },
    fontFamily: {
      primary: 'poppins'
    },
    boxShadow:{
      custom1: '0px 0px 10px 0px rgba(0,0,0,0.5)',
      custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)',
    },
    backgroundImage: {
      services: "url('./assets/images/services/s.png')",
      testimonials: 'url(../../assects/img/testimonials/bg.img)',
      departments: 'url(../../assects/img/department/bg.img)',
      quoteLeft: 'url(../../assects/img/testimonials/qoute-left.img)',
      quoteRight: 'url(../../assects/img/testimonials/qoute-right.img)',
    },
  },
},
  plugins: [],
};