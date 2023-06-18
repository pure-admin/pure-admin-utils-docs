<script setup>
import hasClass from './hasClass.vue'
import getClass from './getClass.vue'
import addClass from './addClass.vue'
import removeClass from './removeClass.vue'
import toggleClass from './toggleClass.vue'
</script>

# 处理元素类名相关函数

<ClientOnly>
  <description-popover :num="5" />
</ClientOnly>

## hasClass

<ClientOnly>
  <description :isShowIcon="false" description="判断元素是否存在指定类名" /> 
</ClientOnly>

### 参数

- 接收两个参数，第一个参数 `element` ，第二个参数 `name` ，返回值类型 `boolean`

| **参数属性** | **说明**       | **类型**                |
| ------------ | -------------- | ----------------------- |
| `element`    | 当前类名的元素 | `HTMLElement`/`Element` |
| `name`       | 类名           | `string`                |

### 基础用法

<ClientOnly>
  <hasClass />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/class/hasClass.vue

</details>

## getClass

<ClientOnly>
  <description :isShowIcon="false" description="获取当前元素的所有类名" /> 
</ClientOnly>

### 参数

- 接收一个参数 `element` ，返回值类型 `string | string[]`

| **参数属性** | **说明** | **类型**                |
| ------------ | -------- | ----------------------- |
| `element`    | 当前元素 | `HTMLElement`/`Element` |

### 基础用法

<ClientOnly>
  <getClass />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/class/getClass.vue

</details>

## addClass

<ClientOnly>
  <description :isShowIcon="false" description="向当前元素添加指定类名" /> 
</ClientOnly>

### 参数

- 接收三个参数，第一个参数 `element` ，第二个参数 `name` ，第三个参数 `extraName` ，无返回值

| **参数属性** | **说明**             | **类型**                |
| ------------ | -------------------- | ----------------------- |
| `element`    | 当前元素             | `HTMLElement`/`Element` |
| `name`       | 类名                 | `string`                |
| `extraName`  | 额外类名（ `可选` ） | `string`                |

### 基础用法

<ClientOnly>
  <addClass />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/class/addClass.vue

</details>

## removeClass

<ClientOnly>
  <description :isShowIcon="false" description="删除当前元素的指定类名" /> 
</ClientOnly>

### 参数

- 接收三个参数，第一个参数 `element` ，第二个参数 `name` ，第三个参数 `extraName` ，无返回值

| **参数属性** | **说明**             | **类型**                |
| ------------ | -------------------- | ----------------------- |
| `element`    | 当前元素             | `HTMLElement`/`Element` |
| `name`       | 类名                 | `string`                |
| `extraName`  | 额外类名（ `可选` ） | `string`                |

### 基础用法

<ClientOnly>
  <removeClass />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/class/removeClass.vue

</details>

## toggleClass

<ClientOnly>
  <description :isShowIcon="false" description="是否向当前元素添加指定类名" /> 
</ClientOnly>

### 参数

- 接收三个参数，第一个参数 `bool` ，第二个参数 `name` ，第三个参数 `element` ，无返回值

| **参数属性** | **说明**                                              | **类型**                |
| ------------ | ----------------------------------------------------- | ----------------------- |
| `bool`       | 是否向当前元素添加指定类名                            | `boolean`               |
| `name`       | 类名                                                  | `string`                |
| `element`    | 当前元素（ `可选` ，如果不填，默认 `document.body` ） | `HTMLElement`/`Element` |

### 基础用法

<ClientOnly>
  <toggleClass />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/class/toggleClass.vue

</details>
