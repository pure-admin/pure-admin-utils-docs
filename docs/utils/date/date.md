<script setup>
import getCurrentWeek from './getCurrentWeek.vue'
import monthDays from './monthDays.vue'
import createYear from './createYear.vue'
import getCurrentDate from './getCurrentDate.vue'
import dateFormat from './dateFormat.vue'
import getTime from './getTime.vue'
</script>

# 时间、日期相关函数

<ClientOnly>
  <description-popover :num="6" :tagNameList="['浏览器','Node']" />
</ClientOnly>

## getCurrentWeek

<ClientOnly>
  <description :isShowIcon="false" description="获取当前是星期几" /> 
</ClientOnly>

### 参数

- 接收一个参数 `prefix` ，返回值类型为 `string`

| **参数属性** | **说明**   | **类型** | **默认值** |
| ------------ | ---------- | -------- | ---------- |
| `prefix`     | 自定义前缀 | `string` | `星期`     |

### 基础用法

<ClientOnly>
  <getCurrentWeek />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/date/getCurrentWeek.vue

</details>

## monthDays

<ClientOnly>
  <description :isShowIcon="false" description="获取指定日期月份的总天数" /> 
</ClientOnly>

### 参数

- 接收一个参数 `time` ，返回值类型为 `number`

| **参数属性** | **说明**     | **类型**        |
| ------------ | ------------ | --------------- |
| `time`       | 指定日期月份 | `Date`/`string` |

### 基础用法

<ClientOnly>
  <monthDays />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/date/monthDays.vue

</details>

## createYear

<ClientOnly>
  <description :isShowIcon="false" description="获取从当前年份到开始年份的数组" /> 
</ClientOnly>

### 参数

- 接收一个参数 `start` ，返回值类型为 `Array<number>`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `start`      | 开始年份 | `number` |

### 基础用法

<ClientOnly>
  <createYear />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/date/createYear.vue

</details>

## getCurrentDate

<ClientOnly>
  <description :isShowIcon="false" description="获取当前的日期" /> 
</ClientOnly>

### 参数

- 接收一个参数 `options` ，返回值类型为 `currentDateType`

| **参数属性** | **说明**                                  | **类型**         |
| ------------ | ----------------------------------------- | ---------------- |
| `options`    | 拥有两个属性，具体看下面的 `options` 详情 | `currentDateOpt` |

#### `options` 详情

| **参数属性** | **说明**                                                                           | **类型** | **默认值** |
| ------------ | ---------------------------------------------------------------------------------- | -------- | ---------- |
| `type`       | 当前返回的年月日和时分秒的格式 `1`：`年月日`模式、`2`：`-` 连接符、`3`：`/` 连接符 | `number` | `1`        |
| `prefix`     | 自定义 `week` 返回格式前缀                                                         | `string` | `星期`     |

### 类型声明

<<< @/utils/date/types/getCurrentDate.ts

### 基础用法

<ClientOnly>
  <getCurrentDate />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/date/getCurrentDate.vue

</details>

## dateFormat

<ClientOnly>
  <description :isShowIcon="false" description="获取格式化后的当前日期" /> 
</ClientOnly>

### 参数

- 接收一个参数 `format`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `format`     | 日期格式化 | `string` |

### 基础用法

<ClientOnly>
  <dateFormat />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/date/dateFormat.vue

</details>

## getTime

<ClientOnly>
  <description :isShowIcon="false" description="将秒转换为时、分、秒" /> 
</ClientOnly>

### 参数

- 接收二个参数，第一个参数 `seconds`，第二个参数 `bool`，返回值类型为 `hmsType`

| **参数属性** | **说明**                                                                                                    | **类型**  |
| ------------ | ----------------------------------------------------------------------------------------------------------- | --------- |
| `seconds`    | 要转换的秒数（可以是小数，会向下取整）                                                                      | `number`  |
| `bool`       | 是否补`0`，`true` 为补`0`，`false` 为不补`0`，默认`true`。当时、分、秒小于`10`时，会向前补`0`，如`01:02:09` | `boolean` |

### 类型声明

<<< @/utils/date/types/getTime.ts

### 基础用法

<ClientOnly>
  <getTime />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/date/getTime.vue

</details>
