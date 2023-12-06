<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(4)

import downloadByOnlineUrl from './downloadByOnlineUrl.vue'
import downloadByBase64 from './downloadByBase64.vue'
import downloadByData from './downloadByData.vue'
import downloadByUrl from './downloadByUrl.vue'
</script>

<!-- # 下载 -->

::: tip 支持任意运行在浏览器的 `JavaScript` 语言
下载
:::

<!-- <description-popover :num="4" :tagNameList="['浏览器']" /> -->

## downloadByOnlineUrl

::: info 作用：下载在线图片
:::

<!-- <description :isShowIcon="false" description="下载在线图片" /> -->

### 参数

- 接收个四参数，第一个参数 `url` ，第二个参数 `filename` ，第三个参数 `mime` ，第四个参数 `bom`

| **参数属性** | **说明**               | **类型**   |
| ------------ | ---------------------- | ---------- |
| `url`        | 需要下载的 `url`       | `string`   |
| `filename`   | 文件名                 | `string`   |
| `mime`       | 类型（ `可选` ）       | `string`   |
| `bom`        | `BlobPart`（ `可选` ） | `BlobPart` |

### 基础用法

<downloadByOnlineUrl />

<details>

<summary>查看代码</summary>

<<< @/utils/download/downloadByOnlineUrl.vue

</details>

## downloadByBase64

::: info 作用：基于 `base64` 下载图片
:::

<!-- <description :isShowIcon="false" description="基于 `base64` 下载图片" /> -->

### 参数

- 接收个四参数，第一个参数 `buf` ，第二个参数 `filename` ，第三个参数 `mime` ，第四个参数 `bom`

| **参数属性** | **说明**               | **类型**   |
| ------------ | ---------------------- | ---------- |
| `buf`        | `base64`               | `string`   |
| `filename`   | 文件名                 | `string`   |
| `mime`       | 类型（ `可选` ）       | `string`   |
| `bom`        | `BlobPart`（ `可选` ） | `BlobPart` |

### 基础用法

<downloadByBase64 />

<details>

<summary>查看代码</summary>

<<< @/utils/download/downloadByBase64.vue

</details>

## downloadByData

::: info 作用：根据后台接口文件流下载
:::

<!-- <description :isShowIcon="false" description="根据后台接口文件流下载" /> -->

### 参数

- 接收个四参数，第一个参数 `data` ，第二个参数 `filename` ，第三个参数 `mime` ，第四个参数 `bom`

| **参数属性** | **说明**               | **类型**   |
| ------------ | ---------------------- | ---------- |
| `data`       | 文件流                 | `BlobPart` |
| `filename`   | 文件名                 | `string`   |
| `mime`       | 类型（ `可选` ）       | `string`   |
| `bom`        | `BlobPart`（ `可选` ） | `BlobPart` |

### 基础用法

<downloadByData />

<details>

<summary>查看代码</summary>

<<< @/utils/download/downloadByData.vue

</details>

## downloadByUrl

::: info 作用：根据文件地址下载文件
:::

<!-- <description :isShowIcon="false" description="根据文件地址下载文件" /> -->

### 参数

- 接收个四参数，第一个参数 `url` ，第二个参数 `fileName` ，第三个参数 `target`

| **参数属性** | **说明**                                 | **类型** | **默认值** |
| ------------ | ---------------------------------------- | -------- | ---------- |
| `url`        | 文件地址                                 | `string` |            |
| `fileName`   | 文件名                                   | `string` |            |
| `target`     | 拥有五个属性，具体看下面的 `target` 详情 | `Target` | `_self`    |

#### `target` 详情

| **参数属性** | **说明**                           |
| ------------ | ---------------------------------- |
| _\_blank_    | _在新窗口中打开被链接文档（默认）_ |
| _\_self_     | _在相同的框架中打开被链接文档_     |
| _\_parent_   | _在父框架集中打开被链接文档_       |
| _\_top_      | _在整个窗口中打开被链接文档_       |
| _framename_  | _在指定的框架中打开被链接文档_     |

### 类型声明

<<< @/utils/download/types/downloadByUrl.ts

### 基础用法

<downloadByUrl />

<details>

<summary>查看代码</summary>

<<< @/utils/download/downloadByUrl.vue

</details>
