<script setup lang="ts">
import { ref } from "vue";
import { uuid } from "@pureadmin/utils";

let customUUID = ref("");
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="customUUID = uuid(32, 62, 'simpleton-')">
        指定长度和基数的uuid
      </n-button>
      <n-gradient-text type="error">
        {{ customUUID }}
        <n-tag :bordered="false" type="error" v-show="customUUID.length > 0">
          长度：{{ customUUID.length }}
        </n-tag>
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
