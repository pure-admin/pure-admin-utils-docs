import links from "./links";
import Unocss from "unocss/vite";
import mkcert from "vite-plugin-mkcert";
import { defineConfig } from "vitepress";

const HooksList = links.filter(
  (item: any) => !item.children || item.children.length === 0
);

const getHooksLinks = () => {
  const links: any[] = [];
  HooksList.forEach((item) => {
    links.push({
      text: item.name,
      link: `/Hooks/${item.name}/index`,
    });
  });
  return links;
};

export default defineConfig({
  markdown: {
    theme: {
      dark: "min-dark",
      light: "min-light",
    },
    // lineNumbers: true, // 目前还有问题，复制代码的话会把序号也复制进去
  },
  lastUpdated: true,
  title: "@pureadmin/utils",
  themeConfig: {
    siteTitle: "@pureadmin/utils",
    outlineTitle: "目录",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/xiaoxian521/pure-admin-utils-docs",
      },
    ],
    nav: [{ text: "指引", link: "/Guide/index" }],
    sidebar: [
      {
        text: "介绍",
        items: [
          {
            text: "快速开始",
            link: "/Guide/index",
          },
        ],
      },
      {
        text: "Hooks",
        collapsible: true,
        items: getHooksLinks(),
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present RealityBoy",
    },
    lastUpdatedText: "最近更新时间",
  },
  vite: {
    server: {
      https: true,
      host: "0.0.0.0",
    },
    optimizeDeps: {
      // 不进行预编译，因为预编译可能会触发页面整体刷新
      exclude: ["@pureadmin/utils", "echarts", "@vueuse/core"],
    },
    build: {
      chunkSizeWarningLimit: 2000,
    },
    plugins: [mkcert(), Unocss()],
  },
  vue: {
    reactivityTransform: true,
  },
});
