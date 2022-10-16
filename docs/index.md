---
layout: home

hero:
  name: "@pureadmin/utils"
  text: 常用的工具函数（utils、hooks）
  tagline: 提高开发效率
  image:
    src: /logo.png
    alt: "@pureadmin/utils"
  actions:
    - theme: brand
      text: 开始
      link: /guide/guide
    - theme: alt
      text: Star 🎉
      link: https://github.com/xiaoxian521

features:
  - icon: ⚡️
    title: 完全可摇树
    details: 自带 Tree-shaking ，只对引入的代码进行打包
  - icon: 🧪
    title: 完善的测试
    details: 使用 vitest 进行单元测试并编写各种环境下的实际测试用例，100% 覆盖率，100% 通过率,
  - icon: 🦾
    title: 强类型
    details: 使用 TypeScript 编写，拥有强大的类型推导提示
  - icon: ⚓
    title: 代码提交前校验
    details: 使用 husky 对提交代码前进行规则校验，强制规范开发流程，防止开发失误
  - icon: 🌎
    title: 可通过 CDN 使用
    details: 同时支持 unpkg 和 jsdelivr
  - icon: 🕋
    title: 一键式发版命令
    details: 超简单的发版流程，集成一键式发版命令
---

<script setup>
import { onMounted } from 'vue'
import { addReleaseTag } from './.vitepress/utils/addReleaseTag.js'

onMounted(() => {
  addReleaseTag()
})
</script>
