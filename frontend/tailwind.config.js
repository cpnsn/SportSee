/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'lightGrey': "#FBFBFB",
        'lightBlue': "#4AB8FF",
        'lightYellow': "#F9CE23",
        'lightRed': "#FD5181",
        'mediumGrey': "#74798C",
        'redChart': '#E60000'
      }
    },
  },
  plugins: [],
}

