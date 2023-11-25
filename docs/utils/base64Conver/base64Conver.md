<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(2)

import urlToBase64 from './urlToBase64.vue'
import dataURLtoBlob from './dataURLtoBlob.vue'
</script>

<!-- # 图片 url 转 base64、base64 转 blob -->

::: tip 支持任意运行在浏览器的 `JavaScript` 语言
图片 `url` 转 `base64`、`base64` 转 `blob`
:::

<!-- <ClientOnly>
  <description-popover :num="2" />
</ClientOnly> -->

## urlToBase64

::: info 作用：图片 `url` 转 `base64`
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="图片url转base64" />
</ClientOnly> -->

### 参数

- 接收三个参数，第一个参数 `url` ，第二个参数 `mineType` ，第三个参数 `encoderOptions` ，返回值类型 `Promise<string>`

| **参数属性**     | **说明**                                                                               | **类型** |
| ---------------- | -------------------------------------------------------------------------------------- | -------- |
| `url`            | 图片 `url`                                                                             | `string` |
| `mineType`       | 图片格式，默认为 `image/png`                                                           | `string` |
| `encoderOptions` | `0` 到 `1` 之间的取值，主要用来选定图片的质量，默认值是 `0.92`，超出范围也会选择默认值 | `number` |

### 基础用法

<ClientOnly>
  <urlToBase64 />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/base64Conver/urlToBase64.vue

</details>

## dataURLtoBlob

::: info 作用：`base64` 转 `blob`
:::

<!-- <ClientOnly>
  <description :isShowIcon="false" description="base64转blob" />
</ClientOnly> -->

### 参数

- 接收一个参数 `base64Buf` ，返回值类型 `Blob`

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `base64Buf`  | base64   | `string` |

### 基础用法

<ClientOnly>
  <dataURLtoBlob />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/base64Conver/dataURLtoBlob.vue

</details>

::: warning 提示信息
在线图片`url`转`base64`，要求图片请求支持跨域，服务器配置下允许跨域即可
:::
