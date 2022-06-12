const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: '#fe2c55'
    }
  },
  plugins: []
}
