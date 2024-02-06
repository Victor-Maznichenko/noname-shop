import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
   resolve: {
      alias: {
         "@constants": path.resolve(__dirname, "./src/assets/constants"),
         "@components": path.resolve(__dirname, "./src/components"),
         "@styles": path.resolve(__dirname, "./src/assets/styles"),
         "@helpers": path.resolve(__dirname, "./src/utils/helpers"),
         "@types": path.resolve(__dirname, "./src/utils/types"),
         "@utils": path.resolve(__dirname, "./src/utils"),
         "@": path.resolve(__dirname, "./src")
      }
   },
   plugins: [react()]
});
