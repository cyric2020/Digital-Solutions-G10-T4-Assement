module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    },
    display: ['responsive', 'group-hover', 'group-focus'],
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
