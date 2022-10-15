<script setup>
import urlToBase64 from './urlToBase64.vue'
import dataURLtoBlob from './dataURLtoBlob.vue'
</script>

# 图片 url 转 base64、base64 转 blob

<ClientOnly>
  <description-popover :num="2" />
</ClientOnly>

## urlToBase64

<ClientOnly>
  <description :isShowIcon="false" description="图片url转base64" /> 
</ClientOnly>

### 基础用法

<ClientOnly>
  <urlToBase64 />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/base64Conver/urlToBase64.vue

</details>

## dataURLtoBlob

<ClientOnly>
  <description :isShowIcon="false" description="base64转blob" /> 
</ClientOnly>

### 基础用法

<ClientOnly>
  <dataURLtoBlob />
</ClientOnly>
<details>

<summary>查看代码</summary>

<<< @/utils/base64Conver/dataURLtoBlob.vue

</details>

:::tip
在线图片`url`转`base64`，要求图片请求支持跨域哦，服务器配置下允许跨域即可
:::
