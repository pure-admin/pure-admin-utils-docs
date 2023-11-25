<script setup>
import watermark from './watermark.vue'
</script>

# useWatermark

::: tip 适用于 `Vue3`
给元素加水印
:::

<!-- <ClientOnly>
  <description description="给元素加水印" :tagNameList="['Vue3']"  />
</ClientOnly> -->

## 基础用法

<ClientOnly>
  <watermark />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/hooks/useWatermark/watermark.vue

</details>

## 参数

- `appendEl`：要添加水印的主体，默认`body`

## 方法

- `setWatermark`：第一个参数`str`：水印值, 第二个参数`attr`: 水印样式属性
- `clear`：清除水印
