/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'humo': "url('../images/fondoHumo.jpg')",
        'disco': "url('../images/gallery/disco.jpg')",
        'bgPurple': "url('../images/bgPurple.jpg')",
        'Logo': "url('../images/logoFestival.png')",
        'InfoColors': "url('../images/fondoInfo.jpg')",
      },
      fontFamily: {
        title: ['Babylonica', 'cusive']
      },
    },
  },
  plugins: [],
}
