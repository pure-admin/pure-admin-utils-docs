<script setup>
import verticalScrollTo from './verticalScrollTo.vue'
import horizontalScrollTo from './horizontalScrollTo.vue'
</script>

# useScrollTo

::: tip 适用于 `Vue3`、`Nuxt3`、`HTML`
使元素可自定义缓动
:::

### 示例

#### 纵向缓动

<verticalScrollTo />

<details>

<summary>查看代码</summary>

<<< @/hooks/useScrollTo/verticalScrollTo.vue

</details>

#### 横向缓动

<horizontalScrollTo />

<details>

<summary>查看代码</summary>

<<< @/hooks/useScrollTo/horizontalScrollTo.vue

</details>

### 最简代码

整页滚动到顶部

```vue
<script setup lang="ts">
import { useScrollTo } from "@pureadmin/utils";

const onPageTop = () => {
  useScrollTo({
    el: document.documentElement,
    to: 0,
    directions: "scrollTop"
  }).start();
};
</script>

<template>
  <button @click="onPageTop">整页滚动到顶部</button>
</template>
```

### API

#### 参数

```ts
//  在此处配置参数
const {} = useScrollTo(options);
```

<div class="pure-no-border">

| **参数属性** | 必传 | **说明**                                                                                                                        | **类型**                     |
| ------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `el`         | 是   | 滚动对象的实例                                                                                                                  | `Ref<Element>`/`HTMLElement` |
| `to`         | 是   | 滚动到某个位置                                                                                                                  | `number`                     |
| `directions` | 是   | 滚动方向                                                                                                                        | `scrollTop`/`scrollLeft`     |
| `duration`   | 否   | 滚动时长，单位毫秒。默认`0`，没有缓动效果                                                                                       | `number`                     |
| `callback`   | 否   | 滚动完毕的回调，返回一个参数`msg`。`msg`等于`滚动完毕`，代表滚动完成；`msg`等于`无需滚动`，代表当前已处于滚动目标位置，无需滚动 | `(msg?:string) => void`      |

</div>

#### 返回值、方法

<div class="pure-no-border">

| **返回值、方法** | **说明** | **类型**     |
| ---------------- | -------- | ------------ |
| `start`          | 开始滚动 | `() => void` |
| `stop`           | 暂停滚动 | `() => void` |

</div>

<style scoped>
.pure-no-border > table > thead > tr > th:nth-child(2) {
  min-width: 60px;
}
</style>
