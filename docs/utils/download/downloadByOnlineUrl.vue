<script setup lang="ts">
import { downloadByOnlineUrl } from "@pureadmin/utils";

function down() {
  downloadByOnlineUrl(
    "https://avatars.githubusercontent.com/u/44761321?v=4",
    "test-url.png"
  );
}
</script>

<template>
  <naive-theme>
    <div className="mt-2">
      <n-button @click="down"> 点击下载 </n-button>
    </div>
  </naive-theme>
</template>
