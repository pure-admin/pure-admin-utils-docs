import Unocss from "unocss/vite";
import { sync } from "fast-glob";
import { defineConfig, type DefaultTheme } from "vitepress";

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
    logo: "/logo.svg",
    siteTitle: "@pureadmin/utils",
    outlineTitle: "目录",
    editLink: {
      pattern:
        "https://github.com/xiaoxian521/pure-admin-utils-docs/tree/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/xiaoxian521/pure-admin-utils-docs",
      },
    ],
    nav: [
      {
        text: "指引",
        link: "/guide/guide",
        activeMatch: `^/guide/`,
      },
    ],
    sidebar: [
      {
        text: "介绍",
        items: [
          {
            text: "快速开始",
            link: "/guide/guide",
          },
        ],
      },
      {
        text: `Hooks（${getItems("hooks").length}）`,
        collapsible: true,
        items: getItems("hooks"),
      },
      {
        text: `Utils（${getItems("utils").length}）`,
        collapsible: true,
        items: getItems("utils"),
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present RealityBoy",
    },
    lastUpdatedText: "最近更新时间",
    algolia: {
      appId: "EKWGNTZJFC",
      apiKey: "681ac43aa17d09fd05de6dd9f1562d0c",
      indexName: "pureutils",
    },
  },
  vite: {
    server: {
      host: "0.0.0.0",
    },
    optimizeDeps: {
      // 不进行预编译，因为预编译可能会触发页面整体刷新
      exclude: [
        "echarts",
        "@vueuse/core",
        "@pureadmin/utils",
        "@vicons/ionicons5",
      ],
    },
    build: {
      chunkSizeWarningLimit: 3000,
    },
    plugins: [Unocss()],
  },
  vue: {
    reactivityTransform: true,
  },
});

function getItems(path: string) {
  const links: DefaultTheme.SidebarItem[] = [];
  sync(`docs/${path}/*`, {
    onlyDirectories: true,
    objectMode: true,
  }).forEach(({ name }) => {
    links.push({
      text: name,
      link: `/${path}/${name}/${name}`,
    });
  });
  return links;
}
