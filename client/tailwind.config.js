/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#873E3E',
      },
      backgroundImage: {
        'custom-image': "url('../image.png')",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
