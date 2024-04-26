/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        'primary':"red",
      },
      fontFamily:{
        display:['Poppins'],
        body:['sans-serif']
      }
    },
  },
  plugins: [],
}

