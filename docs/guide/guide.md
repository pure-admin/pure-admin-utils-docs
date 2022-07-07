<script setup>
import describe from './describe.vue'
</script>

<ClientOnly>
  <describe /> 
  <wordcloud/>
</ClientOnly>

## 📦 安装

```bash
# with npm
npm install @pureadmin/utils

# or with yarn
yarn add @pureadmin/utils

# or with pnpm
pnpm add @pureadmin/utils
```

## 🕸️ CDN引用

```bash
# with unpkg
<script src="https://unpkg.com/@pureadmin/utils"></script>

# with jsdelivr
<script src="https://cdn.jsdelivr.net/npm/@pureadmin/utils"></script>
```

:::tip
我们提供了一个全局变量`PureUtils`，里面包含所有方法
:::