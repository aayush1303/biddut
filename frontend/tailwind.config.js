/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html", 
    "./src/_includes/**/*.html",
    "./src/_includes/components/**/*.html", 
  ],  
  theme: {
    extend: {
      colors: {
        primary: "#16171A",         // Dark primary color
        secondary: "#DD0733",       // Red secondary color
        borderColor: "#2C2F39",     // Dark border color
        dropDownMenuColor: "#525151", // Dark drop-down menu
        searchBarColor: "#818181",  // Light search bar
        textPrimary: "#FFFFFF",     // White text
        textSecondary: "#A9A9A9",   // Light gray text
        textTertiary: "#525151",    // Darker gray text
        bgPrimary: "#F2EDEB",       // Light beige background
        bgSecondary: "#F2F0F0",     // Light grayish background
        bgTertiary: "#F6F4F3",      // Light cream background
        service: "#F5F5F8",         // Service section background
        serviceHeadingColor: "#727272", // Service section heading color
        serviceAreaTextColor:"#727272" // Service section area text color
      },
    },
  },
  plugins: [],
};


