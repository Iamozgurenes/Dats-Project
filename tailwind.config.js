/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {

    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        firacode: [ 'Fira Code', 'monospace'],
        raleway: [ 'Raleway', 'sans-serif'],
       
      },

      colors: {
        'gaga-red': '#BC1A45',
        'gaga-malon': '#FFD369',
        'gaga-grey': '#DDDDDD',
        'gaga-white': '#F7F7F7',
      },

    },
  },
  plugins: [],
}

