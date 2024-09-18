/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 20px 5px  rgb(34 197 94)",
      },
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [],
};
