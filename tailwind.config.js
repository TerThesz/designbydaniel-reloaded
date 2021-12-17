module.exports = {
  mode: 'jit',
  content: ['pages/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'Arial'],
        'roboto': ['Roboto', 'Arial'],
      },
      colors: {
        'dano_blue': '#6495ED'
      }
    },
  },
  plugins: [],
}
