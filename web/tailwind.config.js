/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { backdrop: "#4E4D4D", backdrop2: "#3E3D3D" },
    },
    screens: {
      phone: { max: "400.5px" },
      superWideDesktop: "1000.5px",
    },
  },
  plugins: [],
};
