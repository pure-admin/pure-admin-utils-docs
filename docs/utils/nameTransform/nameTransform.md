<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(2)

import nameCamelize from './nameCamelize.vue'
import nameHyphenate from './nameHyphenate.vue'
</script>

<!-- # 横线、驼峰命名互转 -->

::: tip 支持任意 `JavaScript` 环境或框架
横线、驼峰命名互转
:::

<!-- <description-popover :num="2" :tagNameList="['浏览器','Node']" /> -->

## nameCamelize

::: info 作用：横线转驼峰命名
:::

<!-- <description :isShowIcon="false" description="横线转驼峰命名" /> -->

### 参数

- 接收一个参数 `str` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `str`        | 字符串   | `string` |

### 基础用法

<nameCamelize />

<details>

<summary>查看代码</summary>

<<< @/utils/nameTransform/nameCamelize.vue

</details>

## nameHyphenate

::: info 作用：驼峰命名转横线命名：拆分字符串，使用 `-` 相连，并且全部转换为小写
:::

<!-- <description :isShowIcon="false" description="驼峰命名转横线命名：拆分字符串，使用 `-` 相连，并且全部转换为小写" /> -->

### 参数

- 接收一个参数 `str` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `str`        | 字符串   | `string` |

### 基础用法

<nameHyphenate />

<details>

<summary>查看代码</summary>

<<< @/utils/nameTransform/nameHyphenate.vue

</details>
