<script setup>
import describe from './describe.vue'
// import tags from './tags.vue'
</script>

<ClientOnly>
  <describe /> 
  <wordcloud/>
</ClientOnly>

<!-- ## 🏷️ 标签

<ClientOnly>
  <tags :className="'type-it1'" :values="['支持Vue3']" />
  <tags :className="'type-it2'" :tagNameList="['浏览器']" :values="['支持任意运行在浏览器的JS语言']" :speed="100" />
  <tags :className="'type-it3'" :tagNameList="['Node']" :values="['支持NodeJs']" />
</ClientOnly> -->

## 📦 安装

```bash
# pnpm
pnpm add @pureadmin/utils

# or yarn
yarn add @pureadmin/utils

# or npm
npm install @pureadmin/utils
```

## 📡 `CDN`

```html
<!-- 提供包含所有方法的全局变量 PureUtils -->

<!-- unpkg -->
<script src="//unpkg.com/@pureadmin/utils"></script>

<!-- jsdelivr -->
<script src="//cdn.jsdelivr.net/npm/@pureadmin/utils"></script>
```

## 📚 示例

集成 `vue-vite`、`vue-cli`、`preact`、`react`、`solid`、`svelte`、`nuxt3`、`next`、`node`、`html` 使用示例

[查看示例代码](https://github.com/pure-admin/pure-admin-utils-docs/tree/master/playgrounds)
