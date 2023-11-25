<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(6)

import centsToDollars from './centsToDollars.vue'
import dollarsToCents from './dollarsToCents.vue'
import priceUppercase from './priceUppercase.vue'
import priceToThousands from './priceToThousands.vue'
import getDecimalPlaces from './getDecimalPlaces.vue'
import addZero from './addZero.vue'
</script>

<!-- # 金额转换相关方法 -->

::: tip 支持任意 `JavaScript` 环境或框架
转换金额
:::

<!-- <ClientOnly>
  <description-popover :num="6" :tagNameList="['浏览器','Node']" />
</ClientOnly> -->

## centsToDollars

::: info 作用：分转元
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="分转元" />
</ClientOnly> -->

### 参数

- 接收两个参数，第一个参数 `val`，第二个参数 `format`，返回值类型 `number`

| **参数属性** | **说明**                                                                                             | **类型** |
| ------------ | ---------------------------------------------------------------------------------------------------- | -------- |
| `val`        | 分                                                                                                   | `number` |
| `format`     | 转元后像 `10` 、`20`、 `100` 、`1000` 这种整金额默认会在末尾加 `.00` ，如果不想要设置成 `fasle` 即可 | `number` |

### 基础用法

<ClientOnly>
  <centsToDollars />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/amount/centsToDollars.vue

</details>

## dollarsToCents

::: info 作用：元转分
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="元转分" />
</ClientOnly> -->

### 参数

- 接收两个参数，第一个参数 `val`，第二个参数 `digit`，返回值类型 `number`

| **参数属性** | **说明**             | **类型** |
| ------------ | -------------------- | -------- |
| `val`        | 元                   | `number` |
| `digit`      | 转换倍数，默认 `100` | `number` |

### 基础用法

<ClientOnly>
  <dollarsToCents />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/amount/dollarsToCents.vue

</details>

## priceUppercase

::: info 作用：金额转大写汉字（支持小数位）
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="金额转大写汉字（支持小数位）" />
</ClientOnly> -->

### 参数

- 接收两个参数，第一个参数 `val`，第二个参数 `format`，返回值类型 `string`

| **参数属性** | **说明**                                                                | **类型** |
| ------------ | ----------------------------------------------------------------------- | -------- |
| `val`        | 金额                                                                    | `number` |
| `format`     | `整` （如果是整数金额最后面会默认加个 `整`，不想要的话给空字符串 `""`） | `string` |

### 基础用法

<ClientOnly>
  <priceUppercase />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/amount/priceUppercase.vue

</details>

## priceToThousands

::: info 作用：格式化金额，三位加一个逗号
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="格式化金额，三位加一个逗号" />
</ClientOnly> -->

### 参数

- 接收两个参数，第一个参数 `amount` ，第二个参数 `options` ，返回格式化后的金额

| **参数属性** | **说明**                                  | **类型**    |
| ------------ | ----------------------------------------- | ----------- |
| `amount`     | 金额                                      | `number`    |
| `options`    | 拥有两个属性，具体看下面的 `options` 详情 | `AmountOpt` |

#### `options` 详情

| **参数属性** | **说明**           | **类型**  | **默认值** |
| ------------ | ------------------ | --------- | ---------- |
| `digit`      | 保留几位小数       | `number`  | `0`        |
| `round`      | 小数位是否四舍五入 | `boolean` | `false`    |

### 类型声明

<<< @/utils/amount/types/priceToThousands.ts

### 基础用法

<ClientOnly>
  <priceToThousands />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/amount/priceToThousands.vue

</details>

## getDecimalPlaces

::: info 作用：获取数值的小数位数
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="获取数值的小数位数" />
</ClientOnly> -->

### 参数

- 接收一个参数 `val`，返回小数位数

| **参数属性** | **说明** | **类型**          |
| ------------ | -------- | ----------------- |
| `val`        | 金额     | `number`/`string` |

### 基础用法

<ClientOnly>
  <getDecimalPlaces />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/amount/getDecimalPlaces.vue

</details>

## addZero

::: info 作用：在数值后加 `.00`
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="在数值后加 `.00`" />
</ClientOnly> -->

### 参数

- 接收一个参数 `val`，返回加完 `.00` 后的值

| **参数属性** | **说明** | **类型**          |
| ------------ | -------- | ----------------- |
| `val`        | 数值     | `number`/`string` |

### 基础用法

<ClientOnly>
  <addZero />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/amount/addZero.vue

</details>
