---
layout: home

hero:
  name: "@pureadmin/utils"
  text: 常用的工具函数（utils、hooks）
  tagline: 共125个工具函数，助您提高开发效率
  image:
    src: /logo.png
    alt: "@pureadmin/utils"
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/guide
    - theme: alt
      text: 关注平台
      link: https://github.com/pure-admin

features:
  - icon: 🌎
    title: 任意 JavaScript 环境中运行
    details: 支持Node.js、浏览器以及任意JavaScript框架
  - icon: 📡
    title: 可通过 CDN 引用
    details: 同时支持 unpkg 和 jsdelivr
  - icon: ⚡️
    title: 完全可摇树
    details: 自带 Tree-shaking ，只对引入的代码进行打包
  - icon: 💫
    title: 零依赖
    details: 零 Dependencies 依赖，只会安装项目本身
  - icon: 🦾
    title: 强类型
    details: 使用 TypeScript 编写，拥有强大的类型推导提示
  - icon: 💯
    title: 100%测试
    details: 100% 测试覆盖率，100% 测试通过率
---

<script setup>
import { onMounted } from 'vue'
// import { useMessage } from "./components/message"
import { addReleaseTag } from './.vitepress/utils/createElement.ts'

onMounted(() => {
  addReleaseTag()
})

// const mess = h("span", {}, [
//   "文档使用",
//   h(
//     "a",
//     {
//       href: "https://vitepress.vuejs.org/",
//       target: "_blank",
//       style: {
//         color: "#409eff",
//       },
//     },
//     [" vitepress "]
//   ),
//   h(
//     "span",
//     "编写，vitepress 处于非稳定版本阶段，如点击页面遇到卡顿，请刷新浏览器即可"
//   ),
// ])

// const { message } = useMessage()

// if(process.env.NODE_ENV !== 'development') message?.info(() => mess, { closable: true, duration: 12000 })
</script>
