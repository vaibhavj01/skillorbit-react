import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function toKebab(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Za-z])(\d)/g, "$1-$2")
    .toLowerCase();
}

/** Rewrite lucide named imports to per-icon files so Rolldown does not pull the full icon barrel. */
function lucideDirectImports() {
  const importRe = /import\s*\{([^}]+)\}\s*from\s*["']lucide-react["']\s*;?/g;

  return {
    name: "lucide-direct-imports",
    enforce: "pre",
    transform(code, id) {
      if (!id.includes("src") || id.includes("node_modules")) return null;
      if (!code.includes("lucide-react")) return null;

      const next = code.replace(importRe, (_, spec) => {
        const names = spec
          .split(",")
          .map((part) => part.trim())
          .filter(Boolean);

        return names
          .map((item) => {
            const [orig, alias] = item.split(/\s+as\s+/).map((s) => s.trim());
            const local = alias || orig;
            return `import ${local} from "lucide-react/dist/esm/icons/${toKebab(orig)}.mjs";`;
          })
          .join("\n");
      });

      if (next === code) return null;
      return { code: next, map: null };
    },
  };
}

export default defineConfig({
  plugins: [lucideDirectImports(), react()],
  build: {
    target: "es2020",
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: "react-vendor", test: /node_modules[\\/](?:react|react-dom|react-router)/ },
            { name: "lucide", test: /node_modules[\\/]lucide-react|lucide-react[\\/]dist/ },
          ],
        },
      },
    },
  },
});
