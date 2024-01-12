<script setup lang="ts">
import { ref } from "vue"
import { randomDivide, sum } from "@pureadmin/utils"

let arr = ref([])

function onClick() {
  arr.value = randomDivide(900, 20)
}
onClick()
</script>

<template>
  <naive-theme>
    <n-space vertical className="mt-2">
      <n-button @click="onClick"> 点击随机分配 </n-button>
      <n-gradient-text type="info">
        {{ arr }}
      </n-gradient-text>
      <n-gradient-text type="info">
        和为：{{ sum(arr) }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
