<script setup lang="ts">
import { openLink } from "@pureadmin/utils"
</script>

<template>
  <naive-theme>
    <n-button @click="openLink('https://pure-admin-doc.vercel.app/')"> 点击跳转超链接 </n-button>
  </naive-theme>
</template>
