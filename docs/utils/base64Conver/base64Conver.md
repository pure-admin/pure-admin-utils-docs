<script setup>
import Index from './index.vue'
</script>

# base64Conver

<ClientOnly>
  <description :tagNameList="['浏览器']" description="图片url转base64、base64转blob" /> 
</ClientOnly>

## 基础用法
<ClientOnly>
  <Index />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/base64Conver/index.vue

</details>

:::tip
在线图片`url`转`base64`，要求图片请求支持跨域哦，服务器配置下允许跨域即可
:::
