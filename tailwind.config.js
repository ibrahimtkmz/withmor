/** @type {import('tailwindcss').Config} */
const brandBlue = {
  50: "#e8edf6",
  100: "#d4deef",
  200: "#a8c0df",
  300: "#7ca0cf",
  400: "#5383bf",
  500: "#3569a8",
  600: "#264f83",
  700: "#1c3c64",
  800: "#132c48",
  900: "#0d2035",
};

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: brandBlue,
      },
    },
  },
  plugins: [],
};
