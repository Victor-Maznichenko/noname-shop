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
         },
         gridTemplateColumns: {
            products: "repeat(4, 320px)"
         }
      },
      fontSize: {
         xl: [
            "1.5rem",
            {
               lineHeight: "117%",
               letterSpacing: "-0.02em",
               fontWeight: "500"
            }
         ],
         l: [
            "1.125rem",
            {
               lineHeight: "133%",
               letterSpacing: "-0.02em",
               fontWeight: "500"
            }
         ],
         m: [
            "0.9375rem",
            {
               lineHeight: "120%",
               letterSpacing: "-0.03em",
               fontWeight: "600"
            }
         ],
         s: [
            "0.875rem",
            {
               lineHeight: "114%",
               letterSpacing: "-0.02em",
               fontWeight: "500"
            }
         ],
         xs: [
            "0.75rem",
            {
               lineHeight: "150%",
               letterSpacing: "-0.02em",
               fontWeight: "500"
            }
         ]
      }
   },
   plugins: []
};
