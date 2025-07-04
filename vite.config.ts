import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  define: {
    global: 'window',
  },
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: false,
  },
  resolve: {
    alias: {
      "#": path.resolve(__dirname, "src"),
    },
  },
});
