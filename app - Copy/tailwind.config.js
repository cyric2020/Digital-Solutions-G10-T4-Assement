module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
