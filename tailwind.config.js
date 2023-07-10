/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      LightRed: {
        text: "hsl(0, 100%, 67%)",
        bg: "hsla(0, 100%, 67%,0.05)",
      },
      OrangeyYellow: {
        text: "hsl(39, 100%, 56%)",
        bg: "hsla(39, 100%, 56%,0.05)",
      },
      GreenTeal: {
        text: "hsl(166, 100%, 37%)",
        bg: "hsla(166, 100%, 37%,0.05)",
      },
      CobaltBlue: {
        text: "hsl(234, 85%, 45%)",
        bg: "hsla(234, 85%, 45%, 0.05)",
      },

      LightSlateBlue: "hsl(252, 100%, 67%)",

      LightroyalBlue: "hsl(241, 81%, 54%)",
      circleViolet: "hsl(256, 72%, 46%, 1)",
      circlePersianBlue: "hsla(241, 72%, 46%)",
      paleBlue: "hsl(221, 100%, 96%)",
      LightLavender: "hsl(241, 100%, 89%)",
      DarkGrayBlue: "hsl(224, 30%, 27%)",
    },
  },
  plugins: [],
};
