<script setup lang="ts">
import { ref } from "vue"
import { buildGUID } from "@pureadmin/utils"

let GUID = ref("")
GUID.value = buildGUID()
</script>

<template>
  <naive-theme>
    <n-space vertical className="mt-2">
      <n-button @click="GUID = buildGUID()"> 点击生成36位带横杠的GUID </n-button>
      <n-gradient-text type="info">
        <n-tag :bordered="false" type="info" v-show="GUID.length > 0">
          长度：{{ GUID.length }}
        </n-tag>
        {{ GUID }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
