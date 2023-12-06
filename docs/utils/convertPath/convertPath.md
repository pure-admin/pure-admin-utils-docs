<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(1)

import convertPath from './convertPath.vue'
</script>

<!-- # 路径转换 -->

::: tip 支持任意运行在 `Node` 的 `JavaScript` 语言
路径转换
:::

<!-- <description-popover :num="1" :tagNameList="['Node']" /> -->

## convertPath

::: info 作用：将 `Windows` 反斜杠路径转换为斜杠路径
:::

<!-- <description :isShowIcon="false" description="将 Windows 反斜杠路径转换为斜杠路径" /> -->

### 参数

- 接收一个参数 `path` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `path`       | 路径地址 | `string` |

### 基础用法

<convertPath />

<details>

<summary>查看代码</summary>

<<< @/utils/convertPath/convertPath.vue

</details>
