<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(3)

import buildUUID from './buildUUID.vue'
import buildPrefixUUID from './buildPrefixUUID.vue'
import uuid from './uuid.vue'
</script>

<!-- # uuid -->

::: tip 支持任意 `JavaScript` 环境或框架
uuid
:::

<!-- <description-popover :num="3" :tagNameList="['浏览器','Node']" /> -->

## buildUUID

::: info 作用：生成 `32` 位 `uuid`
:::

<!-- <description :isShowIcon="false" description="生成 `32` 位 `uuid`" /> -->

### 基础用法

<buildUUID />

<details>

<summary>查看代码</summary>

<<< @/utils/uuid/buildUUID.vue

</details>

## buildPrefixUUID

::: info 作用：生成自定义前缀的 `uuid`
:::

<!-- <description :isShowIcon="false" description="生成自定义前缀的 `uuid`" /> -->

### 参数

- 接收一个参数 `prefix` ，返回值类型 `string`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `prefix`     | 自定义前缀 | `string` |

### 基础用法

<buildPrefixUUID />

<details>

<summary>查看代码</summary>

<<< @/utils/uuid/buildPrefixUUID.vue

</details>

## uuid

::: info 作用：生成指定长度和基数的 `uuid`
:::

<!-- <description :isShowIcon="false" description="生成指定长度和基数的 `uuid`" /> -->

### 参数

- 接收三个参数，第一个参数 `len` ，第二个参数 `radix` ，第三个参数 `prefix` ，返回值类型 `string`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `len`        | 指定长度   | `number` |
| `radix`      | 指定基数   | `number` |
| `prefix`     | 自定义前缀 | `string` |

### 基础用法

<uuid />

<details>

<summary>查看代码</summary>

<<< @/utils/uuid/uuid.vue

</details>

::: warning 提示信息

指定基数的母体为：`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`，总长度 `62`

指定基数也就是规定要生成的 `uuid` 采用哪些字符组合，比如基数为 `10`，那么生成的 `uuid` 就会采用基数母体的前 `10` 位进行组合，也就是 `0123456789`
:::
