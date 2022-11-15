<script setup lang="ts">
import { downloadByOnlineUrl } from "@pureadmin/utils"

function down() {
  downloadByOnlineUrl('https://xiaoxian521.github.io/pure-admin-doc/img/pure.png', 'test-url.png')
}
</script>

<template>
  <naive-theme>
    <div className="mt-2">
      <n-button @click="down"> 点击下载 </n-button>
    </div>
  </naive-theme>
</template>
