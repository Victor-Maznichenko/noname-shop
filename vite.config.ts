import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "src/assets/styles"),
      "@components": path.resolve(__dirname, "src/components"),
      "@helpers": path.resolve(__dirname, "src/utils/helpers"),
      "@hooks": path.resolve(__dirname, "src/utils/hooks"),
      "@api": path.resolve(__dirname, "src/utils/api"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
});
