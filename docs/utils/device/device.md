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

获取浏览器型号（均小写）以及版本

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

::: info 提示信息
上面两个函数均根据浏览器的 [navigator.userAgent](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent) 实现，它是可伪造的。在使用前请根据实际情况进行测试。当然你还可以找一些类似 [current-device](https://github.com/matthewhudson/current-device)、[ua-parser-js](https://github.com/faisalman/ua-parser-js) 等开源库来实现，或者自行根据设备或浏览器的相关特征来进行检测，不过由于设备和浏览器的`多样性`、`复杂性`和`可伪造性`，目前来说没有绝对的方法进行精准判断

---

`多样性`:
市场上存在着多种多样的设备和浏览器。设备包括不同尺寸的手机、平板、笔记本电脑、台式机，以及更多特殊设备，如智能手表、电视、游戏机等。浏览器也多种多样，包括Chrome、Firefox、Safari、Edge、Opera等，以及它们的移动版本和各种基于这些浏览器引擎的衍生浏览器。

---

`复杂性`:
设备和浏览器的复杂性不仅体现在种类繁多，还体现在它们的行为上。例如，不同设备的屏幕尺寸和分辨率差别很大，而浏览器之间的支持标准和实现细节也存在差异。一些设备可能有特殊的功能，如触摸屏、物理键盘、旋转屏幕等，这些特性都增加了检测设备类型的复杂性。

---

`可伪造性`:
浏览器的用户代理字符串是最常用来判断浏览器类型和版本的信息源，但它们很容易被伪造。开发者可以使用浏览器的开发者工具、扩展程序或脚本来更改用户代理字符串，以模拟不同的浏览器或设备。此外，一些隐私保护工具和VPN服务也可能更改用户代理字符串以保护用户的匿名性
:::
