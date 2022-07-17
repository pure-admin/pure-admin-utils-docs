<script setup>
import Index from './index.vue'
</script>

# nameTransform

<ClientOnly>
  <description :tagNameList="['浏览器','Node']" description="横线、驼峰命名互转" /> 
</ClientOnly>

## 基础用法
<ClientOnly>
  <Index />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/nameTransform/index.vue

</details>

::: tip
驼峰命名转横线命名：拆分字符串，使用 `-` 相连，并且全部转换为小写
:::