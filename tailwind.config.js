/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      maven: ['Maven Pro', 'sans-serif']
    },
    colors: { ...colors, primary:colors.pink },
    container: {
      padding: '2rem',
      center: true
    },
    extend: {},
  },
  plugins: [],
}
