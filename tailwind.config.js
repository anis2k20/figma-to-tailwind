/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Poppins', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
      },
      colors: {
        'black': '#303135',
        'dark_blue': '#171954',
        'pink': '#EC265B',
      },
    },  
  },
  plugins: [],
}

