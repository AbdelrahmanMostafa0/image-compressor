/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/*",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightMode: {
          websiteBackground: "#E4E4EB", // White
          background: "#ffffff", // White
          grayBackground: "#F2F2F5", // Gray
          primary: "#1C1C28", // Dark Gray
          secondary: "#8F90A6", // Lighter Gray
          green: "#06C270", // Green
          darkGreen: "#05A660", // Dark Green
          red: "#FF3B3B", // Red
          darkRed: "#E53535", // Dark Red
        },
        darkMode: {
          websiteBackground: "#1C1C28", // Dark Gray/Black
          background: "#28293D", // Dark Gray
          grayBackground: "#555770", // Gray
          primary: "#ffffff", // White
          secondary: "#8F90A6", // Light Gray
          green: "#39D98A", // Green
          lightGreen: "#57EBA1", // Light Green
          red: "#FF5C5C", // Red
          lightRed: "#FF8080", // Light Red
        },
      },
    },
  },
  plugins: [],
};
