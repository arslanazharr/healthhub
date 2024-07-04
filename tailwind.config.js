/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#37C2CC",
        secondary: "#2CA1B0",
      },
    },
  },
  plugins: [],
};
