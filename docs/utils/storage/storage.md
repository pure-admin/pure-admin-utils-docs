<script setup>
import storageLocal from './storageLocal.vue'
import storageSession from './storageSession.vue'
</script>

# 本地存储相关函数

<ClientOnly>
  <description-popover :num="2" :tagNameList="['浏览器']" />
</ClientOnly>

### storageLocal、storageSession 方法

| **方法名**   | **说明**                    | **参数**                   |
| ------------ | --------------------------- | -------------------------- |
| `setItem`    | 储存对应键名的 Storage 对象 | `k` （键名）, `v` （键值） |
| `getItem`    | 获取对应键名的 Storage 对象 | `k` （键名）               |
| `removeItem` | 删除对应键名的 Storage 对象 | `k` （键名）               |
| `clear`      | 删除此域的所有 Storage 对象 | -                          |

## storageLocal

<ClientOnly>
  <description :isShowIcon="false" description="localStorage相关函数" /> 
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

<ClientOnly>
  <description :isShowIcon="false" description="sessionStorage相关函数" /> 
</ClientOnly>

### 基础用法

<ClientOnly>
  <storageSession />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/storage/storageSession.vue

</details>
