const withMT = require("@material-tailwind/react/utils/withMT");
const path = require("path");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        getintouch: `url(${path.resolve(
          __dirname,
          "src/assets/getintouch.png"
        )})`,
      },
    },
  },
  plugins: [],
});
