<script setup>
import Index from './index.vue'
</script>

# performance

<ClientOnly>
  <description :tagNameList="['浏览器']" description="获取当前页面在加载和使用期间发生各种事件的性能计时信息" /> 
</ClientOnly>

## 基础用法
<ClientOnly>
  <Index />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/performance/index.vue

</details>
