<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(1)

import formDataHander from './formDataHander.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
处理 `FormData` 传参
:::

## formDataHander

处理 `FormData` 传参

<div class="pure-border">

#### <divider-base /> {#base1}

<formDataHander />

<details>

<summary>查看代码</summary>

<<< @/utils/formData/formDataHander.vue

</details>

#### <divider-param /> {#param1}

接收一个参数 `obj`，返回值类型 `FormData`

| **参数属性** | **说明**                                      | **类型** |
| ------------ | --------------------------------------------- | -------- |
| `obj`        | 参数，对象格式，例如：`{ a: 1, b: "2", ... }` | `object` |

</div>
