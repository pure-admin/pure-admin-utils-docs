<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(4)

import swapOrder from './swapOrder.vue'
import isIncludeAllChildren from './isIncludeAllChildren.vue'
import intersection from './intersection.vue'
import getKeyList from './getKeyList.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
处理数组
:::

## swapOrder

数组中两个元素互换位置（内部使用 `splice` 会改变原数组）

<div class="pure-border">

#### <divider-base /> {#base1}

<swapOrder />

<details>

<summary>查看代码</summary>

<<< @/utils/array/swapOrder.vue

</details>

#### <divider-param /> {#param1}

接收三个参数，第一个参数 `arr` ，第二个参数 `fIndex` ，第三个参数 `sIndex` ，返回值类型 `any[]`

| **参数属性** | **说明**       | **类型** |
| ------------ | -------------- | -------- |
| `arr`        | 数组           | `any[]`  |
| `fIndex`     | 要换的元素索引 | `number` |
| `sIndex`     | 被换的元素索引 | `number` |

</div>

## isIncludeAllChildren

判断一个数组（这里简称为母体）中是否包含了另一个由基本数据类型组成的数组（这里简称为子体）中的全部元素

<div class="pure-border">

#### <divider-base /> {#base2}

<isIncludeAllChildren />

<details>

<summary>查看代码</summary>

<<< @/utils/array/isIncludeAllChildren.vue

</details>

#### <divider-param /> {#param2}

接收二个参数，第一个参数 `c`，第二个参数 `m`，返回值类型为 `boolean`

| **参数属性** | **说明** | **类型**                                         |
| ------------ | -------- | ------------------------------------------------ |
| `c`          | 子体     | `Array<string>`/`Array<number>`/`Array<unknown>` |
| `m`          | 母体     | `Array<unknown>`                                 |

</div>

## intersection

获取由基本数据类型组成的数组交集

<div class="pure-border">

#### <divider-base /> {#base3}

<intersection />

<details>

<summary>查看代码</summary>

<<< @/utils/array/intersection.vue

</details>

#### <divider-param /> {#param3}

接收无数量限制的数组参数，返回由基本数据类型组成的数组交集

</div>

## getKeyList

从数组中获取指定 `key` 组成的新数组，会去重也会去除不存在的值

<div class="pure-border">

#### <divider-base /> {#base4}

<getKeyList />

<details>

<summary>查看代码</summary>

<<< @/utils/array/getKeyList.vue

</details>

#### <divider-param /> {#param4}

接收二个参数，第一个参数 `arr`，第二个参数 `key`，返回值类型为 `any[]`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `arr`        | 数组         | `any[]`  |
| `key`        | 指定的 `key` | `string` |

</div>
