/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/jsx/**/*.jsx",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "overline-10-font-family": "Poppins-Regular, sans-serif",
        "overline-8-font-family": "Poppins-Regular, sans-serif",
        "body-12-font-family": "Poppins-Regular, sans-serif",
        "semibold-body-12-font-family": "Poppins-SemiBold, sans-serif",
      },
      fontSize: {
        "overline-10-font-size": "10px",
        "overline-8-font-size": "8px",
        "body-12-font-size": "12px",
        "semibold-body-12-font-size": "12px",
      },
      fontWeight: {
        "overline-10-font-weight": "400",
        "overline-8-font-weight": "400",
        "body-12-font-weight": "400",
        "semibold-body-12-font-weight": "600",
      },
      lineHeight: {
        "overline-10-line-height": "12px",
        "overline-8-line-height": "12px",
        "body-12-line-height": "12px",
        "semibold-body-12-line-height": "12px",
      },
      borderRadius: {},
      colors: {
        heading1: "#1C1B1F",
        heading2: "#2B2C2D",
        green1: "#148939",
        orange1: "#f8921f",
        linebreak: "#E9E9E9",
        scorebg: "#FEEAD2",
        neutral1: "#2b2c2d"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  // plugins: [require("tw-elements/dist/plugin")],
};
