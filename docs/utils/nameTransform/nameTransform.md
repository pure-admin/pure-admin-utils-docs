<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(2)

import nameCamelize from './nameCamelize.vue'
import nameHyphenate from './nameHyphenate.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
横线、驼峰命名互转
:::

## nameCamelize

横线转驼峰命名

<div class="pure-border">

#### <divider-base /> {#base1}

<nameCamelize />

<details>

<summary>查看代码</summary>

<<< @/utils/nameTransform/nameCamelize.vue

</details>

#### <divider-param /> {#param1}

接收一个参数 `str` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `str`        | 字符串   | `string` |

</div>

## nameHyphenate

驼峰命名转横线命名：拆分字符串，使用 `-` 相连，并且全部转换为小写

<div class="pure-border">

#### <divider-base /> {#base2}

<nameHyphenate />

<details>

<summary>查看代码</summary>

<<< @/utils/nameTransform/nameHyphenate.vue

</details>

#### <divider-param /> {#param2}

接收一个参数 `str` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `str`        | 字符串   | `string` |

</div>
