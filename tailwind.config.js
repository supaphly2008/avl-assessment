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
      black: "#121212",
      "black--lighter": "#1B1B1B",
      white: "#ffffff",
      orange: "#FF9B33",
      gray: "#5d5d5d",
      "white--darker": "#F8F8F8",
      "gray--lighter": "#B2B2B2",
      "gray--scale": "rgba(255, 255, 255, 0.5)",
      transparent: "transparent",
    },
    extend: {
      gridTemplateColumns: {
        search: "repeat(auto-fill,minmax(219px, 1fr))",
        tag: "repeat(auto-fill,minmax(150px, 1fr))",
      },
      backgroundImage: {
        loading: "linear-gradient(90deg, #5d5d5d 0%, #787878 15%, #5d5d5d 50%)",
      },
      keyframes: {
        shine: {
          "0%": {
            backgroundPosition: "5px",
          },
          "40%": {
            backgroundPosition: "40px",
          },
          "100%": {
            backgroundPosition: "40px",
          },
        },
        "search-shine": {
          "0%": {
            backgroundPosition: "5px",
          },
          "40%": {
            backgroundPosition: "250px",
          },
          "100%": {
            backgroundPosition: "250px",
          },
        },
      },
      animation: {
        shine: "shine 2s infinite ease-out",
        "search-shine": "search-shine 2s infinite ease-out",
      },
    },
  },
  plugins: [],
};
