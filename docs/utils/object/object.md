<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(1)
</script>

::: tip 支持任意 `JavaScript` 环境或框架
处理对象
:::

## delObjectProperty

从对象中删除指定的属性，返回修改后的新对象，不会修改原始对象

<div class="pure-border">

接收两个参数，第一个 `obj`，第二个 `props`

| **参数属性** | **说明**                                                         |
| ------------ | ---------------------------------------------------------------- |
| `obj`        | 需要删除属性的对象                                               |
| `props`      | 指定要删除的属性，可以是单个属性名(字符串)或一个属性名字符串数组 |

</div>
