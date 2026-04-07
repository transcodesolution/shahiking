
module.exports = {
 content: [
  "./src/app/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1280px',
          xl: '1280px',
          xxl:"1440px",
        },
      },
    },
  },
  plugins: [],
}