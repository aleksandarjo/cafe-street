/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      colors: {
        primary: "#FF902B",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".h1": {
          "@apply text-5xl font-semibold leading-normal": {},
        },
        ".h2": {},
        ".txt": {
          "@apply text-[#7E7D7A] text-lg": {},
        },
      });
    },
  ],
};
