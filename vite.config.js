// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // замість path.resolve(__dirname, 'src')
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
