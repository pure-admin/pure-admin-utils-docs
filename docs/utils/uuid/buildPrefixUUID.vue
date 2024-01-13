<script setup lang="ts">
import { ref } from "vue";
import { buildPrefixUUID } from "@pureadmin/utils";

let prefixUUID = ref("");
prefixUUID.value = buildPrefixUUID("I love you, simpleton-");
</script>

<template>
  <naive-theme>
    <n-space vertical className="mt-2">
      <n-button @click="prefixUUID = buildPrefixUUID('I love you, simpleton-')">
        点击生成自定义前缀的uuid
      </n-button>
      <n-gradient-text type="info">
        <n-tag :bordered="false" type="info" v-show="prefixUUID.length > 0">
          长度：{{ prefixUUID.length }}
        </n-tag>
        {{ prefixUUID }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
