/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './_posts/**/*.md'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      boxShadow: {
        steam: '0 0 7px 0px #000',
      },
      colors: {
        cstyle: {
          background: '#eddbc8',
          highlight: '#2A9D8F',
          text: '#403c37',
          lighttext: '#da9a8f',
          darktext: '#403c37',
        },
        reviewscore: {
          1: '#ff4545',
          2: '#ff4545',
          3: '#ffa534',
          4: '#ffa534',
          5: '#ffe234',
          6: '#ffe234',
          7: '#b7dd29',
          8: '#b7dd29',
          9: '#57e32c',
          10: '#57e32c',
        },
        awards: {
          bronze: '#d7995b',
          silver: '#D3D3D3',
          gold: '#FFD700',
        },
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss-textshadow')],
};
