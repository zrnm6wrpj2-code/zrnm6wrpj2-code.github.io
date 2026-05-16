import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // User/org GitHub Pages site is served at domain root — keep absolute asset paths from /
  base: "/",
  plugins: [react(), tailwindcss()],
});
