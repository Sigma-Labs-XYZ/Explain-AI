/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      phone: { max: "400.5px" },
      // => @media (min-width: 640px) { ... }
    },
  },
  plugins: [],
};
