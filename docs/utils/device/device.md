<script setup>
import Index from './index.vue'
</script>

# device

<ClientOnly>
  <description :tagNameList="['浏览器']" description="检测设备类型，获取浏览器型号以及版本" /> 
</ClientOnly>

## 基础用法
<ClientOnly>
  <Index />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/device/index.vue

</details>