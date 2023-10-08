/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ]
  ,
  theme: {
    colors:{
      "yellow": '#ffd20a',
      "white": '#FFF',
      "gray": '#EEEEEE',
      "black": '#1A1A1A'

    },
    minWidth: {
      '9/10': '90%',
    },

    extend: {},
  },
  plugins: [],
}

