/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        lovelo: ['"Lovelo Line"', 'sans-serif'], // For signature-like style
        montserrat: ['Montserrat', 'sans-serif'], // Added Montserrat font
        sourceSans: ['"Source Sans Pro"', 'sans-serif'], // Added Source Sans Pro font
      },
      colors: {
        primary: "#0A0A0A",       // Deep black for text and logo
        background: "#FFFFFF",    // Main background
        light: "#F4F4F4",         // Soft light gray sections
        border: "#E5E5E5",        // For borders/separators
        muted: "#8C8C8C",         // Secondary text, subtitles
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
