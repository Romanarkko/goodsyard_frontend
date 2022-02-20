module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gyGreen: '#6FCF97',
        gyBlack: '#171717',
        gyGray: '#C7C7C7',
        gyLightGray: '#F2F2F2',
      },
      fontFamily: {
        montserrat: ['Montserrat Alternates', 'sans-serif'],
        roboto: ['roboto'],
        heebo: ['Heebo', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
