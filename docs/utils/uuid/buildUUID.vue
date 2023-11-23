<script setup lang="ts">
import { ref } from "vue";
import { buildUUID } from "@pureadmin/utils";

let UUID = ref("");
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="UUID = buildUUID()"> 32位uuid </n-button>
      <n-gradient-text type="info">
        {{ UUID }}
        <n-tag :bordered="false" type="info" v-show="UUID.length > 0">
          长度：{{ UUID.length }}
        </n-tag>
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
