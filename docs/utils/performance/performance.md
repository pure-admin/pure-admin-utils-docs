<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(1)

import getPerformance from './getPerformance.vue'
</script>

::: tip 支持任意运行在浏览器的 `JavaScript` 语言
浏览器性能计时信息
:::

## getPerformance

获取当前页面在加载和使用期间发生各种事件的性能计时信息

<div class="pure-border">

<getPerformance />

<details>

<summary>查看代码</summary>

<<< @/utils/performance/getPerformance.vue

</details>

</div>
