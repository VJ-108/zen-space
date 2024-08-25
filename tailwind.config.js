/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-purple": "#5D3FD3",
        "deep-purple-dark": "#4a2c9c",
      },
    },
  },
  plugins: [],
};
