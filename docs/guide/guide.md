<script setup>
import describe from './describe.vue'
import tags from './tags.vue'
</script>

<ClientOnly>
  <describe /> 
  <wordcloud/>
</ClientOnly>

## 🏷️ 标签

<ClientOnly>
  <tags :className="'type-it1'" :values="['支持Vue3']" />
  <tags :className="'type-it2'" :tagNameList="['浏览器']" :values="['支持任意运行在浏览器的JS语言']" :speed="100" />
  <tags :className="'type-it3'" :tagNameList="['Node']" :values="['支持NodeJs']" />
</ClientOnly>

## 🦄 使用示例

- 集成 `vue-vite`、`vue-cli`、`preact`、`react`、`solid`、`svelte`、`nuxt3`、`next`、`node`、`html` 版本使用示例

[点我查看所有使用示例](https://github.com/pure-admin/pure-admin-utils-docs/tree/master/playgrounds)

## 📦 安装

```bash
# with npm
npm install @pureadmin/utils

# or with yarn
yarn add @pureadmin/utils

# or with pnpm
pnpm add @pureadmin/utils
```

## 🕸️ CDN 引用

```bash
# with unpkg
<script src="https://unpkg.com/@pureadmin/utils"></script>

# with jsdelivr
<script src="https://cdn.jsdelivr.net/npm/@pureadmin/utils"></script>
```

:::tip
`CDN` 引用可以使用平台提供的一个全局变量 `PureUtils` 包含所有方法
:::
