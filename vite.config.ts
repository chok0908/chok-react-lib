import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";
import typescript2 from "rollup-plugin-typescript2";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: ["src/components/**/*.tsx"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ["vite.config.ts"],
    }),
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "src/components/main.ts",
      name: "myLibraryReactTs",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `my-library-react-ts.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that should not be bundled
      // into your library
      input: {
        main: path.resolve(__dirname, "src/components/main.ts"),
      },
      external: ["React"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "main.css") return "my-library-react-ts.css";
          return assetInfo.name;
        },
        exports: "named",
        globals: {
          react: "React",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
