<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(10)

import getKeyList from './getKeyList.vue'
import extractFields from './extractFields.vue'
import arrayAllExist from "./arrayAllExist.vue"
import arrayAllExistDeep from "./arrayAllExistDeep.vue"
import arrayAnyExist from "./arrayAnyExist.vue"
import arrayAnyExistDeep from "./arrayAnyExistDeep.vue"
import swapOrder from './swapOrder.vue'
import isIncludeAllChildren from './isIncludeAllChildren.vue'
import intersection from './intersection.vue'
import randomDivide from './randomDivide.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
处理数组
:::

## getKeyList

从数组中获取指定 `key` 组成的新数组，会去重也会去除不存在的值

<div class="pure-border">

#### <divider-base /> {#base1}

<getKeyList />

<details>

<summary>查看代码</summary>

<<< @/utils/array/getKeyList.vue

</details>

#### <divider-param /> {#param1}

接收三个参数，第一个参数 `arr`，第二个参数 `key`，第三个参数 `duplicates`，返回值类型为 `any[]`

| **参数属性** | **说明**                                        | **类型**  |
| ------------ | ----------------------------------------------- | --------- |
| `arr`        | 数组                                            | `any[]`   |
| `key`        | 指定的 `key`                                    | `string`  |
| `duplicates` | 是否去重，默认 `true` 去重，可选 `false` 不去重 | `boolean` |

</div>

## extractFields

提取对象数组中的任意字段，返回一个新的数组

<div class="pure-border">

#### <divider-base /> {#base2}

<extractFields />

<details>

<summary>查看代码</summary>

<<< @/utils/array/extractFields.vue

</details>

#### <divider-param /> {#param2}

接收无限参数，第一个参数 `array`，剩余参数`keys`，返回值类型为 `any[]`

| **参数属性** | **说明**               | **类型** |
| ------------ | ---------------------- | -------- |
| `array`      | 数组                   | `any[]`  |
| `keys`       | 任意指定字段，不限数量 | `string` |

</div>

## arrayAllExist

检测一个数组是否包含另一个数组中所有的值（内部使用`new Set`性能更好。该方法只针对基本数据类型，需要更复杂的场景可以用`arrayAllExistDeep`）

<div class="pure-border">

#### <divider-base /> {#base3}

<arrayAllExist />

<details>

<summary>查看代码</summary>

<<< @/utils/array/arrayAllExist.vue

</details>

#### <divider-param /> {#param3}

接收二个参数，第一个参数 `array`，第二个参数 `checkArray`，返回值类型为 `boolean`

| **参数属性** | **说明**               | **类型**         |
| ------------ | ---------------------- | ---------------- |
| `array`      | 初始数组               | `Array<unknown>` |
| `checkArray` | 与初始数组做对比的数组 | `Array<unknown>` |

</div>

## arrayAllExistDeep

检测一个数组是否包含另一个数组中所有的值（深度对比）

<div class="pure-border">

#### <divider-base /> {#base4}

<arrayAllExistDeep />

<details>

<summary>查看代码</summary>

<<< @/utils/array/arrayAllExistDeep.vue

</details>

#### <divider-param /> {#param4}

接收二个参数，第一个参数 `array`，第二个参数 `checkArray`，返回值类型为 `boolean`

| **参数属性** | **说明**               | **类型**         |
| ------------ | ---------------------- | ---------------- |
| `array`      | 初始数组               | `Array<unknown>` |
| `checkArray` | 与初始数组做对比的数组 | `Array<unknown>` |

</div>

## arrayAnyExist

检测一个数组是否包含另一个数组中任意一个值（内部使用`new Set`性能更好。该方法只针对基本数据类型，需要更复杂的场景可以用`arrayAnyExistDeep`）

<div class="pure-border">

#### <divider-base /> {#base5}

<arrayAnyExist />

<details>

<summary>查看代码</summary>

<<< @/utils/array/arrayAnyExist.vue

</details>

#### <divider-param /> {#param5}

接收二个参数，第一个参数 `array`，第二个参数 `checkArray`，返回值类型为 `boolean`

| **参数属性** | **说明**               | **类型**         |
| ------------ | ---------------------- | ---------------- |
| `array`      | 初始数组               | `Array<unknown>` |
| `checkArray` | 与初始数组做对比的数组 | `Array<unknown>` |

</div>

## arrayAnyExistDeep

检测一个数组是否包含另一个数组中任意一个值（深度对比）

<div class="pure-border">

#### <divider-base /> {#base6}

<arrayAnyExistDeep />

<details>

<summary>查看代码</summary>

<<< @/utils/array/arrayAnyExistDeep.vue

</details>

#### <divider-param /> {#param6}

接收二个参数，第一个参数 `array`，第二个参数 `checkArray`，返回值类型为 `boolean`

| **参数属性** | **说明**               | **类型**         |
| ------------ | ---------------------- | ---------------- |
| `array`      | 初始数组               | `Array<unknown>` |
| `checkArray` | 与初始数组做对比的数组 | `Array<unknown>` |

</div>

## swapOrder

数组中两个元素互换位置（内部使用 `splice` 会改变原数组）

<div class="pure-border">

#### <divider-base /> {#base7}

<swapOrder />

<details>

<summary>查看代码</summary>

<<< @/utils/array/swapOrder.vue

</details>

#### <divider-param /> {#param7}

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

#### <divider-base /> {#base8}

<isIncludeAllChildren />

<details>

<summary>查看代码</summary>

<<< @/utils/array/isIncludeAllChildren.vue

</details>

#### <divider-param /> {#param8}

接收二个参数，第一个参数 `c`，第二个参数 `m`，返回值类型为 `boolean`

| **参数属性** | **说明** | **类型**                                         |
| ------------ | -------- | ------------------------------------------------ |
| `c`          | 子体     | `Array<string>`/`Array<number>`/`Array<unknown>` |
| `m`          | 母体     | `Array<unknown>`                                 |

</div>

## intersection

获取由基本数据类型组成的数组交集

<div class="pure-border">

#### <divider-base /> {#base9}

<intersection />

<details>

<summary>查看代码</summary>

<<< @/utils/array/intersection.vue

</details>

#### <divider-param /> {#param9}

接收无数量限制的数组参数，返回由基本数据类型组成的数组交集

</div>

## randomDivide

将一个总数随机分配到指定份数的数组中，并按指定顺序返回数组（内部使用`Knuth`洗牌算法）

<div class="pure-border">

#### <divider-base /> {#base10}

<randomDivide />

<details>

<summary>查看代码</summary>

<<< @/utils/array/randomDivide.vue

</details>

#### <divider-param /> {#param10}

接收三个参数，第一个参数 `total`，第二个参数 `parts`，第三个参数 `options`，返回值类型为 `number[]`

| **参数属性** | **说明**                                | **类型**        |
| ------------ | --------------------------------------- | --------------- |
| `total`      | 需要被分配的总数                        | `number`        |
| `parts`      | 将总数分成多少份                        | `number`        |
| `options`    | 额外参数对象，具体看下面的`options`详情 | `DivideOptions` |

#### `options`详情

| **属性**     | **说明**                                                            | **类型** | 默认值     |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| `minPerPart` | 每一份的最小阀值                                                    | `number` | `0`        |
| `maxPerPart` | 每一份的最大阀值。默认最大阀值不会超过总数                          | `number` |            |
| `order`      | 返回数组的排序方式：递增(`'asc'`)、递减(`'desc'`)、随机(`'random'`) | `string` | `'random'` |

#### <divider-type /> {#type10}

<<< @/utils/array/types/randomDivide.ts

</div>
