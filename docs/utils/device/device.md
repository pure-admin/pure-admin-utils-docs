<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(2)

import deviceDetection from './deviceDetection.vue'
import getBrowserInfo from './getBrowserInfo.vue'
</script>

::: tip 支持任意运行在浏览器的 `JavaScript` 语言
检测设备类型，获取浏览器型号以及版本
:::

## deviceDetection

检测设备类型（`mobile` 返回 `true`，反之）

<div class="pure-border">

<ClientOnly>
  <deviceDetection />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/device/deviceDetection.vue

</details>

</div>

## getBrowserInfo

获取浏览器型号以及版本

<div class="pure-border">

#### <divider-base /> {#base2}

<ClientOnly>
  <getBrowserInfo />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/device/getBrowserInfo.vue

</details>

#### <divider-type /> {#type2}

返回值类型 `BrowserType`

<<< @/utils/device/types/getBrowserInfo.ts

</div>
