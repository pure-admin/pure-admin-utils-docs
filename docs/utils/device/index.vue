<script setup lang="ts">
import { ref } from "vue"
import { useResizeObserver } from "@vueuse/core"
import { deviceDetection, getBrowserInfo } from "@pureadmin/utils"

let device = ref()
let browser = ref()
let version = ref()

useResizeObserver(document.body, () => {
  device.value = deviceDetection()
  browser.value = getBrowserInfo().browser
  version.value = getBrowserInfo().version
})
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mb-2">
      <n-gradient-text type="info">
        当前设备类型：<n-gradient-text type="error">
          {{ device ? "移动端" : "pc端" }}
        </n-gradient-text>
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-gradient-text type="info">
        当前浏览器型号：<n-gradient-text type="error">
          {{ browser }}
        </n-gradient-text>
      </n-gradient-text>

      <n-gradient-text type="info">
        当前浏览器版本：<n-gradient-text type="error">
          {{ version }}
        </n-gradient-text>
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
