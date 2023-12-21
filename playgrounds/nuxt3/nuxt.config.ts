// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devServer: {
    host: "0.0.0.0"
  },
  css: ["element-plus/theme-chalk/dark/css-vars.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@element-plus/nuxt"]
});
