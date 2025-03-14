import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: false,
  },
  resolve: {
    alias: {
      // @ts-expect-error: Unreachable code error
      "#": path.resolve(__dirname, "src"),
    },
  },
});
