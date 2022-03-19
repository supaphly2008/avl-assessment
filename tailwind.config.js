module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "375px" },
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      orange: "#FF9B33",
      gray: "#5d5d5d",
      "gray--scale": "rgba(255, 255, 255, 0.5)",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
