<script setup>
import draggable from './draggable.vue'
import naiveuiBase from './naiveuiBase.vue'
import naiveuiDialog from './naiveuiDialog.vue'
</script>

# useDraggable

::: tip 适用于 `Vue3`、`Nuxt3`、`HTML`
使元素可拖动
:::

### 示例

#### 基础示例

<draggable class="mt-2" />

<details>

<summary>查看代码</summary>

<<< @/hooks/useDraggable/draggable.vue

</details>

#### 可拖动的 [naiveui模态框](https://www.naiveui.com/zh-CN/os-theme/components/modal)

##### 基础用法

<naiveuiBase class="mt-2" />

<details>

<summary>查看代码</summary>

<<< @/hooks/useDraggable/naiveuiBase.vue

</details>

##### 使用 Dialog 预设

哈哈，你没有看错，就是如此简单

<naiveuiDialog class="mt-2" />

<details>

<summary>查看代码</summary>

<<< @/hooks/useDraggable/naiveuiDialog.vue

</details>

### 最简代码

可拖动的`Div`

```vue
<script setup lang="ts">
import { ref } from "vue";
import { useDraggable } from "@pureadmin/utils";

const targetRef = ref();
const dragRef = ref();

const { init } = useDraggable(targetRef, dragRef);
// 初始化开启拖动功能
init();
</script>

<template>
  <div ref="targetRef">
    <div ref="dragRef">
      <!-- 内容区 -->
    </div>
  </div>
</template>
```

### API

#### 参数

```ts
//  在此处配置参数
const {} = useDraggable(targetRef, dragRef, args);
```

<div class="pure-no-border">

| **参数属性** | 必传 | **说明**                                                                                                                                                                                          | **类型**                  |
| ------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `targetRef`  | 是   | 要拖动的元素。可以是[获取DOM元素或组件实例引用的ref](https://cn.vuejs.org/guide/essentials/template-refs.html#template-refs)，也可以是`class类名`（如：`".target"`）或`元素ID`（如：`"#target"`） | `Ref<HTMLElement>/string` |
| `dragRef`    | 是   | 拖动的地方。可以是[获取DOM元素或组件实例引用的ref](https://cn.vuejs.org/guide/essentials/template-refs.html#template-refs)，也可以是`class类名`（如：`".drag"`）或`元素ID`（如：`"#drag"`）       | `Ref<HTMLElement>/string` |
| `args`       | 否   | 额外的可选参数，具体看下面的`args`详情                                                                                                                                                            | `ArgsDraggable`           |

##### `args` 详情

对象格式，拥有下面两个属性

| **参数属性**   | **说明**                                                                                                                                                                                    | **类型**         | **默认值**                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------------------- |
| `dragRefStyle` | 为了方便用户识别可拖动的区域，添加额外样式到`dragRef`上。可以使用`{}`空对象清空默认样式，也可以自定义样式                                                                                   | `CSSProperties`  | `{ cursor: "move", userSelect: "none" }` |
| `resize`       | 当页面`resize`时，如果拖动的元素超出新的视口边界，是否将其恢复到初始位置。`true`：代表恢复到初始位置。`false`：代表不会恢复到初始位置。当然也可以填写`resize`时的防抖延迟时间，默认`60`毫秒 | `boolean/number` | `true`                                   |

</div>

#### 返回值、方法

<div class="pure-no-border">

| **返回值、方法** | **说明**                                                                            | **类型**                             |
| ---------------- | ----------------------------------------------------------------------------------- | ------------------------------------ |
| `draggable`      | 是否已经开启拖动功能（响应式）。`true`代表已开启拖动功能，`false`代表关闭了拖动功能 | `Ref<boolean>`                       |
| `dragging`       | 是否正在拖动中（响应式）。`true`代表正在拖动，`false`代表没有拖动                   | `Ref<boolean>`                       |
| `transform`      | 响应式对象`transform`：包含当前被拖动元素的`offsetX`、`offsetY`信息                 | `{offsetX: number;offsetY: number;}` |
| `init`           | 初始化开启拖动功能                                                                  | `() => void`                         |
| `open`           | 开启拖动功能。常用于当关闭拖动时，想再次开启拖动并在当前所处位置继续拖动            | `() => void`                         |
| `close`          | 关闭拖动功能                                                                        | `() => void`                         |
| `reset`          | 将拖动元素恢复到初始位置                                                            | `() => void`                         |

</div>

<style scoped>
.pure-no-border > table > thead > tr > th:nth-child(2) {
  min-width: 60px;
}
.pure-no-border > table > thead > tr > th:nth-child(1) {
   min-width: 120px;
}
</style>
