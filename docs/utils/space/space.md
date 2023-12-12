<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(4)

import removeLeftSpace from './removeLeftSpace.vue'
import removeRightSpace from './removeRightSpace.vue'
import removeBothSidesSpace from './removeBothSidesSpace.vue'
import removeAllSpace from './removeAllSpace.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
去掉字符串空格
:::

## removeLeftSpace

去掉字符串左边空格

<div class="pure-border">

#### <divider-base /> {#base1}

<removeLeftSpace />

<details>

<summary>查看代码</summary>

<<< @/utils/space/removeLeftSpace.vue

</details>

#### <divider-param /> {#param1}

接收一个参数 `str` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `str`        | 字符串   | `string` |

</div>

## removeRightSpace

去掉字符串右边空格

<div class="pure-border">

#### <divider-base /> {#base2}

<removeRightSpace />

<details>

<summary>查看代码</summary>

<<< @/utils/space/removeRightSpace.vue

</details>

#### <divider-param /> {#param2}

接收一个参数 `str` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `str`        | 字符串   | `string` |

</div>

## removeBothSidesSpace

去掉字符串左右两边空格

<div class="pure-border">

#### <divider-base /> {#base3}

<removeBothSidesSpace />

<details>

<summary>查看代码</summary>

<<< @/utils/space/removeBothSidesSpace.vue

</details>

#### <divider-param /> {#param3}

接收一个参数 `str` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `str`        | 字符串   | `string` |

</div>

## removeAllSpace

去掉字符串全部空格

<div class="pure-border">

#### <divider-base /> {#base4}

<removeAllSpace />

<details>

<summary>查看代码</summary>

<<< @/utils/space/removeAllSpace.vue

</details>

#### <divider-param /> {#param4}

接收一个参数 `str` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `str`        | 字符串   | `string` |

</div>
