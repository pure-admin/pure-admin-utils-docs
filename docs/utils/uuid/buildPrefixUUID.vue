<script setup lang="ts">
import { ref } from "vue";
import { buildPrefixUUID } from "@pureadmin/utils";

let prefixUUID = ref("");
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="prefixUUID = buildPrefixUUID('I love you, simpleton-')">
        自定义前缀的uuid
      </n-button>
      <n-gradient-text type="error">
        {{ prefixUUID }}
        <n-tag :bordered="false" type="error" v-show="prefixUUID.length > 0">
          长度：{{ prefixUUID.length }}
        </n-tag>
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
