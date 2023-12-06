<script setup lang="ts">
import { ref } from "vue"
import { useIntervalFn } from "@vueuse/core"
import { dateFormat } from "@pureadmin/utils"

let time1 = ref()
let time2 = ref()
let time3 = ref()

useIntervalFn(() => {
  time1.value = dateFormat("YYYY年MM月DD日 HH时mm分ss秒")
  time2.value = dateFormat("YYYY-MM-DD HH:mm:ss")
  time3.value = dateFormat("YYYY/MM/DD HH:mm:ss")
}, 1000)
</script>

<template>
  <naive-theme>
    <n-space vertical class="mt-2">
      <n-gradient-text type="info">
        {{ time1 }}
      </n-gradient-text>
      <n-gradient-text type="info">
        {{ time2 }}
      </n-gradient-text>
      <n-gradient-text type="info">
        {{ time3 }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
