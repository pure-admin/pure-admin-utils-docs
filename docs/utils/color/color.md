<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(5)

import randomColor from './randomColor.vue'
import hexToRgb from './hexToRgb.vue'
import rgbToHex from './rgbToHex.vue'
import darken from './darken.vue'
import lighten from './lighten.vue'
</script>

<!-- # 颜色 -->

::: tip 支持任意 `JavaScript` 环境或框架
颜色
:::

<!-- <description-popover :num="5" :tagNameList="['浏览器','Node']" /> -->

## randomColor

::: info 作用：随机生成颜色
:::

<!-- <description :isShowIcon="false" description="随机生成颜色" /> -->

### 参数

- 接收一个参数 `options` ，返回值类型为 `string | Array<string>`

| **参数属性** | **说明**                                  | **类型**       |
| ------------ | ----------------------------------------- | -------------- |
| `options`    | 拥有两个属性，具体看下面的 `options` 详情 | `ColorOptions` |

#### `options` 详情

| **参数属性** | **说明**                                                                              | **类型**    | **默认值** |
| ------------ | ------------------------------------------------------------------------------------- | ----------- | ---------- |
| `type`       | 颜色格式 `rgb` 、 `hex` 、 `hsl`                                                      | `ColorType` | `rgb`      |
| `num`        | 生成颜色的数量。指定数量，则返回生成颜色数组，数量为 `0` 或不指定，返回生成颜色字符串 | `number`    | `0`        |

### 类型声明

<<< @/utils/color/types/randomColor.ts

### 基础用法

<randomColor />

<details>

<summary>查看代码</summary>

<<< @/utils/color/randomColor.vue

</details>

## hexToRgb

::: info 作用：`hex` 转 `rgb`
:::

<!-- <description :isShowIcon="false" description="hex转rgb" /> -->

### 参数

- 接收一个参数 `str` ，返回值类型 `Array<number>`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `str`        | `hex` 格式 | `string` |

### 基础用法

<hexToRgb />

<details>

<summary>查看代码</summary>

<<< @/utils/color/hexToRgb.vue

</details>

## rgbToHex

::: info 作用：`rgb` 转 `hex`
:::

<!-- <description :isShowIcon="false" description="rgb转hex" /> -->

### 参数

- 接收三个参数，第一个参数 `r` ，第二个参数 `g` ，第三个参数 `b` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `r`          | 红(R)    | `number` |
| `g`          | 绿(G)    | `number` |
| `b`          | 蓝(B)    | `number` |

### 基础用法

<rgbToHex />

<details>

<summary>查看代码</summary>

<<< @/utils/color/rgbToHex.vue

</details>

## darken

::: info 作用：颜色值加深
:::

<!-- <description :isShowIcon="false" description="颜色值加深" /> -->

### 参数

- 接收两个参数，第一个 `color`，第二个 `level`，返回加深后的颜色值，`hex` 格式，返回值类型为 `string`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `color`      | `hex` 格式 | `string` |
| `level`      | 色值度     | `number` |

### 基础用法

<darken />

<details>

<summary>查看代码</summary>

<<< @/utils/color/darken.vue

</details>

## lighten

::: info 作用：颜色值变浅
:::

<!-- <description :isShowIcon="false" description="颜色值变浅" /> -->

### 参数

- 接收两个参数，第一个 `color`，第二个 `level`，返回变浅后的颜色值，`hex` 格式，返回值类型为 `string`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `color`      | `hex` 格式 | `string` |
| `level`      | 色值度     | `number` |

### 基础用法

<lighten />

<details>

<summary>查看代码</summary>

<<< @/utils/color/lighten.vue

</details>

::: warning 推荐文章
[CSS HSL 颜色](https://www.w3school.com.cn/css/css_colors_hsl.asp)
:::
