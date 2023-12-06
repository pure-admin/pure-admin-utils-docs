<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(2)

import deviceDetection from './deviceDetection.vue'
import getBrowserInfo from './getBrowserInfo.vue'
</script>

<!-- # 检测设备类型，获取浏览器型号以及版本 -->

::: tip 支持任意运行在浏览器的 `JavaScript` 语言
检测设备类型，获取浏览器型号以及版本
:::

<!-- <description-popover :num="2" :tagNameList="['浏览器']" /> -->

## deviceDetection

::: info 作用：检测设备类型（`mobile` 返回 `true`，反之）
:::

<!-- <description :isShowIcon="false" description="检测设备类型（`mobile` 返回 `true`，反之）" /> -->

### 基础用法

<ClientOnly>
  <deviceDetection />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/device/deviceDetection.vue

</details>

## getBrowserInfo

::: info 作用：获取浏览器型号以及版本
:::

<!-- <description :isShowIcon="false" description="获取浏览器型号以及版本" /> -->

### 类型声明

- 返回值类型 `BrowserType`

<<< @/utils/device/types/getBrowserInfo.ts

### 基础用法

<ClientOnly>
  <getBrowserInfo />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/device/getBrowserInfo.vue

</details>
