module.exports = {
  purge: {
    enabled: true,
    content: [
      './*.html',
      './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
  },
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
