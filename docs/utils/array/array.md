<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(4)

import swapOrder from './swapOrder.vue'
import isIncludeAllChildren from './isIncludeAllChildren.vue'
import intersection from './intersection.vue'
import getKeyList from './getKeyList.vue'
</script>

<!-- # 处理数组相关方法 -->

::: tip 支持任意 `JavaScript` 环境或框架
处理数组
:::

<!-- <description-popover :num="4" :tagNameList="['浏览器','Node']" /> -->

## swapOrder

::: info 作用：数组中两个元素互换位置（内部使用 `splice` 会改变原数组）
:::

<!-- <description :isShowIcon="false" description="数组中两个元素互换位置（内部使用 splice 会改变原数组）" /> -->

### 参数

- 接收三个参数，第一个参数 `arr` ，第二个参数 `fIndex` ，第三个参数 `sIndex` ，返回值类型 `any[]`

| **参数属性** | **说明**       | **类型** |
| ------------ | -------------- | -------- |
| `arr`        | 数组           | `any[]`  |
| `fIndex`     | 要换的元素索引 | `number` |
| `sIndex`     | 被换的元素索引 | `number` |

### 基础用法

<swapOrder />

<details>

<summary>查看代码</summary>

<<< @/utils/array/swapOrder.vue

</details>

## isIncludeAllChildren

::: info 作用：判断一个数组（这里简称为母体）中是否包含了另一个由基本数据类型组成的数组（这里简称为子体）中的全部元素
:::

<!-- <description :isShowIcon="false" :gradientClass="'mb-2'" description="判断一个数组（这里简称为母体）中是否包含了另一个由基本数据类型组成的数组（这里简称为子体）中的全部元素" /> -->

### 参数

- 接收二个参数，第一个参数 `c`，第二个参数 `m`，返回值类型为 `boolean`

| **参数属性** | **说明** | **类型**                                         |
| ------------ | -------- | ------------------------------------------------ |
| `c`          | 子体     | `Array<string>`/`Array<number>`/`Array<unknown>` |
| `m`          | 母体     | `Array<unknown>`                                 |

### 基础用法

<isIncludeAllChildren />

<details>

<summary>查看代码</summary>

<<< @/utils/array/isIncludeAllChildren.vue

</details>

## intersection

::: info 作用：获取由基本数据类型组成的数组交集
:::

<!-- <description :isShowIcon="false" :gradientClass="'mb-2'" description="获取由基本数据类型组成的数组交集" /> -->

### 参数

- 接收无数量限制的数组参数，返回由基本数据类型组成的数组交集

### 基础用法

<intersection />

<details>

<summary>查看代码</summary>

<<< @/utils/array/intersection.vue

</details>

## getKeyList

::: info 作用：从数组中获取指定 `key` 组成的新数组，会去重也会去除不存在的值
:::

<!-- <description :isShowIcon="false" :gradientClass="'mb-2'" description="从数组中获取指定 key 组成的新数组，会去重也会去除不存在的值" /> -->

### 参数

- 接收二个参数，第一个参数 `arr`，第二个参数 `key`，返回值类型为 `any[]`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `arr`        | 数组         | `any[]`  |
| `key`        | 指定的 `key` | `string` |

### 基础用法

<getKeyList />

<details>

<summary>查看代码</summary>

<<< @/utils/array/getKeyList.vue

</details>
