<script setup>
import Index from './index.vue'
</script>

# uuid

<ClientOnly>
  <description :tagNameList="['浏览器','Node']" description="生成uuid" /> 
</ClientOnly>

## 基础用法

<ClientOnly>
  <Index />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/uuid/index.vue

</details>

::: tip
指定基数的母体为：`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`，总长度`62`  
指定基数也就是规定要生成的`uuid`采用哪些字符组合，比如基数为`10`，那么生成的`uuid`就会采用基数母体的前`10`位进行组合，也就是`0123456789`
:::
