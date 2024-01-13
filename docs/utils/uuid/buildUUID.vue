<script setup lang="ts">
import { ref } from "vue";
import { buildUUID } from "@pureadmin/utils";

let UUID = ref("");
UUID.value = buildUUID();
</script>

<template>
  <naive-theme>
    <n-space vertical className="mt-2">
      <n-button @click="UUID = buildUUID()"> 点击生成32位uuid </n-button>
      <n-gradient-text type="info">
        <n-tag :bordered="false" type="info" v-show="UUID.length > 0">
          长度：{{ UUID.length }}
        </n-tag>
        {{ UUID }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
