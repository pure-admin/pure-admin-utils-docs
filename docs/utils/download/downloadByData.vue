<script setup lang="ts">
import axios from "axios"
import { downloadByData } from "@pureadmin/utils"

function down() {
  axios.get('https://xiaoxian521.github.io/pure-admin-doc/img/pure.png', { responseType: 'blob' }).then(({ data }) => {
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
