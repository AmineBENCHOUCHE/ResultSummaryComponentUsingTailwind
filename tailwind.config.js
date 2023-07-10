/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      LightRed: "hsl(0, 100%, 67%)",
      OrangeyYellow: "hsl(39, 100%, 56%)",
      GreenTeal: "hsl(166, 100%, 37%)",
      CobaltBlue: "hsl(234, 85%, 45%)",

      bgLightSlateBlue: "hsl(252, 100%, 67%)",
      bgLightroyalBlue: "hsl(241, 81%, 54%)",
      circleViolet: "hsla(256, 72%, 46%, 1)",
      circlePersianBlue: "hsla(241, 72%, 46%, 0)",
      paleBlue: "hsl(221, 100%, 96%)",
      LightLavender: "hsl(241, 100%, 89%)",
      DarkGrayBlue: "hsl(224, 30%, 27%)",
    },
  },
  plugins: [],
};
