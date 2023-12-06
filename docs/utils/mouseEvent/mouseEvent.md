<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(2)

import banMouseEvent from './banMouseEvent.vue'
import allowMouseEvent from './allowMouseEvent.vue'
</script>

<!-- # 禁止、允许指定的鼠标事件 -->

::: tip 支持任意运行在浏览器的 `JavaScript` 语言
禁止、允许指定的鼠标事件
:::

<!-- <description-popover :num="2" /> -->

## banMouseEvent

::: info 作用：禁止指定的鼠标事件
:::

<!-- <description :isShowIcon="false" description="禁止指定的鼠标事件" /> -->

### 参数

- 接收一个参数 `eventList` ，无返回值

| **参数属性** | **说明**                                                                 | **类型**            |
| ------------ | ------------------------------------------------------------------------ | ------------------- |
| `eventList`  | 鼠标事件（ `contextmenu` ：右键、 `selectstart` ：选择、 `copy` ：拷贝） | `Array<MouseEvent>` |

### 基础用法

<banMouseEvent />

<details>

<summary>查看代码</summary>

<<< @/utils/mouseEvent/banMouseEvent.vue

</details>

## allowMouseEvent

::: info 作用：允许指定的鼠标事件
:::

<!-- <description :isShowIcon="false" description="允许指定的鼠标事件" /> -->

### 参数

- 接收一个参数 `eventList` ，无返回值

| **参数属性** | **说明**                                                                 | **类型**            |
| ------------ | ------------------------------------------------------------------------ | ------------------- |
| `eventList`  | 鼠标事件（ `contextmenu` ：右键、 `selectstart` ：选择、 `copy` ：拷贝） | `Array<MouseEvent>` |

### 基础用法

<allowMouseEvent />

<details>

<summary>查看代码</summary>

<<< @/utils/mouseEvent/allowMouseEvent.vue

</details>
