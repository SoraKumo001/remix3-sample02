import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "full-reload",
      handleHotUpdate({ server }) {
        server.moduleGraph.getModuleByUrl("/src/main.tsx").then((mod) => {
          if (mod) server.reloadModule(mod);
        });
      },
    },
  ],
  resolve: {
    alias: {
      "react/jsx-runtime": "@remix-run/dom/jsx-runtime",
      "react/jsx-dev-runtime": "@remix-run/dom/jsx-dev-runtime",
    },
  },
});
