const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Montserrat', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      backgroundImage: {
        'flatirons': "url('../public/flatirons.png')"
      },
      minWidth: {
        'proj': '300px'
      },
      maxWidth: {
        'proj': '550px'
      },
      screens: {
        'xs': { 'max': '475px' },
        'sm': { 'max': '768px' }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
