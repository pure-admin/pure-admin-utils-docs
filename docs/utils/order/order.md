<script setup>
import swapOrder from './swapOrder.vue'
</script>

# 处理数组中元素位置相关函数

<ClientOnly>
  <description-popover :num="1" :tagNameList="['浏览器','Node']" />
</ClientOnly>

## swapOrder

<ClientOnly>
  <description :isShowIcon="false" description="数组中两个元素互换位置（内部使用 splice 会改变原数组）" /> 
</ClientOnly>

### 参数

- 接收三个参数，第一个参数 `arr` ，第二个参数 `fIndex` ，第三个参数 `sIndex` ，返回值类型 `any[]`

| **参数属性** | **说明**       | **类型** |
| ------------ | -------------- | -------- |
| `arr`        | 数组           | `any[]`  |
| `fIndex`     | 要换的元素索引 | `number` |
| `sIndex`     | 被换的元素索引 | `number` |

### 基础用法

<ClientOnly>
  <swapOrder />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/order/swapOrder.vue

</details>
