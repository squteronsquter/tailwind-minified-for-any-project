module.exports = {
  mode: 'jit',
  purge: ['../*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        body: ['PT Sans'],
      }

  },
      fontSize: {
        mommoth: ['14rem', { lineHeight: '22rem' }],
      },
    },

  variants: {
    extend: {},
  },
  plugins: [],
}

