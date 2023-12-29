<script setup>
import inputCopy from './input.vue'
import codeCopy from './code.vue'
</script>

# useCopyToClipboard

::: tip 适用于 `Vue3`、`Nuxt3`、`HTML`
文本拷贝
:::

### 最简代码

拷贝文本

```vue
<script setup lang="ts">
import { ref } from "vue";
import { useCopyToClipboard } from "@pureadmin/utils";

let textValue = ref(""); // 要拷贝的文本值
const { copied, update } = useCopyToClipboard();

function copy() {
  update(textValue); // 更新要拷贝的文本值
  if (copied.value) {
    //  拷贝成功
  }
}
</script>

<template>
  <button @click="copy">拷贝</button>
</template>
```

### API

#### 参数

```ts
//  在此处配置参数
const {} = useCopyToClipboard(defaultValue);
```

<div class="pure-no-border">

| **参数属性**   | 必传 | **说明**                                     | **类型** |
| -------------- | ---- | -------------------------------------------- | -------- |
| `defaultValue` | 否   | 当要拷贝的文本值为空时，拷贝的值，默认不设置 | `string` |

</div>

#### 返回值、方法

<div class="pure-no-border">

| **返回值、方法** | **说明**                                              | **类型**                              |
| ---------------- | ----------------------------------------------------- | ------------------------------------- |
| `clipboardValue` | 拷贝后的文本值                                        | `ShallowRef<string>`                  |
| `copied`         | 是否拷贝成功。`true`代表拷贝成功，`false`代表拷贝失败 | `ShallowRef<boolean>`                 |
| `update`         | 更新要拷贝的文本值                                    | `(value: string/Ref<string>) => void` |

</div>

### 示例

#### 文本拷贝

<inputCopy />

<details>

<summary>查看代码</summary>

<<< @/hooks/useCopyToClipboard/input.vue

</details>

#### 代码片段拷贝

自动保留代码的空格、换行符和缩进

<codeCopy />

<details>

<summary>查看代码</summary>

<<< @/hooks/useCopyToClipboard/code.vue

</details>
