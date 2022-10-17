<script setup>
import isEqual from './isEqual.vue'
import isEqualArray from './isEqualArray.vue'
import isEqualObject from './isEqualObject.vue'
</script>

# 判断两者是否相等相关函数

<ClientOnly>
  <description-popover :num="3" :tagNameList="['浏览器','Node']" />
</ClientOnly>

## isEqual

<ClientOnly>
  <description :isShowIcon="false" description="判断两者是否相等" /> 
</ClientOnly>

### 参数

- 接收两个参数，第一个参数 `a` ，第二个参数 `b` ，返回值类型 `boolean`

| **参数属性** | **说明** | **类型**  |
| ------------ | -------- | --------- |
| `a`          | 前者     | `unknown` |
| `b`          | 后者     | `unknown` |

### 基础用法

<ClientOnly>
  <isEqual />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/equal/isEqual.vue

</details>

## isEqualObject

<ClientOnly>
  <description :isShowIcon="false" description="判断两个对象是否相等" /> 
</ClientOnly>

### 参数

- 接收两个参数，第一个参数 `obj` ，第二个参数 `other` ，返回值类型 `boolean`

| **参数属性** | **说明**   | **类型**                               |
| ------------ | ---------- | -------------------------------------- |
| `obj`        | 前一个对象 | `Record<string, unknown>`、`undefined` |
| `other`      | 后一个对象 | `Record<string, unknown>`、`undefined` |

### 基础用法

<ClientOnly>
  <isEqualObject />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/equal/isEqualObject.vue

</details>

## isEqualArray

<ClientOnly>
  <description :isShowIcon="false" description="判断两个数组是否相等" /> 
</ClientOnly>

### 参数

- 接收两个参数，第一个参数 `obj` ，第二个参数 `other` ，返回值类型 `boolean`

| **参数属性** | **说明**   | **类型**                 |
| ------------ | ---------- | ------------------------ |
| `obj`        | 前一个数组 | `unknown[]`、`undefined` |
| `other`      | 后一个数组 | `unknown[]`、`undefined` |

### 基础用法

<ClientOnly>
  <isEqualArray />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/equal/isEqualArray.vue

</details>
