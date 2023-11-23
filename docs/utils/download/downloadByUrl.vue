<script setup lang="ts">
import { downloadByUrl } from "@pureadmin/utils";

function down() {
  downloadByUrl(
    "https://github.com/xiaoxian521/xiaoxian521/archive/refs/heads/main.zip",
    "xiaoxian521.zip"
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
