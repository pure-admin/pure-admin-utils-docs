<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(1)

import formDataHander from './formDataHander.vue'
</script>

<!-- # 处理 `FormData` 传参 -->

::: tip 支持任意 `JavaScript` 环境或框架
处理 `FormData` 传参
:::

<!-- <ClientOnly>
  <description-popover :num="1" :tagNameList="['浏览器','Node']" />
</ClientOnly> -->

## formDataHander

::: info 作用：处理 `FormData` 传参
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="处理 `FormData` 传参" />
</ClientOnly> -->

### 参数

- 接收一个参数 `obj`，返回值类型 `FormData`

| **参数属性** | **说明**                                      | **类型** |
| ------------ | --------------------------------------------- | -------- |
| `obj`        | 参数，对象格式，例如：`{ a: 1, b: "2", ... }` | `object` |

### 基础用法

<ClientOnly>
  <formDataHander />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/formData/formDataHander.vue

</details>
