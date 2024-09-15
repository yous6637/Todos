// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}","./app/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          Jakarta: ["Jakarta", "sans-serif"],
          JakartaBold: ["Jakarta-Bold", "sans-serif"],
          JakartaExtraBold: ["Jakarta-ExtraBold", "sans-serif"],
          JakartaExtraLight: ["Jakarta-ExtraLight", "sans-serif"],
          JakartaLight: ["Jakarta-Light", "sans-serif"],
          JakartaMedium: ["Jakarta-Medium", "sans-serif"],
          JakartaSemiBold: ["Jakarta-SemiBold", "sans-serif"],
        },
      },
    },
    plugins: [],
  }