<script setup>
import max from './max.vue'
import min from './min.vue'
import sum from './sum.vue'
import average from './average.vue'
import numberToChinese from './numberToChinese.vue'
import addition from './addition.vue'
import subtraction from './subtraction.vue'
import multiplication from './multiplication.vue'
import divisionOperation from './divisionOperation.vue'
</script>

# 数值计算相关函数

<ClientOnly>
  <description-popover :num="9" :tagNameList="['浏览器','Node']" />
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

## addition

<ClientOnly>
  <description :isShowIcon="false" description="两个数值的加法运算（防止精度丢失）" /> 
</ClientOnly>

### 参数

- 接收三个参数，第一个参数 `num1`，第二个参数 `num2`，第三个参数 `decimal`，返回值类型 `number`

| **参数属性** | **说明**                                        | **类型** |
| ------------ | ----------------------------------------------- | -------- |
| `num1`       | 第一个数值                                      | `number` |
| `num2`       | 第二个数值                                      | `number` |
| `decimal`    | 四舍五入保留的小数位数，为 `0` 时不进行任何处理 | `number` |

### 基础用法

<ClientOnly>
  <addition />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/math/addition.vue

</details>

## subtraction

<ClientOnly>
  <description :isShowIcon="false" description="两个数值的减法运算（防止精度丢失）" /> 
</ClientOnly>

### 参数

- 接收三个参数，第一个参数 `num1`，第二个参数 `num2`，第三个参数 `decimal`，返回值类型 `number`

| **参数属性** | **说明**                                        | **类型** |
| ------------ | ----------------------------------------------- | -------- |
| `num1`       | 第一个数值                                      | `number` |
| `num2`       | 第二个数值                                      | `number` |
| `decimal`    | 四舍五入保留的小数位数，为 `0` 时不进行任何处理 | `number` |

### 基础用法

<ClientOnly>
  <subtraction />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/math/subtraction.vue

</details>

## multiplication

<ClientOnly>
  <description :isShowIcon="false" description="两个数值的乘法运算（防止精度丢失）" /> 
</ClientOnly>

### 参数

- 接收三个参数，第一个参数 `num1`，第二个参数 `num2`，第三个参数 `decimal`，返回值类型 `number`

| **参数属性** | **说明**                                        | **类型** |
| ------------ | ----------------------------------------------- | -------- |
| `num1`       | 第一个数值                                      | `number` |
| `num2`       | 第二个数值                                      | `number` |
| `decimal`    | 四舍五入保留的小数位数，为 `0` 时不进行任何处理 | `number` |

### 基础用法

<ClientOnly>
  <multiplication />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/math/multiplication.vue

</details>

## divisionOperation

<ClientOnly>
  <description :isShowIcon="false" description="两个数值的除法运算（防止精度丢失）" /> 
</ClientOnly>

### 参数

- 接收三个参数，第一个参数 `num1`，第二个参数 `num2`，第三个参数 `decimal`，返回值类型 `number`

| **参数属性** | **说明**                                        | **类型** |
| ------------ | ----------------------------------------------- | -------- |
| `num1`       | 第一个数值                                      | `number` |
| `num2`       | 第二个数值                                      | `number` |
| `decimal`    | 四舍五入保留的小数位数，为 `0` 时不进行任何处理 | `number` |

### 基础用法

<ClientOnly>
  <divisionOperation />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/math/divisionOperation.vue

</details>
