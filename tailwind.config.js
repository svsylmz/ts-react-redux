module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "tmdb-header-blue": "#032541",
        "tmdb-gradient-from": "rgba(31.5, 31.5, 31.5, 1)",
        "tmdb-graient-to": "rgba(31.5, 31.5, 31.5, 0.84)",
        "tmdb-showcase-bg": "#202020",
      },
      boxShadow: {
        "tmdb-box": "0 2px 8px rgb(0 0 0 / 10%)",
      },
    },
  },
  plugins: [],
};
