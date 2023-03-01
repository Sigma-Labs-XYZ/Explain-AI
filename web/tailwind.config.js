/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      phone: { max: "400.5px" },
      superWideDesktop: "1000.5px",
    },
  },
  plugins: [],
};
