/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "'Montserrat', sans-serif",
        Lilita: "'Lilita One', sans-serif",
      },
      colors: {
        primary: "#FFFFFFB3",
        secondary: "#707072",
        paragraph_color: "#9E9EA0",
        dark: "#1F1F21",
        img: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
