<script setup>
import subBefore from './subBefore.vue'
import subAfter from './subAfter.vue'
import subBothSides from './subBothSides.vue'
import subBetween from './subBetween.vue'
import subTextAddEllipsis from './subTextAddEllipsis.vue'
import splitNum from './splitNum.vue'
</script>

# 截取字符相关函数

<ClientOnly>
  <description-popover :num="6" :tagNameList="['浏览器','Node']" />
</ClientOnly>

## subBefore

<ClientOnly>
  <description :isShowIcon="false" description="截取指定字符前面的值" /> 
</ClientOnly>

### 参数

- 接收两个参数，第一个参数 `val` ，第二个参数 `character` ，返回值类型 `string`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `val`        | 要截取的值 | `string` |
| `character`  | 指定字符   | `string` |

### 基础用法

<ClientOnly>
  <subBefore />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/substring/subBefore.vue

</details>

## subAfter

<ClientOnly>
  <description :isShowIcon="false" description="截取指定字符后面的值" /> 
</ClientOnly>

### 参数

- 接收两个参数，第一个参数 `val` ，第二个参数 `character` ，返回值类型 `string`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `val`        | 要截取的值 | `string` |
| `character`  | 指定字符   | `string` |

### 基础用法

<ClientOnly>
  <subAfter />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/substring/subAfter.vue

</details>

## subBothSides

<ClientOnly>
  <description :isShowIcon="false" description="截取指定字符两边的值" /> 
</ClientOnly>

### 参数

- 接收两个参数，第一个参数 `val` ，第二个参数 `character` ，返回截取后的值，数组格式，左边返回指定字符前面的值，后边返回指定字符后面的值，返回值类型 `Array<string>`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `val`        | 要截取的值 | `string` |
| `character`  | 指定字符   | `string` |

### 基础用法

<ClientOnly>
  <subBothSides />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/substring/subBothSides.vue

</details>

## subBetween

<ClientOnly>
  <description :isShowIcon="false" description="截取指定两个字符之间的值" /> 
</ClientOnly>

### 参数

- 接收两个参数，第一个参数 `val` ，第二个参数 `before` ，第三个参数 `after`，返回值类型 `string`

| **参数属性** | **说明**       | **类型** |
| ------------ | -------------- | -------- |
| `val`        | 要截取的值     | `string` |
| `before`     | 前一个指定字符 | `string` |
| `after`      | 后一个指定字符 | `string` |

### 基础用法

<ClientOnly>
  <subBetween />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/substring/subBetween.vue

</details>

## subTextAddEllipsis

<ClientOnly>
  <description :isShowIcon="false" description="截取字符并追加省略号（常用场景：echarts）" /> 
</ClientOnly>

### 参数

- 接收两个参数，第一个参数 `val` ，第二个参数 `len` ，返回值类型 `string`

| **参数属性** | **说明**     | **类型**           | **默认值** |
| ------------ | ------------ | ------------------ | ---------- |
| `val`        | 要截取的值   | `string`           | -          |
| `len`        | 要保留的位数 | `string`、`number` | `3`        |

### 基础用法

<ClientOnly>
  <subTextAddEllipsis />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/substring/subTextAddEllipsis.vue

</details>

## splitNum

<ClientOnly>
  <description :isShowIcon="false" description="将数字拆分为单个数字组成的数组" /> 
</ClientOnly>

### 参数

- 接收一个参数 `number` ，返回拆分的单个数字集合，返回值类型 `Array<number> | string`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `number`     | 要拆分的数字 | `number` |

### 基础用法

<ClientOnly>
  <splitNum />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/substring/splitNum.vue

</details>
