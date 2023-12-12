<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(2)

import getQueryMap from './getQueryMap.vue'
import getLocation from './getLocation.vue'
</script>

::: tip 支持任意运行在浏览器的 `JavaScript` 语言
提取 `url` 中所有参数、获取当前的 `location` 信息
:::

## getQueryMap

提取浏览器 `url` 中所有参数

<div class="pure-border">

#### <divider-base /> {#base1}

<getQueryMap />

<details>

<summary>查看代码</summary>

<<< @/utils/url/getQueryMap.vue

</details>

#### <divider-param /> {#param1}

接收一个参数 `url` ，返回值类型 `object`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `url`        | 超链接地址 | `string` |

</div>

## getLocation

获取浏览器当前的 `location` 信息

<div class="pure-border">

<getLocation />

<details>

<summary>查看代码</summary>

<<< @/utils/url/getLocation.vue

</details>

</div>
