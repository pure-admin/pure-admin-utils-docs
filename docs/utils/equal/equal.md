<script setup>
import Index from './index.vue'
</script>

# equal

<ClientOnly>
  <description :tagNameList="['浏览器','Node']" description="判断两者是否相等" /> 
</ClientOnly>

## 基础用法
<ClientOnly>
  <Index />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/equal/index.vue

</details>

::: tip
基础用法中只演示了`isEqual`函数，该函数可以判断全部类型，当然我们还提供了两个额外的函数：  
`isEqualObject`（判断两个对象是否相等）、`isEqualArray`（判断两个数组是否相等）
:::