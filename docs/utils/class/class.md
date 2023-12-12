<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(5)

import hasClass from './hasClass.vue'
import getClass from './getClass.vue'
import addClass from './addClass.vue'
import removeClass from './removeClass.vue'
import toggleClass from './toggleClass.vue'
</script>

::: tip 支持任意运行在浏览器的 `JavaScript` 语言
处理元素类名
:::

## hasClass

判断元素是否存在指定类名

<div class="pure-border">

#### <divider-base /> {#base1}

<hasClass />

<details>

<summary>查看代码</summary>

<<< @/utils/class/hasClass.vue

</details>

#### <divider-param /> {#param1}

接收两个参数，第一个参数 `element` ，第二个参数 `name` ，返回值类型 `boolean`

| **参数属性** | **说明**       | **类型**                |
| ------------ | -------------- | ----------------------- |
| `element`    | 当前类名的元素 | `HTMLElement`/`Element` |
| `name`       | 类名           | `string`                |

</div>

## getClass

获取当前元素的所有类名

<div class="pure-border">

#### <divider-base /> {#base2}

<getClass />

<details>

<summary>查看代码</summary>

<<< @/utils/class/getClass.vue

</details>

#### <divider-param /> {#param2}

接收一个参数 `element` ，返回值类型 `string | string[]`

| **参数属性** | **说明** | **类型**                |
| ------------ | -------- | ----------------------- |
| `element`    | 当前元素 | `HTMLElement`/`Element` |

</div>

## addClass

向当前元素添加指定类名

<div class="pure-border">

#### <divider-base /> {#base3}

<addClass />

<details>

<summary>查看代码</summary>

<<< @/utils/class/addClass.vue

</details>

#### <divider-param /> {#param3}

接收三个参数，第一个参数 `element` ，第二个参数 `name` ，第三个参数 `extraName` ，无返回值

| **参数属性** | **说明**             | **类型**                |
| ------------ | -------------------- | ----------------------- |
| `element`    | 当前元素             | `HTMLElement`/`Element` |
| `name`       | 类名                 | `string`                |
| `extraName`  | 额外类名（ `可选` ） | `string`                |

</div>

## removeClass

删除当前元素的指定类名

<div class="pure-border">

#### <divider-base /> {#base4}

<removeClass />

<details>

<summary>查看代码</summary>

<<< @/utils/class/removeClass.vue

</details>

#### <divider-param /> {#param4}

接收三个参数，第一个参数 `element` ，第二个参数 `name` ，第三个参数 `extraName` ，无返回值

| **参数属性** | **说明**             | **类型**                |
| ------------ | -------------------- | ----------------------- |
| `element`    | 当前元素             | `HTMLElement`/`Element` |
| `name`       | 类名                 | `string`                |
| `extraName`  | 额外类名（ `可选` ） | `string`                |

</div>

## toggleClass

是否向当前元素添加指定类名

<div class="pure-border">

#### <divider-base /> {#base5}

<toggleClass />

<details>

<summary>查看代码</summary>

<<< @/utils/class/toggleClass.vue

</details>

#### <divider-param /> {#param5}

接收三个参数，第一个参数 `bool` ，第二个参数 `name` ，第三个参数 `element` ，无返回值

| **参数属性** | **说明**                                              | **类型**                |
| ------------ | ----------------------------------------------------- | ----------------------- |
| `bool`       | 是否向当前元素添加指定类名                            | `boolean`               |
| `name`       | 类名                                                  | `string`                |
| `element`    | 当前元素（ `可选` ，如果不填，默认 `document.body` ） | `HTMLElement`/`Element` |

</div>

::: info 提示信息
在基础用法的示例中，通过右键检查元素，可观察元素变化
:::
