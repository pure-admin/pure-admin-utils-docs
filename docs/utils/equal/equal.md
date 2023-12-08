<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(3)

import isEqual from './isEqual.vue'
import isEqualArray from './isEqualArray.vue'
import isEqualObject from './isEqualObject.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
判断两者是否相等
:::

## isEqual

判断两者是否相等

<div class="pure-border">

#### <divider-base /> {#base1}

<ClientOnly>
  <isEqual />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/equal/isEqual.vue

</details>

#### <divider-param /> {#param1}

接收两个参数，第一个参数 `a` ，第二个参数 `b` ，返回值类型 `boolean`

| **参数属性** | **说明** | **类型**  |
| ------------ | -------- | --------- |
| `a`          | 前者     | `unknown` |
| `b`          | 后者     | `unknown` |

</div>

## isEqualObject

判断两个对象是否相等

<div class="pure-border">

#### <divider-base /> {#base2}

<isEqualObject />

<details>

<summary>查看代码</summary>

<<< @/utils/equal/isEqualObject.vue

</details>

#### <divider-param /> {#param2}

接收两个参数，第一个参数 `obj` ，第二个参数 `other` ，返回值类型 `boolean`

| **参数属性** | **说明**   | **类型**                              |
| ------------ | ---------- | ------------------------------------- |
| `obj`        | 前一个对象 | `Record<string, unknown>`/`undefined` |
| `other`      | 后一个对象 | `Record<string, unknown>`/`undefined` |

</div>

## isEqualArray

判断两个数组是否相等

<div class="pure-border">

#### <divider-base /> {#base3}

<isEqualArray />

<details>

<summary>查看代码</summary>

<<< @/utils/equal/isEqualArray.vue

</details>

#### <divider-param /> {#param3}

接收两个参数，第一个参数 `obj` ，第二个参数 `other` ，返回值类型 `boolean`

| **参数属性** | **说明**   | **类型**                |
| ------------ | ---------- | ----------------------- |
| `obj`        | 前一个数组 | `unknown[]`/`undefined` |
| `other`      | 后一个数组 | `unknown[]`/`undefined` |

</div>
