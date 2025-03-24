<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(1)
</script>

::: tip 支持任意运行在浏览器的 `JavaScript` 语言
处理`SVG`
:::

## getSvgInfo

解析传入的SVG字符串并提取其关键信息

<div class="pure-border">

#### <divider-param /> {#param1}

接收一个参数 `svgStr`，返回值类型为 `SvgInfo`

| **参数属性** | **说明**                                   | **类型** |
| ------------ | ------------------------------------------ | -------- |
| `svgStr`     | 包含SVG内容的字符串，格式为标准的`SVG XML` | `string` |

#### <divider-type /> {#type1}

<<< @/utils/svg/types/getSvgInfo.ts

</div>
