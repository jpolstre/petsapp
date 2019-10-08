const { colors } = require('tailwindcss/defaultTheme')
// tailwind.config.js
// const { colors: { teal, orange, pink, ...colors } } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      maven: ['Maven Pro', 'sans-serif']
    },
    colors: { ...colors, primary: colors.pink },
    container: {
      padding: '2rem',
      center: true
    },

    extend: {}
  },
  variants: {},
  plugins: []
}
