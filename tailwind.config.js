/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "arin-orange": "#FF5A30",
        "arin-red": "#E63946",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
