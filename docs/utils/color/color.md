<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(6)

import randomColor from './randomColor.vue'
import randomGradient from './randomGradient.vue'
import hexToRgb from './hexToRgb.vue'
import rgbToHex from './rgbToHex.vue'
import darken from './darken.vue'
import lighten from './lighten.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
颜色
:::

## randomColor

随机生成颜色

<div class="pure-border">

#### <divider-base /> {#base1}

<randomColor />

<details>

<summary>查看代码</summary>

<<< @/utils/color/randomColor.vue

</details>

#### <divider-param /> {#param1}

接收一个参数 `options` ，返回值类型为 `string | Array<string>`

| **参数属性** | **说明**                                  | **类型**       |
| ------------ | ----------------------------------------- | -------------- |
| `options`    | 拥有两个属性，具体看下面的 `options` 详情 | `ColorOptions` |

#### <divider-options /> {#options1}

| **参数属性** | **说明**                                                                              | **类型**    | **默认值** |
| ------------ | ------------------------------------------------------------------------------------- | ----------- | ---------- |
| `type`       | 颜色格式 `rgb` 、 `hex` 、 `hsl`                                                      | `ColorType` | `rgb`      |
| `num`        | 生成颜色的数量。指定数量，则返回生成颜色数组，数量为 `0` 或不指定，返回生成颜色字符串 | `number`    | `0`        |

#### <divider-type /> {#type1}

<<< @/utils/color/types/randomColor.ts

</div>

## randomGradient

随机生成渐变色

<div class="pure-border">

#### <divider-base /> {#base2}

<randomGradient />

<details>

<summary>查看代码</summary>

<<< @/utils/color/randomGradient.vue

</details>

#### <divider-param /> {#param2}

接收一个参数 `options` ，返回值类型为 `string`

| **参数属性** | **说明**                                  | **类型**          |
| ------------ | ----------------------------------------- | ----------------- |
| `options`    | 拥有九个属性，具体看下面的 `options` 详情 | `GradientOptions` |

#### <divider-options /> {#options2}

| **参数属性**          | **说明**                                     | **类型** | **默认值** |
| --------------------- | -------------------------------------------- | -------- | ---------- |
| `baseHue`             | 基础色相（`0`-`360`度）                      | `number` | `随机色相` |
| `hueOffset`           | 从基础色相偏移的度数，用于创建第二种和谐色相 | `number` | `30`度     |
| `saturation`          | 饱和度百分比（`50`-`100%`），颜色的鲜艳程度  | `number` | `70%`      |
| `lightness`           | 亮度百分比（`40`-`70%`），颜色的明亮程度     | `number` | `60%`      |
| `angle`               | 渐变角度（`0`-`360`度），决定渐变的方向      | `number` | `135`度    |
| `randomizeHue`        | 是否随机生成色相                             | `number` | `false`    |
| `randomizeSaturation` | 是否随机生成饱和度                           | `number` | `false`    |
| `randomizeLightness`  | 是否随机生成亮度                             | `number` | `false`    |
| `randomizeAngle`      | 是否随机生成渐变角度                         | `number` | `false`    |

#### <divider-type /> {#type2}

<<< @/utils/color/types/randomGradient.ts

</div>

## hexToRgb

`hex` 转 `rgb`

<div class="pure-border">

#### <divider-base /> {#base3}

<hexToRgb />

<details>

<summary>查看代码</summary>

<<< @/utils/color/hexToRgb.vue

</details>

#### <divider-param /> {#param3}

接收一个参数 `str` ，返回值类型 `Array<number>`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `str`        | `hex` 格式 | `string` |

</div>

## rgbToHex

`rgb` 转 `hex`

<div class="pure-border">

#### <divider-base /> {#base4}

<rgbToHex />

<details>

<summary>查看代码</summary>

<<< @/utils/color/rgbToHex.vue

</details>

#### <divider-param /> {#param4}

接收三个参数，第一个参数 `r` ，第二个参数 `g` ，第三个参数 `b` ，返回值类型 `string`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `r`          | 红(R)    | `number` |
| `g`          | 绿(G)    | `number` |
| `b`          | 蓝(B)    | `number` |

</div>

## darken

颜色值加深

<div class="pure-border">

#### <divider-base /> {#base5}

<darken />

<details>

<summary>查看代码</summary>

<<< @/utils/color/darken.vue

</details>

#### <divider-param /> {#param5}

接收两个参数，第一个 `color`，第二个 `level`，返回加深后的颜色值，`hex` 格式，返回值类型为 `string`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `color`      | `hex` 格式 | `string` |
| `level`      | 色值度     | `number` |

</div>

## lighten

颜色值变浅

<div class="pure-border">

#### <divider-base /> {#base6}

<lighten />

<details>

<summary>查看代码</summary>

<<< @/utils/color/lighten.vue

</details>

#### <divider-param /> {#param6}

接收两个参数，第一个 `color`，第二个 `level`，返回变浅后的颜色值，`hex` 格式，返回值类型为 `string`

| **参数属性** | **说明**   | **类型** |
| ------------ | ---------- | -------- |
| `color`      | `hex` 格式 | `string` |
| `level`      | 色值度     | `number` |

</div>

::: info 推荐文章
[CSS HSL 颜色](https://www.w3school.com.cn/css/css_colors_hsl.asp)
:::

<style scoped>
#VPContent > div > div > div.content > div > main > div > div > div:nth-child(7) > table:nth-child(8) > tbody > tr:nth-child(1) > td:nth-child(4) {
  min-width: 100px;
}
</style>
