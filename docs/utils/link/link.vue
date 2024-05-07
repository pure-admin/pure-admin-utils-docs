<script setup lang="ts">
import { openLink } from "@pureadmin/utils";
</script>

<template>
  <naive-theme>
    <div className="mt-2">
      <n-button
        @click="openLink('https://pure-admin.github.io/pure-admin-doc/')"
      >
        点击跳转超链接
      </n-button>
    </div>
  </naive-theme>
</template>
