/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      'phone': {'max': '600px'},
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'gray-main': '#243c5a',
      },
    },
  },
  plugins: [],
};
