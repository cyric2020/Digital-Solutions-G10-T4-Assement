const colors = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  purge: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   rose: colors.rose,
    //   pink: colors.pink,
    // },
    extend: {},
  },
  variants: {
    extend: {},
    display: ['responsive', 'group-hover', 'group-focus'],
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
