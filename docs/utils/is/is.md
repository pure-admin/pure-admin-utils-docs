<script setup>
import hasCNChars from './hasCNChars.vue'
</script>

# 类型、正则判断相关函数

<ClientOnly>
  <description-popover :num="39" :tagNameList="['浏览器','Node']" />
</ClientOnly>

## 类型判断

### is

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否某值是某种类型" /> 
</ClientOnly>

#### 参数

- 接收两个参数，第一个 `val`，第二个 `type`，返回值 `true`（该值是该类型）、`false`（该值非该类型），返回值类型为 `boolean`

| **参数属性** | **说明**         | **类型**  |
| ------------ | ---------------- | --------- |
| `val`        | 需要判断的值     | `unknown` |
| `type`       | 需要判断值的类型 | `string`  |

### isDef

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否非 undefined" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

### isUnDef

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 undefined" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

### isObject

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是对象 object" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `val`        | 需要判断的值 | `any`    |

### isPlainObject

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是普通对象" /> 
</ClientOnly>

功能同 https://www.lodashjs.com/docs/lodash.isPlainObject

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `val`        | 需要判断的值 | `any`    |

### isDate

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 Date 日期类型" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

### isNull

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 null" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

### isNullAndUnDef

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 null 并且是 undefined" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

### isNullOrUnDef

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 null 或者 undefined" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

### isNumber

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 number" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

### isPromise

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 Promise" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

### isString

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 string" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

### isFunction

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 Function" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

### isBoolean

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 Boolean" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

### isRegExp

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 RegExp" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

### isArray

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 Array" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

### isJSON

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是标准的 JSON 格式" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

### isWindow

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 Window" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `val`        | 需要判断的值 | `any`    |

### isElement

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 Element" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

### isServer

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是服务端" /> 
</ClientOnly>

### isClient

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 window" /> 
</ClientOnly>

## 正则判断

### isUrl

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="url 链接正则" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `value`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `string` |

### isPhone

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="手机号码正则" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `value`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `any`    |

### isEmail

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="邮箱正则" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `value`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `string` |

### isQQ

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="QQ 正则" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `value`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `number` |

### isPostCode

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是中国大陆邮政编码（共6位，且不能以0开头）" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `value`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `number` |

### hasCNChars

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="1. 校验是否包含中文或指定的 `unicode` 字符；2. 校验是否全是中文或指定的 `unicode` 字符 （包括常用中文标点符号）" /> 
</ClientOnly>

#### 参数

- 接收两个参数，第一个参数 `value`，第二个参数 `options`，返回值类型为 `boolean`

| **参数属性** | **说明**                                  | **类型**   |
| ------------ | ----------------------------------------- | ---------- |
| `value`      | 需要判断的值                              | `any`      |
| `options`    | 拥有四个属性，具体看下面的 `options` 详情 | `isParams` |

#### `options` 详情

| **参数属性**     | **说明**                                   | **类型**  |
| ---------------- | ------------------------------------------ | --------- |
| `all`            | 是否全部是中文，默认 `false`               | `boolean` |
| `unicode`        | 自定义 `unicode`，不会覆盖默认的 `unicode` | `string`  |
| `replaceUnicode` | 自定义 `unicode`，会覆盖默认的 `unicode`   | `string`  |
| `pure`           | 是否删除全部空格，默认 `false`             | `boolean` |

### 类型声明

<<< @/utils/is/types/hasCNChars.ts

### 基础用法

<ClientOnly>
  <hasCNChars />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/is/hasCNChars.vue

</details>

:::tip

- [unicode 转换](https://unicode.yunser.com/coding)
- 将 `replaceUnicode` 值设置为非常用中文标点符号的 `unicode` 编码时，常用中文标点符号不会被识别为中文
- 常用中文标点符号 `。` `；` `，` `：` `“` `”` `（` `）` `、` `？` `《` `》` `！` `【` `】` `￥`
- 依次对应的 `unicode` 编码为 `\u3002` `\uff1b` `\uff0c` `\uff1a` `\u201c` `\u201d` `\uff08` `\uff09` `\u3001` `\uff1f` `\u300a` `\u300b` `\uff01` `\u3010` `\u3011` `\uffe5`

:::

### isLowerCase

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是小写字母" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `value`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `string` |

### isUpperCase

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是大写字母" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `value`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `any`    |

### isAlphabets

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是大小写字母" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `value`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `string` |

### isExistSpace

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="检测字符串是否有空格" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `value`，返回 `true`（有空格）、`false`（无空格），返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `string` |

## 其他判断

### isEmpty

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否为空，针对 `数组`、`对象`、`字符串`、`new Map()`、`new Set()` 进行判断" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

### isAllEmpty

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否为空，针对 `数组`、`对象`、`字符串`、`new Map()`、`new Set()`、`null`、`undefined` 进行判断，`null`、`undefined` 直接返回 `true`，也就是直接等于空" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

### isLeapYear

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是闰年" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

### isBase64

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 Base64" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `val`        | 需要判断的值 | `string` |

### isHex

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 hex" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `color`      | 需要判断的值 | `string` |

### isRgb

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 rgb" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `color`      | 需要判断的值 | `string` |

### isRgba

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 rgba" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `color`      | 需要判断的值 | `string` |

### isHtml

<ClientOnly>
  <description :isShowIcon="false" :gradientClass="'mb-2'" description="是否是 html" /> 
</ClientOnly>

#### 参数

- 接收一个参数 `value`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `string` |
