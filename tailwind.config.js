import { content as _content, plugin } from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}", _content()];
export const theme = {
  extend: {
    fontFamily: {
      Montserrat: "'Montserrat', sans-serif",
      Lilita: "'Lilita One', sans-serif",
    },
    colors: {
      primary: "#FFFFFFB3",
      secondary: "#707072",
      backgroundHr: "#E5E5E5",
      backgroundButtonFilter: "#CACACB",
      paragraph_color: "#9E9EA0",
      dark: "#1F1F21",
      img: "#F5F5F5",
      pub: "#B22222",
    },
  },
};
export const plugins = [plugin()];
