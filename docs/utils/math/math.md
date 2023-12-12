<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(10)

import max from './max.vue'
import min from './min.vue'
import sum from './sum.vue'
import average from './average.vue'
import numberToChinese from './numberToChinese.vue'
import addition from './addition.vue'
import subtraction from './subtraction.vue'
import multiplication from './multiplication.vue'
import divisionOperation from './divisionOperation.vue'
import formatBytes from './formatBytes.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
数值计算
:::

## max

求数字类型组成数组中的最大值

<div class="pure-border">

#### <divider-base /> {#base1}

<max />

<details>

<summary>查看代码</summary>

<<< @/utils/math/max.vue

</details>

#### <divider-param /> {#param1}

接收一个参数 `list` ，返回值类型 `number`

| **参数属性** | **说明**           | **类型**        |
| ------------ | ------------------ | --------------- |
| `list`       | 数字类型组成的数组 | `Array<number>` |

</div>

## min

求数字类型组成数组中的最小值

<div class="pure-border">

#### <divider-base /> {#base2}

<min />

<details>

<summary>查看代码</summary>

<<< @/utils/math/min.vue

</details>

#### <divider-param /> {#param2}

接收一个参数 `list` ，返回值类型 `number`

| **参数属性** | **说明**           | **类型**        |
| ------------ | ------------------ | --------------- |
| `list`       | 数字类型组成的数组 | `Array<number>` |

</div>

## sum

求数字类型组成数组中的和

<div class="pure-border">

#### <divider-base /> {#base3}

<sum />

<details>

<summary>查看代码</summary>

<<< @/utils/math/sum.vue

</details>

#### <divider-param /> {#param3}

接收一个参数 `list` ，返回值类型 `number`

| **参数属性** | **说明**           | **类型**        |
| ------------ | ------------------ | --------------- |
| `list`       | 数字类型组成的数组 | `Array<number>` |

</div>

## average

求数字类型组成数组中的平均值

<div class="pure-border">

#### <divider-base /> {#base4}

<average />

<details>

<summary>查看代码</summary>

<<< @/utils/math/average.vue

</details>

#### <divider-param /> {#param4}

接收一个参数 `list` ，返回值类型 `number`

| **参数属性** | **说明**           | **类型**        |
| ------------ | ------------------ | --------------- |
| `list`       | 数字类型组成的数组 | `Array<number>` |

</div>

## numberToChinese

将阿拉伯数字翻译成中文数字

<div class="pure-border">

#### <divider-base /> {#base5}

<numberToChinese />

<details>

<summary>查看代码</summary>

<<< @/utils/math/numberToChinese.vue

</details>

#### <divider-param /> {#param5}

接收一个参数 `num` ，返回值类型 `string`

| **参数属性** | **说明**   | **类型**          |
| ------------ | ---------- | ----------------- |
| `num`        | 阿拉伯数字 | `number`/`string` |

</div>

## addition

两个数值的加法运算（防止精度丢失）

<div class="pure-border">

#### <divider-base /> {#base6}

<addition />

<details>

<summary>查看代码</summary>

<<< @/utils/math/addition.vue

</details>

#### <divider-param /> {#param6}

接收三个参数，第一个参数 `num1`，第二个参数 `num2`，第三个参数 `decimal`，返回值类型 `number`

| **参数属性** | **说明**                                        | **类型** |
| ------------ | ----------------------------------------------- | -------- |
| `num1`       | 第一个数值                                      | `number` |
| `num2`       | 第二个数值                                      | `number` |
| `decimal`    | 四舍五入保留的小数位数，为 `0` 时不进行任何处理 | `number` |

</div>

## subtraction

两个数值的减法运算（防止精度丢失）

<div class="pure-border">

#### <divider-base /> {#base7}

<subtraction />

<details>

<summary>查看代码</summary>

<<< @/utils/math/subtraction.vue

</details>

#### <divider-param /> {#param7}

接收三个参数，第一个参数 `num1`，第二个参数 `num2`，第三个参数 `decimal`，返回值类型 `number`

| **参数属性** | **说明**                                        | **类型** |
| ------------ | ----------------------------------------------- | -------- |
| `num1`       | 第一个数值                                      | `number` |
| `num2`       | 第二个数值                                      | `number` |
| `decimal`    | 四舍五入保留的小数位数，为 `0` 时不进行任何处理 | `number` |

</div>

## multiplication

两个数值的乘法运算（防止精度丢失）

<div class="pure-border">

#### <divider-base /> {#base8}

<multiplication />

<details>

<summary>查看代码</summary>

<<< @/utils/math/multiplication.vue

</details>

#### <divider-param /> {#param8}

接收三个参数，第一个参数 `num1`，第二个参数 `num2`，第三个参数 `decimal`，返回值类型 `number`

| **参数属性** | **说明**                                        | **类型** |
| ------------ | ----------------------------------------------- | -------- |
| `num1`       | 第一个数值                                      | `number` |
| `num2`       | 第二个数值                                      | `number` |
| `decimal`    | 四舍五入保留的小数位数，为 `0` 时不进行任何处理 | `number` |

</div>

## divisionOperation

两个数值的除法运算（防止精度丢失）

<div class="pure-border">

#### <divider-base /> {#base9}

<divisionOperation />

<details>

<summary>查看代码</summary>

<<< @/utils/math/divisionOperation.vue

</details>

#### <divider-param /> {#param9}

接收三个参数，第一个参数 `num1`，第二个参数 `num2`，第三个参数 `decimal`，返回值类型 `number`

| **参数属性** | **说明**                                        | **类型** |
| ------------ | ----------------------------------------------- | -------- |
| `num1`       | 第一个数值                                      | `number` |
| `num2`       | 第二个数值                                      | `number` |
| `decimal`    | 四舍五入保留的小数位数，为 `0` 时不进行任何处理 | `number` |

</div>

## formatBytes

将字节单位智能转化成 `Bytes`、`KB`、`MB`、`GB`、`TB`、`PB`、`EB`、`ZB`、`YB` 其中的一种

<div class="pure-border">

#### <divider-base /> {#base10}

<formatBytes />

<details>

<summary>查看代码</summary>

<<< @/utils/math/formatBytes.vue

</details>

#### <divider-param /> {#param10}

接收两个参数，第一个 `byte`，第二个 `digits`，返回智能转化字节单位后的值，返回值类型为 `string`

| **参数属性** | **说明**             | **类型** | **默认值** |
| ------------ | -------------------- | -------- | ---------- |
| `byte`       | 字节                 | `number` |            |
| `digits`     | 四舍五入保留几位小数 | `number` | `2`        |

</div>
