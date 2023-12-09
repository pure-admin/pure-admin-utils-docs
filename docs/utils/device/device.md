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

::: warning 提示信息
上面两个函数均根据浏览器的 [navigator.userAgent](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent) 实现，它是可伪造的。在使用前请根据实际情况进行测试。当然你还可以找一些别的开源库来实现，比如 [current-device](https://github.com/matthewhudson/current-device)、[ua-parser-js](https://github.com/faisalman/ua-parser-js) 等，不过由于设备和浏览器的多样性、复杂性和可伪造性，目前来说没有绝对的方法进行精准判断
:::
