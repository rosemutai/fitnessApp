/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      animation: {
       shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
      transitionProperty: {
        'width': 'width',
        'border': 'border',
      },
      colors:{
        'purplish': '#9EA4C3',
        'greyish': '#7a7771'
      },
       backgroundImage: {
        'hero': 'url("../public/images/gym.jpg")',
        'woman': 'url("../public/images/ww.jpg")'
      },
      spacing: {
        '45': '4.5rem',
        '55': '5.5rem',
        '85': '10.3rem'
      }
    },
  },
  plugins: [],
}


// #7a7771