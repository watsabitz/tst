/** @type {import('tailwindcss').Config} */

import { defineConfig } from "vite";
import { NodePackageImporter } from "sass-embedded";

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern", "legacy"
        importers: [[new NodePackageImporter()]],
      },
    },
  },
});
