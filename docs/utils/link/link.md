<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(1)

import links from './link.vue'
</script>

::: tip 支持任意运行在浏览器的 `JavaScript` 语言
超链接
:::

## openLink

创建超链接

<div class="pure-border">

#### <divider-base /> {#base1}

<links />

<details>

<summary>查看代码</summary>

<<< @/utils/link/link.vue

</details>

#### <divider-param /> {#param1}

接收两个参数，第一个参数 `href` ，第二个参数 `target` ，无返回值

| **参数属性** | **说明**                                 | **类型** | **默认值** |
| ------------ | ---------------------------------------- | -------- | ---------- |
| `href`       | 要跳转的超链接地址                       | `string` |            |
| `target`     | 拥有五个属性，具体看下面的 `target` 详情 | `Target` | `_blank`   |

#### <divider-target /> {#target1}

| **参数属性** | **说明**                           |
| ------------ | ---------------------------------- |
| _\_blank_    | _在新窗口中打开被链接文档（默认）_ |
| _\_self_     | _在相同的框架中打开被链接文档_     |
| _\_parent_   | _在父框架集中打开被链接文档_       |
| _\_top_      | _在整个窗口中打开被链接文档_       |
| _framename_  | _在指定的框架中打开被链接文档_     |

### 类型声明

<<< @/utils/link/types/openLink.ts

</div>
