<script setup>
import verticalScrollTo from './verticalScrollTo.vue'
import horizontalScrollTo from './horizontalScrollTo.vue'
</script>

# useScrollTo

::: tip 适用于 `Vue3`、`Nuxt3`（后续将支持`React`和`Next`）
使滚动对象缓动
:::

<!-- <description description="使滚动对象缓动" :tagNameList="['Vue3']" /> -->

## 纵向缓动

<verticalScrollTo />

<details>

<summary>查看代码</summary>

<<< @/hooks/useScrollTo/verticalScrollTo.vue

</details>

## 横向缓动

<horizontalScrollTo />

<details>

<summary>查看代码</summary>

<<< @/hooks/useScrollTo/horizontalScrollTo.vue

</details>
