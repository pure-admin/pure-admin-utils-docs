<script setup lang="ts">
import axios from "axios"
import { downloadByData } from "@pureadmin/utils"

function down() {
  axios.get('https://avatars.githubusercontent.com/u/44761321?v=4', { responseType: 'blob' }).then(({ data }) => {
    downloadByData(data, 'test-data.png')
  })
}
</script>

<template>
  <naive-theme>
    <div className="mt-2">
      <n-button @click="down"> 点击下载 </n-button>
    </div>
  </naive-theme>
</template>
