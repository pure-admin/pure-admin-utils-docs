<script setup>
import demo1 from "./demo1.vue"
import demo2 from "./demo2.vue"
</script>

# useResizeObserver

::: tip 适用于 `Vue3`、`Nuxt3`、`HTML`
监听元素尺寸的变化，内置自定义防抖时长，支持`ID`和类选择器
:::

### 示例

#### 固定宽高

拖拽下面`textarea`的右下角，观察容器变化

<demo1 />

<details>

<summary>查看代码</summary>

<<< @/hooks/useResizeObserver/demo1.vue

</details>

#### 非固定宽高

拖拽整个页面直到容器尺寸变化

<demo2 />

<details>

<summary>查看代码</summary>

<<< @/hooks/useResizeObserver/demo2.vue

</details>

### 最简代码

监听容器尺寸变化

```vue
<script setup lang="ts">
import { useResizeObserver } from "@pureadmin/utils";
useResizeObserver(".content", () => {
  // 容器尺寸变化回调
});
</script>

<template>
  <div class="content" />
</template>
```

### API

#### 参数

```ts
//  在此处配置参数
const {} = useResizeObserver(target, callback, options);
```

<div class="pure-no-border">

拥有三个参数，详情如下：

| **属性**   | 必传 | **说明**                                                                                                                                            | **类型**                                                                           |
| ---------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `target`   | 是   | 监听哪个容器元素，可以是类名（`'.class'`）、`ID`（`'.id'`），也可以是 [ref](https://cn.vuejs.org/guide/essentials/template-refs.html#template-refs) | `string`、`ElementRef<HTMLDivElement>`、`string[]`、`ElementRef<HTMLDivElement>[]` |
| `callback` | 是   | 容器尺寸变化后的回调函数，返回一个`entries`数组对象，对象为监听容器元素的宽高等属性值                                                               | `ResizeObserverCallback`                                                           |
| `options`  | 否   | 额外参数，具体看下面的 [`options`详情](useResizeObserver#options详情)                                                                               | `UseResizeObserverOptions`                                                         |

##### `options`详情

| **属性**    | **说明**                                                                                                                                                                                                                | **类型**  | 默认值        |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------- |
| `time`      | 防抖延迟时间，单位：毫秒                                                                                                                                                                                                | `number`  | `40`          |
| `immediate` | 初始化时是否立刻触发回调                                                                                                                                                                                                | `boolean` | `true`        |
| `box`       | 拥有三个可选项。`content-box`（默认）指的是元素的内容区域尺寸，不包括边框和内边距；`border-box`指的是元素的边框盒尺寸，包括内容、内边距和边框，但不包括外边距；`device-pixel-content-box`指的是设备像素级别观察尺寸变化 | `string`  | `content-box` |

</div>

#### 返回值、方法

<div class="pure-no-border">

| **返回值、方法** | **说明**                                   | **类型**     |
| ---------------- | ------------------------------------------ | ------------ |
| `stop`           | 停止监听                                   | `() => void` |
| `restart`        | 重新启用监听，常用于停止监听后重新启用监听 | `() => void` |

</div>

#### 类型声明

<<< @/hooks/useResizeObserver/types/useResizeObserver.ts

<style scoped>
#VPContent > div > div > div.content > div > main > div > div > div:nth-child(18) > table:nth-child(2) > thead > tr > th:nth-child(2) {
  min-width: 60px;
}
#VPContent > div > div > div.content > div > main > div > div > div:nth-child(18) > table:nth-child(4) > thead > tr > th:nth-child(4) {
  min-width: 130px;
}
</style>
