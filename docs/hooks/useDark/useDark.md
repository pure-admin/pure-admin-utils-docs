<script setup>
import dark from "./dark.vue"
import { onMounted, inject } from "vue"
import { useDark } from "@pureadmin/utils"

onMounted(() => {
  console.log(isDark.value ? "dark" : "light")
})
const { isDark } = useDark()
const toggle = inject("toggle-appearance", () => {
  isDark.value = !isDark.value
})
</script>

# useDark

::: tip 适用于 `Vue3`、`Nuxt3`
检测网页整体是否处于暗色（`dark`）主题，它是响应式的
:::

### 最简代码

检测当前整个网页是否处于`dark`主题

```vue
<script setup lang="ts">
import { useDark } from "@pureadmin/utils";
const { isDark } = useDark();
</script>
```

### API

#### 参数

```ts
//  在此处配置参数
const {} = useDark(options);
```

<div class="pure-no-border">

拥有一个参数`options`对象，详情如下：

| **属性**    | 必传 | **说明**                                           | **类型** |
| ----------- | ---- | -------------------------------------------------- | -------- |
| `selector`  | 否   | 自定义选择器，默认`html`，可选`body`               | `string` |
| `className` | 否   | 检测某个类名是否在`html`或`body`上存在，默认`dark` | `string` |

</div>

#### 返回值、方法

<div class="pure-no-border">

| **返回值、方法** | **说明**                             | **类型**              |
| ---------------- | ------------------------------------ | --------------------- |
| `isDark`         | 当前整个网页是否处于暗色(`dark`)主题 | `ShallowRef<boolean>` |
| `toggleDark`     | `dark`和非`dark`主题间相互切换       | `() => void`          |

</div>

### 示例

<!-- <dark /> -->

<naive-theme>
  <n-button class="mt-2" @click="toggle">{{ `当前网页处于 ${isDark ? 'dark' : 'light'} 主题，点击切换主题` }}</n-button>
</naive-theme>

<details>

<summary>查看代码</summary>

<<< @/hooks/useDark/dark.vue

</details>
