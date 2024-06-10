/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "'Montserrat', sans-serif",
      },
      colors: {
        primary: "#FFFFFFB3",
        secondary: "#707072",
        img: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
