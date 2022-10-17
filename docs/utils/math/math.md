<script setup>
import max from './max.vue'
import min from './min.vue'
import sum from './sum.vue'
import average from './average.vue'
import numberToChinese from './numberToChinese.vue'
</script>

# 数值计算相关函数

<ClientOnly>
  <description-popover :num="5" :tagNameList="['浏览器','Node']" />
</ClientOnly>

## max

<ClientOnly>
  <description :isShowIcon="false" description="求数字类型组成数组中的最大值" /> 
</ClientOnly>

### 参数

- 接收一个参数 `list` ，返回值类型 `number`

| **参数属性** | **说明**           | **类型**        |
| ------------ | ------------------ | --------------- |
| `list`       | 数字类型组成的数组 | `Array<number>` |

### 基础用法

<ClientOnly>
  <max />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/math/max.vue

</details>

## min

<ClientOnly>
  <description :isShowIcon="false" description="求数字类型组成数组中的最小值" /> 
</ClientOnly>

### 参数

- 接收一个参数 `list` ，返回值类型 `number`

| **参数属性** | **说明**           | **类型**        |
| ------------ | ------------------ | --------------- |
| `list`       | 数字类型组成的数组 | `Array<number>` |

### 基础用法

<ClientOnly>
  <min />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/math/min.vue

</details>

## sum

<ClientOnly>
  <description :isShowIcon="false" description="求数字类型组成数组中的和" /> 
</ClientOnly>

### 参数

- 接收一个参数 `list` ，返回值类型 `number`

| **参数属性** | **说明**           | **类型**        |
| ------------ | ------------------ | --------------- |
| `list`       | 数字类型组成的数组 | `Array<number>` |

### 基础用法

<ClientOnly>
  <sum />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/math/sum.vue

</details>

## average

<ClientOnly>
  <description :isShowIcon="false" description="求数字类型组成数组中的平均值" /> 
</ClientOnly>

### 参数

- 接收一个参数 `list` ，返回值类型 `number`

| **参数属性** | **说明**           | **类型**        |
| ------------ | ------------------ | --------------- |
| `list`       | 数字类型组成的数组 | `Array<number>` |

### 基础用法

<ClientOnly>
  <average />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/math/average.vue

</details>

## numberToChinese

<ClientOnly>
  <description :isShowIcon="false" description="将阿拉伯数字翻译成中文数字" /> 
</ClientOnly>

### 参数

- 接收一个参数 `num` ，返回值类型 `string`

| **参数属性** | **说明**   | **类型**           |
| ------------ | ---------- | ------------------ |
| `num`        | 阿拉伯数字 | `number`、`string` |

### 基础用法

<ClientOnly>
  <numberToChinese />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/math/numberToChinese.vue

</details>
