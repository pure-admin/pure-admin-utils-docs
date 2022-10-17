<script setup>
import removeLeftSpace from './removeLeftSpace.vue'
import removeRightSpace from './removeRightSpace.vue'
import removeBothSidesSpace from './removeBothSidesSpace.vue'
import removeAllSpace from './removeAllSpace.vue'
</script>

# 去掉字符串空格相关函数

<ClientOnly>
  <description-popover :num="4" :tagNameList="['浏览器','Node']" />
</ClientOnly>

## removeLeftSpace

<ClientOnly>
  <description :isShowIcon="false" description="去掉字符串左边空格" /> 
</ClientOnly>

### 参数

- 接收一个参数 `str` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `str`        | 字符串   | `string` |

### 基础用法

<ClientOnly>
  <removeLeftSpace />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/space/removeLeftSpace.vue

</details>

## removeRightSpace

<ClientOnly>
  <description :isShowIcon="false" description="去掉字符串右边空格" /> 
</ClientOnly>

### 参数

- 接收一个参数 `str` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `str`        | 字符串   | `string` |

### 基础用法

<ClientOnly>
  <removeRightSpace />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/space/removeRightSpace.vue

</details>

## removeBothSidesSpace

<ClientOnly>
  <description :isShowIcon="false" description="去掉字符串左右两边空格" /> 
</ClientOnly>

### 参数

- 接收一个参数 `str` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `str`        | 字符串   | `string` |

### 基础用法

<ClientOnly>
  <removeBothSidesSpace />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/space/removeBothSidesSpace.vue

</details>

## removeAllSpace

<ClientOnly>
  <description :isShowIcon="false" description="去掉字符串全部空格" /> 
</ClientOnly>

### 参数

- 接收一个参数 `str` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `str`        | 字符串   | `string` |

### 基础用法

<ClientOnly>
  <removeAllSpace />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/space/removeAllSpace.vue

</details>
