<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(2)

import banMouseEvent from './banMouseEvent.vue'
import allowMouseEvent from './allowMouseEvent.vue'
</script>

::: tip 支持任意运行在浏览器的 `JavaScript` 语言
禁止、允许指定的鼠标事件
:::

## banMouseEvent

禁止指定的鼠标事件

<div class="pure-border">

#### <divider-base /> {#base1}

<banMouseEvent />

<details>

<summary>查看代码</summary>

<<< @/utils/mouseEvent/banMouseEvent.vue

</details>

#### <divider-param /> {#param1}

接收一个参数 `eventList` ，无返回值

| **参数属性** | **说明**                                                                 | **类型**            |
| ------------ | ------------------------------------------------------------------------ | ------------------- |
| `eventList`  | 鼠标事件（ `contextmenu` ：右键、 `selectstart` ：选择、 `copy` ：拷贝） | `Array<MouseEvent>` |

</div>

## allowMouseEvent

允许指定的鼠标事件

<div class="pure-border">

#### <divider-base /> {#base2}

<allowMouseEvent />

<details>

<summary>查看代码</summary>

<<< @/utils/mouseEvent/allowMouseEvent.vue

</details>

#### <divider-param /> {#param2}

接收一个参数 `eventList` ，无返回值

| **参数属性** | **说明**                                                                 | **类型**            |
| ------------ | ------------------------------------------------------------------------ | ------------------- |
| `eventList`  | 鼠标事件（ `contextmenu` ：右键、 `selectstart` ：选择、 `copy` ：拷贝） | `Array<MouseEvent>` |

</div>
