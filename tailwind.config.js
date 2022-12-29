/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#373F41",
        secondary: "#3C64B1",
        tertiary: "#F4F3EE",
      },
      boxShadow: {
        nav: "0 1px 50px 10px rgba(55, 60, 59, 0.16)",
        form: "0 3px 10px 0px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        primary: "Mulish, sans-serif",
      },
      screens: {
        mobile: { max: "767px" },
        xs: { max: "390px" },
        xsOpp: { min: "391px" },
        lgOpp: { max: "1080px" },
      },
    },
  },
  plugins: [],
  // important: true,
};
