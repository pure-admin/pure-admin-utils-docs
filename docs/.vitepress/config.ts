import fg from "fast-glob";
import Unocss from "unocss/vite";
import { defineConfig, type DefaultTheme } from "vitepress";
import ReactivityTransform from "@vue-macros/reactivity-transform/vite";

export default defineConfig({
  base: "/",
  head: [
    [
      "script",
      {},
      `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?6a7dac00248d3b6ad8479d7249bb29c5";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`
    ],
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
      }
    ],
    ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }],
    [
      "link",
      {
        rel: "alternate icon",
        href: "/favicon.ico",
        type: "image/png",
        sizes: "16x16"
      }
    ],
    ["meta", { name: "keywords", content: "pure-admin-utils" }],
    ["link", { rel: "mask-icon", href: "/logo.svg", color: "#ffffff" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180"
      }
    ]
  ],
  cleanUrls: true,
  markdown: {
    theme: {
      dark: "min-dark",
      light: "min-light"
    }
    // anchor: {
    //   slugify: (str) => encodeURIComponent(str),
    //   level: [1, 2, 3, 4, 5, 6],
    // },
  },
  lastUpdated: true,
  title: "@pureadmin/utils",
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "@pureadmin/utils",
    outlineTitle: "目录",
    outline: [2, 6],
    // editLink: {
    //   pattern:
    //     "https://github.com/pure-admin/pure-admin-utils-docs/tree/master/docs/:path",
    //   text: "在 GitHub 上编辑此页",
    // },
    socialLinks: [
      {
        icon: {
          svg: '<svg t="1668429676610" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1895" width="260" height="260"><path d="M787.696941 669.515294c0 44.935529-23.431529 118.181647-78.787765 118.181647-55.416471 0-78.848-73.246118-78.848-118.181647 0-44.875294 23.431529-118.181647 78.848-118.181647 55.356235 0 78.787765 73.306353 78.787765 118.181647zM315.090824 551.333647c-55.356235 0-78.787765 73.306353-78.787765 118.181647 0 44.935529 23.431529 118.181647 78.787765 118.181647s78.787765-73.246118 78.787764-118.181647c0-44.875294-23.431529-118.181647-78.787764-118.181647zM1024 561.212235c0 68.367059-6.746353 140.950588-37.526588 203.715765-81.257412 164.321882-304.609882 180.284235-464.594824 180.284235-162.454588 0-399.36-14.095059-483.689412-180.284235C6.746353 702.765176 0 629.579294 0 561.212235c0-89.871059 24.636235-174.742588 83.727059-243.651764a338.160941 338.160941 0 0 1-16.624941-104.688942c0-46.140235 10.420706-92.220235 31.382588-134.144 97.219765 0 159.382588 42.465882 233.231059 100.291765a823.536941 823.536941 0 0 1 190.162823-21.504c57.825882 0 116.314353 6.204235 172.333177 19.696941 73.246118-57.223529 135.348706-98.484706 231.363764-98.484706 20.961882 41.863529 31.382588 88.003765 31.382589 134.144 0 35.117176-5.541647 70.174118-16.624942 103.424C999.424 385.807059 1024 471.341176 1024 561.212235z m-137.878588 108.303059c0-94.147765-57.163294-177.212235-157.515294-177.212235-40.598588 0-79.329882 7.408941-119.988706 12.950588-31.984941 4.939294-63.969882 6.746353-96.617412 6.746353s-64.632471-1.807059-96.617412-6.746353c-39.996235-5.541647-79.390118-12.950588-119.988706-12.950588-100.291765 0-157.515294 83.064471-157.515294 177.212235 0 188.295529 172.272941 217.208471 322.43953 217.208471h103.424c150.166588 0.060235 322.379294-28.912941 322.379294-217.208471z" p-id="1896"></path></svg>'
        },
        link: "https://github.com/pure-admin/pure-admin-utils-docs"
      },
      {
        icon: {
          svg: '<svg t="1668429814893" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1995" width="260" height="260"><path d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 1 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.157333 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z" p-id="1996"></path></svg>'
        },
        link: "https://space.bilibili.com/301103230"
      }
    ],
    nav: [
      {
        text: "指引",
        link: "/guide/guide",
        activeMatch: `^/guide/`
      }
    ],
    sidebar: [
      {
        text: "介绍",
        items: [
          {
            text: "快速开始",
            link: "/guide/guide"
          }
        ]
      },
      {
        text: `Hooks（${getItems("hooks").length}）`,
        collapsible: true,
        items: getItems("hooks")
      },
      {
        text: `Utils（${getItems("utils").length}）`,
        collapsible: true,
        items: getItems("utils")
      }
    ] as DefaultTheme.SidebarItem[],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present pure-admin"
    },
    lastUpdatedText: "最近更新时间",
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档"
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭"
                }
              }
            }
          }
        }
      }
    }
  },
  vite: {
    server: {
      host: "0.0.0.0"
      // warmup: {
      //   clientFiles: ["../index.md", "../{components,guide,hooks,utils}/*"],
      //   ssrFiles:["./cache/deps/*.js"]
      // }
    },
    optimizeDeps: {
      include: [
        "axios",
        "typeit",
        "highlight.js",
        "@vicons/ionicons5",
        "@faker-js/faker/locale/en"
      ],
      exclude: ["@pureadmin/utils", "@vueuse/core", "vitepress"]
    },
    build: {
      chunkSizeWarningLimit: 10000
    },
    plugins: [Unocss(), ReactivityTransform()]
  }
});

function getItems(path: string) {
  const links: DefaultTheme.SidebarItem[] = [];
  fg.sync(`docs/${path}/*`, {
    onlyDirectories: true,
    objectMode: true
  }).forEach(({ name }) => {
    links.push({
      text: name,
      link: `/${path}/${name}/${name}`
    });
  });
  return links;
}
