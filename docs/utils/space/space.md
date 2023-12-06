<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(4)

import removeLeftSpace from './removeLeftSpace.vue'
import removeRightSpace from './removeRightSpace.vue'
import removeBothSidesSpace from './removeBothSidesSpace.vue'
import removeAllSpace from './removeAllSpace.vue'
</script>

<!-- # 去掉字符串空格 -->

::: tip 支持任意 `JavaScript` 环境或框架
去掉字符串空格
:::

<!-- <description-popover :num="4" :tagNameList="['浏览器','Node']" /> -->

## removeLeftSpace

::: info 作用：去掉字符串左边空格
:::

<!-- <description :isShowIcon="false" description="去掉字符串左边空格" /> -->

### 参数

- 接收一个参数 `str` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `str`        | 字符串   | `string` |

### 基础用法

<removeLeftSpace />

<details>

<summary>查看代码</summary>

<<< @/utils/space/removeLeftSpace.vue

</details>

## removeRightSpace

::: info 作用：去掉字符串右边空格
:::

<!-- <description :isShowIcon="false" description="去掉字符串右边空格" /> -->

### 参数

- 接收一个参数 `str` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `str`        | 字符串   | `string` |

### 基础用法

<removeRightSpace />

<details>

<summary>查看代码</summary>

<<< @/utils/space/removeRightSpace.vue

</details>

## removeBothSidesSpace

::: info 作用：去掉字符串左右两边空格
:::

<!-- <description :isShowIcon="false" description="去掉字符串左右两边空格" /> -->

### 参数

- 接收一个参数 `str` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `str`        | 字符串   | `string` |

### 基础用法

<removeBothSidesSpace />

<details>

<summary>查看代码</summary>

<<< @/utils/space/removeBothSidesSpace.vue

</details>

## removeAllSpace

::: info 作用：去掉字符串全部空格
:::

<!-- <description :isShowIcon="false" description="去掉字符串全部空格" /> -->

### 参数

- 接收一个参数 `str` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `str`        | 字符串   | `string` |

### 基础用法

<removeAllSpace />

<details>

<summary>查看代码</summary>

<<< @/utils/space/removeAllSpace.vue

</details>
