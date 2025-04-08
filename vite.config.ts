import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "iml-view",
      fileName: (format) => `iml-view.${format}.js`,
    },
  },
  plugins: [dts()],
});
