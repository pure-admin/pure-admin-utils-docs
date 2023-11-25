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

<!-- # 截取字符 -->

::: tip 支持任意 `JavaScript` 环境或框架
截取字符
:::

<!-- <ClientOnly>
  <description-popover :num="7" :tagNameList="['浏览器','Node']" />
</ClientOnly> -->

## subBefore

::: info 作用：截取指定字符前面的值
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="截取指定字符前面的值" />
</ClientOnly> -->

### 参数

- 接收两个参数，第一个参数 `val` ，第二个参数 `character` ，返回值类型 `string`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `val`        | 要截取的值 | `string` |
| `character`  | 指定字符   | `string` |

### 基础用法

<ClientOnly>
  <subBefore />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/substring/subBefore.vue

</details>

## subAfter

::: info 作用：截取指定字符后面的值
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="截取指定字符后面的值" />
</ClientOnly> -->

### 参数

- 接收两个参数，第一个参数 `val` ，第二个参数 `character` ，返回值类型 `string`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `val`        | 要截取的值 | `string` |
| `character`  | 指定字符   | `string` |

### 基础用法

<ClientOnly>
  <subAfter />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/substring/subAfter.vue

</details>

## subBothSides

::: info 作用：截取指定字符两边的值
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="截取指定字符两边的值" />
</ClientOnly> -->

### 参数

- 接收两个参数，第一个参数 `val` ，第二个参数 `character` ，返回截取后的值，数组格式，左边返回指定字符前面的值，后边返回指定字符后面的值，返回值类型 `Array<string>`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `val`        | 要截取的值 | `string` |
| `character`  | 指定字符   | `string` |

### 基础用法

<ClientOnly>
  <subBothSides />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/substring/subBothSides.vue

</details>

## subBetween

::: info 作用：截取指定两个字符之间的值
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="截取指定两个字符之间的值" />
</ClientOnly> -->

### 参数

- 接收两个参数，第一个参数 `val` ，第二个参数 `before` ，第三个参数 `after`，返回值类型 `string`

| **参数属性** | **说明**       | **类型** |
| ------------ | -------------- | -------- |
| `val`        | 要截取的值     | `string` |
| `before`     | 前一个指定字符 | `string` |
| `after`      | 后一个指定字符 | `string` |

### 基础用法

<ClientOnly>
  <subBetween />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/substring/subBetween.vue

</details>

## subTextAddEllipsis

::: info 作用：截取字符并追加省略号（常用场景：`echarts`）
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="截取字符并追加省略号（常用场景：`echarts`）" />
</ClientOnly> -->

### 参数

- 接收两个参数，第一个参数 `val` ，第二个参数 `len` ，返回值类型 `string`

| **参数属性** | **说明**     | **类型**          | **默认值** |
| ------------ | ------------ | ----------------- | ---------- |
| `val`        | 要截取的值   | `string`          |            |
| `len`        | 要保留的位数 | `string`/`number` | `3`        |

### 基础用法

<ClientOnly>
  <subTextAddEllipsis />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/substring/subTextAddEllipsis.vue

</details>

## splitNum

::: info 作用：将数字拆分为单个数字组成的数组
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="将数字拆分为单个数字组成的数组" />
</ClientOnly> -->

### 参数

- 接收一个参数 `number` ，返回拆分的单个数字集合，返回值类型 `Array<number> | string`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `number`     | 要拆分的数字 | `number` |

### 基础用法

<ClientOnly>
  <splitNum />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/substring/splitNum.vue

</details>

## hideTextAtIndex

::: info 作用：使用指定符号对指定的文字进行隐藏，默认使用 `*` 符号
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="使用指定符号对指定的文字进行隐藏，默认使用 `*` 符号" />
</ClientOnly> -->

### 参数

- 接收三个参数，第一个参数 `text` ，第二个参数 `index` ，第三个参数 `symbol` ，返回值类型 `string`

| **参数属性** | **说明**                 | **类型**                                                                     | **默认值** |
| ------------ | ------------------------ | ---------------------------------------------------------------------------- | ---------- |
| `text`       | 文字                     | `string`/`number`                                                            |            |
| `index`      | 指定的文字索引或索引区间 | `number`/`Array<number\|unknown>`/<br>`HideTextIndex`/`Array<HideTextIndex>` |            |
| `symbol`     | 指定的符号，默认 `*`     | `string`                                                                     | `*`        |

### 类型声明

<<< @/utils/substring/types/hideTextAtIndex.ts

### 基础用法

<ClientOnly>
  <hideTextAtIndex />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/substring/hideTextAtIndex.vue

</details>
