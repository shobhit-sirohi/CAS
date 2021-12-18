// import gg from "./src/images/headerback.svg";

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    backgroundPosition: {
      bottom: "bottom",
      "bottom-4": "center bottom 1rem",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
      "right-top-4": "right -3rem top",
      "right-bottom-3": "right -3.5rem bottom",
      "right-bottom-2": "right -2rem bottom",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "30%": "30%",
      "40%": "40%",
      "50%": "50%",
      "60%": "60%",
      "70%": "70%",
      "80%": "80%",
      "102%": "102%",
      16: "4rem",
    },
    extend: {
      backgroundImage: {
        hero: "url('./src/images/headerback.svg')",
        footer: "url('./src/images/footer.png')",
        eligible: "url('./src/images/eligibility.svg')",
      },
      colors: {
        newred: "#EA4B4B",
        darkindigo: "#414A6D",
        newblue: "#3A88F9",
        darkblue: "#141B42",
        darkyellow: "#F7AC41",
        newyellow: "#FFC63D",
      },
      fontSize: {
        "10xl": [
          "140px",
          {
            letterSpacing: "-0.02em",
            lineHeight: "40px",
          },
        ],
        "11xl": [
          "155px",
          {
            letterSpacing: "-0.02em",
            lineHeight: "40px",
          },
        ],
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
