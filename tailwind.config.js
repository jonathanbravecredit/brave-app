module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
