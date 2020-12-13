module.exports = {
  purge: [
    './src/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      'darkorange': '#ff8c00',
      'lightorange': '#ffd199'
    }),
    backgroundColor: theme => ({
      'darkblue': '#000078',
      'lightpink': '#ececff',
      'lightyellow': '#ffffec'

    }),
    extend: {
      width: {
        '22px': '22px',
        '29px': '29px',
        '200px': '200px'
      },
      height: {
        '22px': '22px',
        '29px': '29px',
        '32px': '32px'
      }
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

