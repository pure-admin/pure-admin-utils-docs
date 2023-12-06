<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(5)

import hasClass from './hasClass.vue'
import getClass from './getClass.vue'
import addClass from './addClass.vue'
import removeClass from './removeClass.vue'
import toggleClass from './toggleClass.vue'
</script>

<!-- # 处理元素类名 -->

::: tip 支持任意运行在浏览器的 `JavaScript` 语言
处理元素类名
:::

<!-- <description-popover :num="5" /> -->

## hasClass

::: info 作用：判断元素是否存在指定类名
:::

<!-- <description :isShowIcon="false" description="判断元素是否存在指定类名" /> -->

### 参数

- 接收两个参数，第一个参数 `element` ，第二个参数 `name` ，返回值类型 `boolean`

| **参数属性** | **说明**       | **类型**                |
| ------------ | -------------- | ----------------------- |
| `element`    | 当前类名的元素 | `HTMLElement`/`Element` |
| `name`       | 类名           | `string`                |

### 基础用法

<hasClass />

<details>

<summary>查看代码</summary>

<<< @/utils/class/hasClass.vue

</details>

## getClass

::: info 作用：获取当前元素的所有类名
:::

<!-- <description :isShowIcon="false" description="获取当前元素的所有类名" /> -->

### 参数

- 接收一个参数 `element` ，返回值类型 `string | string[]`

| **参数属性** | **说明** | **类型**                |
| ------------ | -------- | ----------------------- |
| `element`    | 当前元素 | `HTMLElement`/`Element` |

### 基础用法

<getClass />

<details>

<summary>查看代码</summary>

<<< @/utils/class/getClass.vue

</details>

## addClass

::: info 作用：向当前元素添加指定类名
:::

<!-- <description :isShowIcon="false" description="向当前元素添加指定类名" /> -->

### 参数

- 接收三个参数，第一个参数 `element` ，第二个参数 `name` ，第三个参数 `extraName` ，无返回值

| **参数属性** | **说明**             | **类型**                |
| ------------ | -------------------- | ----------------------- |
| `element`    | 当前元素             | `HTMLElement`/`Element` |
| `name`       | 类名                 | `string`                |
| `extraName`  | 额外类名（ `可选` ） | `string`                |

### 基础用法

<addClass />

<details>

<summary>查看代码</summary>

<<< @/utils/class/addClass.vue

</details>

## removeClass

::: info 作用：删除当前元素的指定类名
:::

<!-- <description :isShowIcon="false" description="删除当前元素的指定类名" /> -->

### 参数

- 接收三个参数，第一个参数 `element` ，第二个参数 `name` ，第三个参数 `extraName` ，无返回值

| **参数属性** | **说明**             | **类型**                |
| ------------ | -------------------- | ----------------------- |
| `element`    | 当前元素             | `HTMLElement`/`Element` |
| `name`       | 类名                 | `string`                |
| `extraName`  | 额外类名（ `可选` ） | `string`                |

### 基础用法

<removeClass />

<details>

<summary>查看代码</summary>

<<< @/utils/class/removeClass.vue

</details>

## toggleClass

::: info 作用：是否向当前元素添加指定类名
:::

<!-- <description :isShowIcon="false" description="是否向当前元素添加指定类名" /> -->

### 参数

- 接收三个参数，第一个参数 `bool` ，第二个参数 `name` ，第三个参数 `element` ，无返回值

| **参数属性** | **说明**                                              | **类型**                |
| ------------ | ----------------------------------------------------- | ----------------------- |
| `bool`       | 是否向当前元素添加指定类名                            | `boolean`               |
| `name`       | 类名                                                  | `string`                |
| `element`    | 当前元素（ `可选` ，如果不填，默认 `document.body` ） | `HTMLElement`/`Element` |

### 基础用法

<toggleClass />

<details>

<summary>查看代码</summary>

<<< @/utils/class/toggleClass.vue

</details>
