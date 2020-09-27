module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        dgblue: "#48556a",
        dblue: "#6d7f97",
        gblue: "#9eafc2",
        lgblue: "#ecf2f8",
      },
      fontFamily: {
        ff: ["Manrope"],
      },
      fontSize: {
        fs: "13px",
      },
    },
  },
  variants: {},
  plugins: [],
};
