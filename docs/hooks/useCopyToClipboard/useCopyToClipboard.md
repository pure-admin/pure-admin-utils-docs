<script setup>
import copyToClipboard from './copyToClipboard.vue'
</script>

# useCopyToClipboard

::: tip 适用于 `Vue3`
拷贝
:::

<!-- <ClientOnly>
  <description description="拷贝" :tagNameList="['Vue3']" />
</ClientOnly> -->

## 基础用法

<ClientOnly>
  <copyToClipboard />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useCopyToClipboard/copyToClipboard.vue

</details>

## 返回值或方法

- `clipboardValue`：要拷贝的数据
- `copied`：是否拷贝成功（`true`：成功、`false`：失败）
