<script setup lang="ts">
import { ref } from "vue"
import { buildUUID, buildPrefixUUID, uuid } from "@pureadmin/utils"

let UUID = ref('')
let customUUID = ref('')
let prefixUUID = ref('')
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mb-2">
      <n-button @click="UUID = buildUUID()"> 32位uuid </n-button>
      <n-gradient-text type="info">
        {{ UUID }}
        <n-tag :bordered="false" type="info" v-show="UUID.length > 0">
          长度：{{ UUID.length }}
        </n-tag>
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-button @click="prefixUUID = buildPrefixUUID('I love you, simpleton-')"> 自定义前缀的uuid </n-button>
      <n-gradient-text type="error">
        {{ prefixUUID }}
        <n-tag :bordered="false" type="error" v-show="prefixUUID.length > 0">
          长度：{{ prefixUUID.length }}
        </n-tag>
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-button @click="customUUID = uuid(32, 62, 'simpleton-')"> 指定长度和基数的uuid </n-button>
      <n-gradient-text type="error">
        {{ customUUID }}
        <n-tag :bordered="false" type="error" v-show="customUUID.length > 0">
          长度：{{ customUUID.length }}
        </n-tag>
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
