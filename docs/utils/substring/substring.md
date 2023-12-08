<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(7)

import subBefore from './subBefore.vue'
import subAfter from './subAfter.vue'
import subBothSides from './subBothSides.vue'
import subBetween from './subBetween.vue'
import subTextAddEllipsis from './subTextAddEllipsis.vue'
import splitNum from './splitNum.vue'
import hideTextAtIndex from './hideTextAtIndex.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
截取字符
:::

## subBefore

截取指定字符前面的值

<div class="pure-border">

#### <divider-base /> {#base1}

<subBefore />

<details>

<summary>查看代码</summary>

<<< @/utils/substring/subBefore.vue

</details>

#### <divider-param /> {#param1}

接收两个参数，第一个参数 `val` ，第二个参数 `character` ，返回值类型 `string`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `val`        | 要截取的值 | `string` |
| `character`  | 指定字符   | `string` |

</div>

## subAfter

截取指定字符后面的值

<div class="pure-border">

#### <divider-base /> {#base2}

<subAfter />

<details>

<summary>查看代码</summary>

<<< @/utils/substring/subAfter.vue

</details>

#### <divider-param /> {#param2}

接收两个参数，第一个参数 `val` ，第二个参数 `character` ，返回值类型 `string`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `val`        | 要截取的值 | `string` |
| `character`  | 指定字符   | `string` |

</div>

## subBothSides

截取指定字符两边的值

<div class="pure-border">

#### <divider-base /> {#base3}

<subBothSides />

<details>

<summary>查看代码</summary>

<<< @/utils/substring/subBothSides.vue

</details>

#### <divider-param /> {#param3}

接收两个参数，第一个参数 `val` ，第二个参数 `character` ，返回截取后的值，数组格式，左边返回指定字符前面的值，后边返回指定字符后面的值，返回值类型 `Array<string>`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `val`        | 要截取的值 | `string` |
| `character`  | 指定字符   | `string` |

</div>

## subBetween

截取指定两个字符之间的值

<div class="pure-border">

#### <divider-base /> {#base4}

<subBetween />

<details>

<summary>查看代码</summary>

<<< @/utils/substring/subBetween.vue

</details>

#### <divider-param /> {#param4}

接收两个参数，第一个参数 `val` ，第二个参数 `before` ，第三个参数 `after`，返回值类型 `string`

| **参数属性** | **说明**       | **类型** |
| ------------ | -------------- | -------- |
| `val`        | 要截取的值     | `string` |
| `before`     | 前一个指定字符 | `string` |
| `after`      | 后一个指定字符 | `string` |

</div>

## subTextAddEllipsis

截取字符并追加省略号（常用场景：`echarts`）

<div class="pure-border">

#### <divider-base /> {#base5}

<subTextAddEllipsis />

<details>

<summary>查看代码</summary>

<<< @/utils/substring/subTextAddEllipsis.vue

</details>

#### <divider-param /> {#param5}

接收两个参数，第一个参数 `val` ，第二个参数 `len` ，返回值类型 `string`

| **参数属性** | **说明**     | **类型**          | **默认值** |
| ------------ | ------------ | ----------------- | ---------- |
| `val`        | 要截取的值   | `string`          |            |
| `len`        | 要保留的位数 | `string`/`number` | `3`        |

</div>

## splitNum

将数字拆分为单个数字组成的数组

<div class="pure-border">

#### <divider-base /> {#base6}

<splitNum />

<details>

<summary>查看代码</summary>

<<< @/utils/substring/splitNum.vue

</details>

#### <divider-param /> {#param6}

接收一个参数 `number` ，返回拆分的单个数字集合，返回值类型 `Array<number> | string`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `number`     | 要拆分的数字 | `number` |

</div>

## hideTextAtIndex

使用指定符号对指定的文字进行隐藏，默认使用 `*` 符号

<div class="pure-border">

#### <divider-base /> {#base7}

<hideTextAtIndex />

<details>

<summary>查看代码</summary>

<<< @/utils/substring/hideTextAtIndex.vue

</details>

#### <divider-param /> {#param7}

接收三个参数，第一个参数 `text` ，第二个参数 `index` ，第三个参数 `symbol` ，返回值类型 `string`

| **参数属性** | **说明**                 | **类型**                                                                     |
| ------------ | ------------------------ | ---------------------------------------------------------------------------- |
| `text`       | 文字                     | `string`/`number`                                                            |
| `index`      | 指定的文字索引或索引区间 | `number`/`Array<number\|unknown>`/<br>`HideTextIndex`/`Array<HideTextIndex>` |
| `symbol`     | 指定的符号，默认 `*`     | `string`                                                                     |

#### <divider-type /> {#type7}

<<< @/utils/substring/types/hideTextAtIndex.ts

</div>
