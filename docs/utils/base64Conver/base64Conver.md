<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(3)

import urlToBase64 from './urlToBase64.vue'
import dataURLtoBlob from './dataURLtoBlob.vue'
import convertImageToGray from './convertImageToGray.vue'
</script>

::: tip 支持任意运行在浏览器的 `JavaScript` 语言
图片 `url` 转 `base64`、`base64` 转 `blob`、彩色图片转灰色图片
:::

## urlToBase64

图片 `url` 转 `base64`

<div class="pure-border">

#### <divider-base /> {#base1}

<urlToBase64 />

<details>

<summary>查看代码</summary>

<<< @/utils/base64Conver/urlToBase64.vue

</details>

#### <divider-param /> {#param1}

接收三个参数，第一个参数 `url` ，第二个参数 `mineType` ，第三个参数 `encoderOptions` ，返回值类型 `Promise<string>`

| **参数属性**     | **说明**                                                                               | **类型** |
| ---------------- | -------------------------------------------------------------------------------------- | -------- |
| `url`            | 图片 `url`                                                                             | `string` |
| `mineType`       | 图片格式，默认为 `image/png`                                                           | `string` |
| `encoderOptions` | `0` 到 `1` 之间的取值，主要用来选定图片的质量，默认值是 `0.92`，超出范围也会选择默认值 | `number` |

</div>

## dataURLtoBlob

`base64` 转 `blob`

<div class="pure-border">

#### <divider-base /> {#base2}

<ClientOnly>
  <dataURLtoBlob />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/base64Conver/dataURLtoBlob.vue

</details>

#### <divider-param /> {#param2}

接收一个参数 `base64Buf` ，返回值类型 `Blob`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `base64Buf`  | base64   | `string` |

</div>

## convertImageToGray

彩色图片转灰色图片

<div class="pure-border">

#### <divider-base /> {#base3}

<ClientOnly>
  <convertImageToGray />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/utils/base64Conver/convertImageToGray.vue

</details>

#### <divider-param /> {#param3}

接收两个参数，第一个参数 `url`，第二个参数 `options`，返回值类型 `Promise<string>`

| **参数属性** | **说明**                                                      | **类型**  |
| ------------ | ------------------------------------------------------------- | --------- |
| `url`        | 彩色图片 `url`                                                | `string`  |
| `options`    | 转灰色图片相关配置，拥有四个属性，具体看下面的 `options` 详情 | `grayOpt` |

#### <divider-options /> {#options3}

在`RGB`颜色模型中，灰色由红、绿、蓝三种颜色通道混合而成。值越小，灰色越深；值越大，灰色越浅，这里的值就是指下面的`red`、`green`、`blue`

| **属性** | **说明**                                                                       | **类型** | **默认值** |
| -------- | ------------------------------------------------------------------------------ | -------- | ---------- |
| `red`    | `RGB`颜色模型中的红色                                                          | `number` | `0.3`      |
| `green`  | `RGB`颜色模型中的绿色                                                          | `number` | `0.59`     |
| `blue`   | `RGB`颜色模型中的蓝色                                                          | `number` | `0.11`     |
| `scale`  | 使用`canvas`缩放图像比例，默认`1`不缩放保持原始比例，建议范围`0.2 < scale < 2` | `number` | `1`        |

#### <divider-type /> {#type3}

<<< @/utils/base64Conver/types/convertImageToGray.ts

</div>

::: info 提示信息
在线图片地址需要支持跨域，服务器配置下允许跨域即可
:::
