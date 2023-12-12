<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(1)

import convertPath from './convertPath.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
路径转换
:::

## convertPath

将 `Windows` 反斜杠路径转换为斜杠路径

<div class="pure-border">

#### <divider-base /> {#base1}

<convertPath />

<details>

<summary>查看代码</summary>

<<< @/utils/convertPath/convertPath.vue

</details>

#### <divider-param /> {#param1}

接收一个参数 `path` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `path`       | 路径地址 | `string` |

</div>
