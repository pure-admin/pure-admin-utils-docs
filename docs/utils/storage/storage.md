<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(2)

import storageLocal from './storageLocal.vue'
import storageSession from './storageSession.vue'
</script>

<!-- # 本地存储 -->

::: tip 支持任意运行在浏览器的 `JavaScript` 语言
本地存储
:::

<!-- <ClientOnly>
  <description-popover :num="2" :tagNameList="['浏览器']" />
</ClientOnly> -->

### storageLocal、storageSession 方法

| **方法名**   | **说明**                    | **参数**                   |
| ------------ | --------------------------- | -------------------------- |
| `setItem`    | 储存对应键名的 Storage 对象 | `k` （键名）, `v` （键值） |
| `getItem`    | 获取对应键名的 Storage 对象 | `k` （键名）               |
| `removeItem` | 删除对应键名的 Storage 对象 | `k` （键名）               |
| `clear`      | 删除此域的所有 Storage 对象 | -                          |

## storageLocal

::: info 作用：处理 `localStorage`
:::

<ClientOnly>
  <description :isShowIcon="false" description="处理 `localStorage`" /> 
</ClientOnly>

### 基础用法

<ClientOnly>
  <storageLocal />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/storage/storageLocal.vue

</details>

## storageSession

::: info 作用：处理 `sessionStorage`
:::

<ClientOnly>
  <description :isShowIcon="false" description="处理 `sessionStorage`" /> 
</ClientOnly>

### 基础用法

<ClientOnly>
  <storageSession />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/storage/storageSession.vue

</details>
