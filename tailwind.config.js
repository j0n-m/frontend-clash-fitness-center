/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-primary": "#E6002E",
        "gray-primary": "#3f3f3f",
        "black-primary": "#0f0f0f",
        "white-primary": "#f1f1f1",
        "white-dim1": "#d9d9d9",
        t0: "#0f0f0f",
        t1: "#606060",
        t0inverse: "#f1f1f1",
      },
    },
  },
  plugins: [],
};
