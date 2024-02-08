/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{ts,tsx}"],
   theme: {
      colors: {
         transparent: "transparent",
         white: "#FFFFFF",
         gray: {
            light: "#EFEEF4",
            main: "#5C6970",
            dark: "#2E3438"
         },
         blue: {
            light: "#3625FF",
            dark: "#0C0099"
         },
         red: "#D35151"
      },
      container: {
         center: true,
         padding: "15px",
         screens: {
            sm: "100%",
            xl: "1280px"
         }
      },
      extend: {
         fontFamily: {
            Gilroy: ["Gilroy", "sans-serif"]
         }
      },
      fontSize: {
         xl: [
            "1.5rem",
            {
               lineHeight: "1.75rem",
               letterSpacing: "-2%",
               fontWeight: "500"
            }
         ],
         l: [
            "1.125rem",
            {
               lineHeight: "1.5rem",
               letterSpacing: "-2%",
               fontWeight: "500"
            }
         ],
         m: [
            "0.9375rem",
            {
               lineHeight: "1.125rem",
               letterSpacing: "-3%",
               fontWeight: "600"
            }
         ],
         s: [
            "0.875rem",
            {
               lineHeight: "1rem",
               letterSpacing: "-2%",
               fontWeight: "500"
            }
         ],
         xs: [
            "0.75rem",
            {
               lineHeight: "1.125rem",
               letterSpacing: "-2%",
               fontWeight: "500"
            }
         ]
      }
   },
   plugins: []
};
