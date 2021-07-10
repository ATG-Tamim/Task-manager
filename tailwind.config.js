module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        13: '1000rem !important',
      },
      keyframes: {
        wiggle: {
          '0%,100%': {
            backgroundColor: '#9DA1A8',
            opacity: 0.7,
          },
          '50%': {
            background: '#d1d5db',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
    variants: {
      margin: ['last', 'first', 'responsive'],
    },
    plugins: [],
  },
}
