<script setup>
import verticalScrollTo from './verticalScrollTo.vue'
import horizontalScrollTo from './horizontalScrollTo.vue'
</script>

# useScrollTo

<ClientOnly>
  <description description="使滚动对象缓动" :tagNameList="['Vue3']" /> 
</ClientOnly>

## 纵向缓动

<ClientOnly>
  <verticalScrollTo />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useScrollTo/verticalScrollTo.vue

</details>

## 横向缓动

<ClientOnly>
  <horizontalScrollTo />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useScrollTo/horizontalScrollTo.vue

</details>