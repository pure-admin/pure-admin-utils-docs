<script setup>
import swapOrder from './swapOrder.vue'
import isIncludeAllChildren from './isIncludeAllChildren.vue'
import intersection from './intersection.vue'
</script>

# 处理数组相关函数

<ClientOnly>
  <description-popover :num="3" :tagNameList="['浏览器','Node']" />
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

<<< @/utils/array/swapOrder.vue

</details>

## isIncludeAllChildren

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="判断一个数组（这里简称为母体）中是否包含了另一个由基本数据类型组成的数组（这里简称为子体）中的全部元素" /> 
</ClientOnly>

### 参数

- 接收二个参数，第一个参数 `c`，第二个参数 `m`，返回值类型为 `boolean`

| **参数属性** | **说明** | **类型**                                           |
| ------------ | -------- | -------------------------------------------------- |
| `c`          | 子体     | `Array<string>`、`Array<number>`、`Array<unknown>` |
| `m`          | 母体     | `Array<unknown>`                                   |

### 基础用法

<ClientOnly>
  <isIncludeAllChildren />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/array/isIncludeAllChildren.vue

</details>

## intersection

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="获取由基本数据类型组成的数组交集" /> 
</ClientOnly>

### 参数

- 接收无数量限制的数组参数，返回由基本数据类型组成的数组交集

### 基础用法

<ClientOnly>
  <intersection />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/array/intersection.vue

</details>
