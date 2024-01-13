<script setup lang="ts">
import { ref } from "vue";
import { uuid } from "@pureadmin/utils";

let customUUID = ref("");
customUUID.value = uuid(32, 62, "simpleton-");
</script>

<template>
  <naive-theme>
    <n-space vertical className="mt-2">
      <n-button @click="customUUID = uuid(32, 62, 'simpleton-')">
        点击生成指定长度和基数的uuid
      </n-button>
      <n-gradient-text type="info">
        <n-tag :bordered="false" type="info" v-show="customUUID.length > 0">
          长度：{{ customUUID.length }}
        </n-tag>
        {{ customUUID }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
