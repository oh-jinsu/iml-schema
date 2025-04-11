import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: "src/index.ts",
      name: "iml-schema",
      fileName: (format) => `iml-schema.${format}.js`,
    },
  },
  plugins: [dts()],
});
