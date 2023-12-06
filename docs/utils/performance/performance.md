<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(1)

import getPerformance from './getPerformance.vue'
</script>

<!-- # 浏览器性能计时信息 -->

::: tip 支持任意运行在浏览器的 `JavaScript` 语言
浏览器性能计时信息
:::

<!-- <description-popover :num="1" :tagNameList="['浏览器']" /> -->

## getPerformance

::: info 作用：获取当前页面在加载和使用期间发生各种事件的性能计时信息
:::

<!-- <description :isShowIcon="false" description="获取当前页面在加载和使用期间发生各种事件的性能计时信息" /> -->

### 基础用法

<getPerformance />

<details>

<summary>查看代码</summary>

<<< @/utils/performance/getPerformance.vue

</details>
