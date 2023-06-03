/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'pokemon': 'pokemon',
      'Ysabeau': 'Ysabeau'
    },
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        rspin: 'rspin 1s infinite linear',
        customspin: 'customspin 1s infinite linear',
  
      },
      keyframes: {
        rspin: {
          '100%': { transform: 'rotate(-1turn)' },
         
        },
        customspin: {
          '100%': { transform: 'rotate(1turn)' },
         
        }
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}