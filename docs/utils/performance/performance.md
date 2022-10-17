<script setup>
import getPerformance from './getPerformance.vue'
</script>

# 浏览器性能计时信息相关函数

<ClientOnly>
  <description-popover :num="1" :tagNameList="['浏览器']" />
</ClientOnly>

## getPerformance

<ClientOnly>
  <description :isShowIcon="false" description="获取当前页面在加载和使用期间发生各种事件的性能计时信息" /> 
</ClientOnly>

### 基础用法

<ClientOnly>
  <getPerformance />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/performance/getPerformance.vue

</details>
