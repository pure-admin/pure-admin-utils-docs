<script setup lang="ts">
import { ref } from "vue";
import { urlToBase64 } from "@pureadmin/utils";

let base64Url = ref();
let base64OnLineUrl = ref();

function urlToBase() {
  urlToBase64("/avatar.jpg", "image/jpeg").then(res => {
    base64Url.value = res;
  });
}

function urlOnLineToBase() {
  urlToBase64(
    "https://avatars.githubusercontent.com/u/106637267?s=200&v=4"
  ).then(res => {
    base64OnLineUrl.value = res;
  });
}
</script>

<template>
  <naive-theme>
    <div>
      <n-button @click="urlToBase"> 本地图片转base64 </n-button>
      <img
        :src="base64Url"
        alt="base64Url"
        width="60"
        height="60"
        v-show="base64Url"
        class="mt-2"
      />
    </div>
    <div class="mt-2">
      <n-button @click="urlOnLineToBase" class="mt-2">
        在线图片url转base64
      </n-button>
      <img
        :src="base64OnLineUrl"
        alt="base64OnLineUrl"
        width="60"
        height="60"
        v-show="base64OnLineUrl"
        class="mt-2"
      />
    </div>
  </naive-theme>
</template>
