<script setup>
import dark from './dark.vue'
</script>

# useDark

::: tip 适用于 `Vue3`、`Nuxt3`
获取当前网页的主题色
:::

<!-- <description description="获取当前网页的主题色" :tagNameList="['Vue3']" /> -->

## 基础用法

<dark />

<details>

<summary>查看代码</summary>

<<< @/hooks/useDark/dark.vue

</details>

## 返回值或方法

- 响应式`isDark`：当前网页的主题色（`true`: `dark`模式、`false`: `非dark`模式），主要利用 [MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver) 来实时监听`html`元素变化，根据`html`的类名是否含有`dark`来进行判断
