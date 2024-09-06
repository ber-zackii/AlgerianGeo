// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";
import { terser } from "rollup-plugin-terser"; // Import terser plugin

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"), // Adjust to your entry file
      name: "algerian-geo",
      formats: ["es", "cjs"], // 'es' for ESM and 'cjs' for CommonJS
      fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
    },
    rollupOptions: {
      external: [], // List external dependencies here
      output: {
        globals: {}, // List global variable names for external dependencies
      },
      plugins: [
        terser(), // Apply terser for minification
      ],
    },
    sourcemap: true, // Optional: disable source maps if not needed
  },
});
