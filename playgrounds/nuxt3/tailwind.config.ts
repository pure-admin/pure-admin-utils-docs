import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: "class",
  corePlugins: {
    preflight: false
  },
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./App.{js,ts,vue}",
    "./app.{js,ts,vue}"
  ]
};
