<!-- <script setup>
import describe from './describe.vue'
import tags from './tags.vue'
</script> -->

<!-- <ClientOnly>
  <describe />
  <wordcloud/>
</ClientOnly> -->

<!-- ## 🏷️ 标签

<tags :className="'type-it1'" :values="['支持Vue3']" />
<tags :className="'type-it2'" :tagNameList="['浏览器']" :values="['支持任意运行在浏览器的JS语言']" :speed="100" />
<tags :className="'type-it3'" :tagNameList="['Node']" :values="['支持NodeJs']" /> -->

### 📦 安装

::: code-group

```bash [pnpm]
pnpm add @pureadmin/utils
```

```bash [yarn]
yarn add @pureadmin/utils
```

```bash [npm]
npm install @pureadmin/utils
```

:::

### 📡 `CDN`

::: code-group

```html [jsdelivr]
<!-- 提供包含所有方法的全局变量 PureUtils -->
<script src="//cdn.jsdelivr.net/npm/@pureadmin/utils"></script>
```

```html [unpkg]
<!-- 提供包含所有方法的全局变量 PureUtils -->
<script src="//unpkg.com/@pureadmin/utils"></script>
```

:::

### 📚 示例

集成 `vue-vite`、`vue-cli`、`preact`、`react`、`solid`、`svelte`、`nuxt3`、`next`、`node`、`html` 使用示例

[查看示例代码](https://github.com/pure-admin/pure-admin-utils-docs/tree/master/playgrounds)

我们为`nuxt3`提供了所有`hooks`示例  
[代码仓库](https://github.com/pure-admin/pure-admin-utils-nuxt3) [在线预览](https://pure-admin.github.io/pure-admin-utils-nuxt3/)

### 🤔 常见问题、反馈

问题：如果自己项目中的函数与 `@pureadmin/utils` 内部的函数名称冲突怎么办？  
答：这种问题很常见，可以使用 `ES6` 提供的 `as` 关键字来为导入的函数重命名，如下：

```ts
import { cloneDeep as _cloneDeep } from "@pureadmin/utils";
_cloneDeep();
```

[反馈问题、新增需求](https://github.com/pure-admin/pure-admin-utils-docs/issues/new)

### 🔔 温馨提示

本站大部分图片使用`Github`静态资源。如遇加载空白或加载图片失败时，刷新几次即可
