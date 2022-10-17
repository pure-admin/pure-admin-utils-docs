<script setup lang="ts">
import { ref } from "vue"
import { subBothSides } from "@pureadmin/utils"

let character3 = ref()
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="character3 = subBothSides('hello,gird', ',')"> 截取指定字符两边的值 </n-button>
      <n-gradient-text type="info">
        原字符：hello,gird
      </n-gradient-text>
      <n-gradient-text type="error" v-show="character3?.length > 0">
        截取后字符：{{ character3 }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
