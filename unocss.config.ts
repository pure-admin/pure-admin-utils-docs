import {
  transformerVariantGroup,
  transformerDirectives,
  presetAttributify,
  defineConfig,
  presetMini,
  presetUno
} from "unocss";

// https://github.com/unocss/unocss#readme
export default defineConfig({
  content: {
    pipeline: {
      exclude: ["node_modules", "docs/.vitepress/dist", ".git", ".vscode"]
    }
  },
  presets: [presetMini({ dark: "class" }), presetAttributify(), presetUno()],
  transformers: [transformerDirectives(), transformerVariantGroup()]
});
