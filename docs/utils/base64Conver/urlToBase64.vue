<script setup lang="ts">
import { ref } from "vue"
import { urlToBase64 } from "@pureadmin/utils"

let base64Url = ref()
let base64OnLineUrl = ref()

function urlToBase() {
  urlToBase64("/avatar.jpg", "image/jpeg").then((res) => {
    base64Url.value = res
  })
}

function urlOnLineToBase() {
  urlToBase64("https://pure-admin-doc.vercel.app/img/pure.png").then((res) => {
    base64OnLineUrl.value = res
  })
}
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="urlToBase"> 本地图片转base64 </n-button>
      <img :src="base64Url" alt="base64Url" width="60" height="60" v-show="base64Url" />
    </n-space>

    <n-space className="flex items-center mt-2">
      <n-button @click="urlOnLineToBase"> 在线图片url转base64 </n-button>
      <img :src="base64OnLineUrl" alt="base64OnLineUrl" width="60" height="60" v-show="base64OnLineUrl" />
    </n-space>
  </naive-theme>
</template>
