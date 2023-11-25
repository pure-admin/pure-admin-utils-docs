<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(3)

import delay from './delay.vue'
import debounce from './debounce.vue'
import throttle from './throttle.vue'
</script>

<!-- # 延迟、防抖、节流 -->

::: tip 支持任意 `JavaScript` 环境或框架
延迟、防抖、节流
:::

<!-- <ClientOnly>
  <description-popover :num="3" :tagNameList="['浏览器','Node']" />
</ClientOnly> -->

## delay

::: info 作用：延迟
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="延迟" />
</ClientOnly> -->

### 参数

- 接收一个参数 `timeout` ，返回值类型为 `Promise`

| **参数属性** | **说明**               | **类型** | **默认值** |
| ------------ | ---------------------- | -------- | ---------- |
| `timeout`    | 延迟时间（单位：毫秒） | `number` | `20`       |

### 基础用法

<ClientOnly>
  <delay />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/debounce/delay.vue

</details>

## debounce

::: info 作用：防抖
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="防抖" />
</ClientOnly> -->

### 参数

- 接收三个参数，第一个参数 `fn` ，第二个参数 `timeout` ，第三个参数 `immediate` ，无返回值

| **参数属性** | **说明**         | **类型**       | **默认值** |
| ------------ | ---------------- | -------------- | ---------- |
| `fn`         | 要执行的函数     | `FunctionArgs` |            |
| `timeout`    | 延迟时间（毫秒） | `number`       | `200`      |
| `immediate`  | 是否立即执行     | `boolean`      | `false`    |

### 类型声明

<<< @/utils/debounce/types/debounce.ts

### 基础用法

<ClientOnly>
  <debounce />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/debounce/debounce.vue

</details>

## throttle

::: info 作用：节流
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="节流" />
</ClientOnly> -->

### 参数

- 接收两个参数，第一个参数 `fn` ，第二个参数 `timeout` ，无返回值

| **参数属性** | **说明**         | **类型**       | **默认值** |
| ------------ | ---------------- | -------------- | ---------- |
| `fn`         | 要执行的函数     | `FunctionArgs` |            |
| `timeout`    | 延迟时间（毫秒） | `number`       | `1000`     |

### 类型声明

<<< @/utils/debounce/types/debounce.ts

### 基础用法

<ClientOnly>
  <throttle />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/debounce/throttle.vue

</details>

::: warning 相关信息

防抖：指触发事件后在 `n` 秒内函数只能执行一次，如果在 `n` 秒内又触发了事件，则会重新计算函数执行时间

使用场景：  
 ① 搜索框搜索输入。只需用户最后一次输入完，再发送请求  
 ② 窗口大小 resize。只需窗口调整完成后，计算窗口大小，防止重复渲染  
 ③ 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖  
 ...

节流：连续触发事件但是在 `n` 秒中只执行一次函数，节流会稀释函数的执行频率

使用场景：  
 ① 滚动加载，加载更多或滚到底部监听  
 ② 搜索框，搜索联想功能  
 ...

:::
