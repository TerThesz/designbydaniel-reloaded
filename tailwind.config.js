module.exports = {
  mode: 'jit',
  content: ['pages/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope'],
        'roboto': ['Roboto'],
      },
      colors: {
        'dano_blue': '#6495ED',
        'darker_dano_blue': '#4e87f0'
      }
    },
  },
  plugins: [],
}
