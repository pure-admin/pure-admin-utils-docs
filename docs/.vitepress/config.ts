import Unocss from "unocss/vite";
// @ts-expect-error
import base from "@vue/theme/config";
import { defineConfig } from "vitepress";
import highlight from "./plugins/highlight";

import dirs from "./dirs.json";

const HooksList = dirs.filter(
  (item: any) => !item.children || item.children.length === 0
);

const getHooksLinks = () => {
  const links: any[] = [];
  HooksList?.forEach((item) => {
    links.push({
      text: item.compZhName,
      link: `/Hooks/${item.compName}/index`,
    });
  });
  return links;
};

const themeConfig = async () => {
  const config = await base();
  config.markdown.highlight = await highlight();
  return config;
};

export default defineConfig({
  extends: themeConfig,
  appearance: true,
  lastUpdated: true,
  title: "@pureadmin/utils",
  themeConfig: {
    siteTitle: "@pureadmin/utils",
    outlineTitle: "目录",
    // socialLinks: [
    //   {
    //     icon: "github",
    //     link: "",
    //   },
    // ],
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
        text: "图表",
        collapsible: true,
        items: getHooksLinks(),
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present RealityBoy",
    },
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 2000,
    },
    plugins: [Unocss()],
  },
  vue: {
    reactivityTransform: true,
  },
});
