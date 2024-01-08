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

::: tip 支持任意 `JavaScript` 环境或框架
转换金额
:::

### centsToDollars {#centstodollars}

分转元

<div class="pure-border">

#### <divider-base /> {#base1}

<centsToDollars />

<details>

<summary>查看代码</summary>

<<< @/utils/amount/centsToDollars.vue

</details>

#### <divider-param /> {#param1}

接收两个参数，第一个参数 `val`，第二个参数 `format`，返回值类型 `number`

| **参数属性** | **说明**                                                                                             | **类型** |
| ------------ | ---------------------------------------------------------------------------------------------------- | -------- |
| `val`        | 分                                                                                                   | `number` |
| `format`     | 转元后像 `10` 、`20`、 `100` 、`1000` 这种整金额默认会在末尾加 `.00` ，如果不想要设置成 `fasle` 即可 | `number` |

</div>

### dollarsToCents {#dollarstocents}

元转分

<div class="pure-border">

#### <divider-base /> {#base2}

<dollarsToCents />

<details>

<summary>查看代码</summary>

<<< @/utils/amount/dollarsToCents.vue

</details>

#### <divider-param /> {#param2}

接收两个参数，第一个参数 `val`，第二个参数 `digit`，返回值类型 `number`

| **参数属性** | **说明**             | **类型** |
| ------------ | -------------------- | -------- |
| `val`        | 元                   | `number` |
| `digit`      | 转换倍数，默认 `100` | `number` |

</div>

### priceUppercase {#priceuppercase}

金额转大写汉字（支持小数位）

<div class="pure-border">

#### <divider-base /> {#base3}

<priceUppercase />

<details>

<summary>查看代码</summary>

<<< @/utils/amount/priceUppercase.vue

</details>

#### <divider-param /> {#param3}

接收两个参数，第一个参数 `val`，第二个参数 `format`，返回值类型 `string`

| **参数属性** | **说明**                                                                | **类型** |
| ------------ | ----------------------------------------------------------------------- | -------- |
| `val`        | 金额                                                                    | `number` |
| `format`     | `整` （如果是整数金额最后面会默认加个 `整`，不想要的话给空字符串 `""`） | `string` |

</div>

### priceToThousands {#pricetothousands}

格式化金额，三位加一个逗号

<div class="pure-border">

#### <divider-base /> {#base4}

<priceToThousands />

<details>

<summary>查看代码</summary>

<<< @/utils/amount/priceToThousands.vue

</details>

#### <divider-param /> {#param4}

接收两个参数，第一个参数 `amount` ，第二个参数 `options` ，返回格式化后的金额

| **参数属性** | **说明**                                  | **类型**    |
| ------------ | ----------------------------------------- | ----------- |
| `amount`     | 金额                                      | `number`    |
| `options`    | 拥有两个属性，具体看下面的 `options` 详情 | `AmountOpt` |

#### <divider-options /> {#options4}

| **参数属性** | **说明**           | **类型**  | **默认值** |
| ------------ | ------------------ | --------- | ---------- |
| `digit`      | 保留几位小数       | `number`  | `0`        |
| `round`      | 小数位是否四舍五入 | `boolean` | `false`    |

#### <divider-type /> {#type4}

<<< @/utils/amount/types/priceToThousands.ts

</div>

### getDecimalPlaces {#getdecimalplaces}

获取数值的小数位数

<div class="pure-border">

#### <divider-base /> {#base5}

<getDecimalPlaces />

<details>

<summary>查看代码</summary>

<<< @/utils/amount/getDecimalPlaces.vue

</details>

#### <divider-param /> {#param5}

接收一个参数 `val`，返回小数位数

| **参数属性** | **说明** | **类型**          |
| ------------ | -------- | ----------------- |
| `val`        | 金额     | `number`/`string` |

</div>

### addZero {#addzero}

在数值后加 `.00`

<div class="pure-border">

#### <divider-base /> {#base6}

<addZero />

<details>

<summary>查看代码</summary>

<<< @/utils/amount/addZero.vue

</details>

#### <divider-param /> {#param6}

接收一个参数 `val`，返回加完 `.00` 后的值

| **参数属性** | **说明** | **类型**          |
| ------------ | -------- | ----------------- |
| `val`        | 数值     | `number`/`string` |

</div>
