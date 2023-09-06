const { nextui } = require("@nextui-org/react");

module.exports = {
  purge: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "slide-down": {
          "0%": { "margin-top": "-100px" },
          "100%": { "margin-top": "0" },
        },
      },
      animation: {
        "sliding-down": "slide-down 0.95s ease forwards",
      },
      colors: {
        blanco: "#F5F5F5",
        gris: "#8C7D70",
        ocre: "#CC7722",
        heading: "#000248",
        marron: "#433633",
      },
    },
  },
  variants: {},
  plugins: [nextui()],
};
