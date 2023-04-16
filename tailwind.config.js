/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: "Dancing Script",
        quicksand: "Quicksand",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
