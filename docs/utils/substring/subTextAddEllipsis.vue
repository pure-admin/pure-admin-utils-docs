<script setup lang="ts">
import { ref } from "vue"
import { subTextAddEllipsis } from "@pureadmin/utils"

let character5 = ref('')
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="character5 = subTextAddEllipsis('hello,gird', 5)"> 截取字符并追加省略号（常用场景：echarts） </n-button>
      <n-gradient-text type="info">
        原字符：hello,gird
      </n-gradient-text>
      <n-gradient-text type="error" v-show="character5?.length > 0">
        截取后字符：{{ character5 }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
