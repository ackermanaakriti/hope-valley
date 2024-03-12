/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#2a2c73",
        black:'#404040',
        grayy:'#adacac'
       

      },
      fontFamily: {
        'karla': ['Work Sans', 'sans-serif'],
      }
    },
  },
  plugins: [
  
  ],
}

