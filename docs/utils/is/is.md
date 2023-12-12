<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(40)

import hasCNChars from './hasCNChars.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
类型、正则判断
:::

## 类型判断

### is

判断某值的类型

<div class="pure-border">

接收两个参数，第一个 `val`，第二个 `type`，返回值 `true`（该值是该类型）、`false`（该值非该类型），返回值类型为 `boolean`

| **参数属性** | **说明**         | **类型**  |
| ------------ | ---------------- | --------- |
| `val`        | 需要判断的值     | `unknown` |
| `type`       | 需要判断值的类型 | `string`  |

</div>

### isDef

是否非 `undefined`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

</div>

### isUnDef

是否是 `undefined`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

</div>

### isObject

是否是对象 `object`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `val`        | 需要判断的值 | `any`    |

</div>

### isPlainObject

是否是普通对象，功能同 [lodash.isPlainObject](https://www.lodashjs.com/docs/lodash.isPlainObject)

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `val`        | 需要判断的值 | `any`    |

</div>

### isDate

是否是 `Date` 日期类型

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

</div>

### isNull

是否是 `null`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

</div>

### isNullAndUnDef

是否是 `null` 并且是 `undefined`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

</div>

### isNullOrUnDef

是否是 `null` 或者 `undefined`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

</div>

### isNumber

是否是 `number`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

</div>

### isPromise

是否是 `Promise`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

</div>

### isString

是否是 `string`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

</div>

### isFunction

是否是 `Function`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

</div>

### isBoolean

是否是 `Boolean`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

</div>

### isRegExp

是否是 `RegExp`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

</div>

### isArray

是否是 `Array`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

</div>

### isJSON

是否是标准的 `JSON` 格式

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

</div>

### isWindow

是否是 `Window`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `val`        | 需要判断的值 | `any`    |

</div>

### isElement

是否是 `Element`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

</div>

### isServer

是否处于服务端，非浏览器环境，无需参数（根据是否存在`window`来判断）

### isClient

是否处于浏览器环境，无需参数（根据是否存在`window`来判断）

### isBrowser

是否处于浏览器环境，无需参数（根据是否存在`document`来判断）

## 正则判断

### isUrl

`url` 链接正则

<div class="pure-border">

接收一个参数 `value`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `string` |

</div>

### isPhone

手机号码正则

<div class="pure-border">

接收一个参数 `value`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `any`    |

</div>

### isEmail

邮箱正则

<div class="pure-border">

接收一个参数 `value`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `string` |

</div>

### isQQ

`QQ` 正则

<div class="pure-border">

接收一个参数 `value`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `number` |

</div>

### isPostCode

是否是中国大陆邮政编码（共`6`位，且不能以`0`开头）

<div class="pure-border">

接收一个参数 `value`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `number` |

</div>

### isLowerCase

是否是小写字母

<div class="pure-border">

接收一个参数 `value`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `string` |

</div>

### isUpperCase

是否是大写字母

<div class="pure-border">

接收一个参数 `value`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `any`    |

</div>

### isAlphabets

是否是大小写字母

<div class="pure-border">

接收一个参数 `value`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `string` |

</div>

### isExistSpace

检测字符串是否有空格

<div class="pure-border">

接收一个参数 `value`，返回 `true`（有空格）、`false`（无空格），返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `string` |

</div>

### hasCNChars

校验是否包含中文或指定的 `unicode` 字符；校验是否全是中文或指定的 `unicode` 字符 （包括常用中文标点符号）

<div class="pure-border">

#### <divider-base /> {#base}

<hasCNChars />

<details>

<summary>查看代码</summary>

<<< @/utils/is/hasCNChars.vue

</details>

#### <divider-param /> {#param}

接收两个参数，第一个参数 `value`，第二个参数 `options`，返回值类型为 `boolean`

| **参数属性** | **说明**                                  | **类型**   |
| ------------ | ----------------------------------------- | ---------- |
| `value`      | 需要判断的值                              | `any`      |
| `options`    | 拥有四个属性，具体看下面的 `options` 详情 | `isParams` |

#### <divider-options /> {#options}

| **参数属性**     | **说明**                                   | **类型**  |
| ---------------- | ------------------------------------------ | --------- |
| `all`            | 是否全部是中文，默认 `false`               | `boolean` |
| `unicode`        | 自定义 `unicode`，不会覆盖默认的 `unicode` | `string`  |
| `replaceUnicode` | 自定义 `unicode`，会覆盖默认的 `unicode`   | `string`  |
| `pure`           | 是否删除全部空格，默认 `false`             | `boolean` |

#### <divider-type /> {#type}

<<< @/utils/is/types/hasCNChars.ts

::: info 提示信息

- [unicode 转换](https://unicode.yunser.com/coding)
- 将 `replaceUnicode` 值设置为非常用中文标点符号的 `unicode` 编码时，常用中文标点符号不会被识别为中文
- 常用中文标点符号 `。` `；` `，` `：` `“` `”` `（` `）` `、` `？` `《` `》` `！` `【` `】` `￥`
- 依次对应的 `unicode` 编码为 `\u3002` `\uff1b` `\uff0c` `\uff1a` `\u201c` `\u201d` `\uff08` `\uff09` `\u3001` `\uff1f` `\u300a` `\u300b` `\uff01` `\u3010` `\u3011` `\uffe5`

:::

</div>

## 其他判断

### isEmpty

是否为空，针对 `数组`、`对象`、`字符串`、`new Map()`、`new Set()` 进行判断

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

</div>

### isAllEmpty

是否为空，针对 `数组`、`对象`、`字符串`、`new Map()`、`new Set()`、`null`、`undefined` 进行判断，`null`、`undefined` 直接返回 `true`，也就是直接等于空

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

</div>

### isLeapYear

是否是闰年

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `val`        | 需要判断的值 | `unknown` |

</div>

### isBase64

是否是 `Base64`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `val`        | 需要判断的值 | `string` |

</div>

### isHex

是否是 `hex`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `color`      | 需要判断的值 | `string` |

</div>

### isRgb

是否是 `rgb`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `color`      | 需要判断的值 | `string` |

</div>

### isRgba

是否是 `rgba`

<div class="pure-border">

接收一个参数 `val`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `color`      | 需要判断的值 | `string` |

</div>

### isHtml

是否是 `HTML`，通过判断传入字符是否包含类似`HTML`标签的结构，适用于基本场景  
如需判断传入字符是否符合 `W3C HTML` 规范可以用 [html-validate](https://www.npmjs.com/package/html-validate)

<div class="pure-border">

接收一个参数 `value`，返回值类型为 `boolean`

| **参数属性** | **说明**     | **类型** |
| ------------ | ------------ | -------- |
| `value`      | 需要判断的值 | `string` |

</div>
