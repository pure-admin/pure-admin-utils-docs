<script setup lang="ts">
import { ref } from "vue"
import { formDataHander } from "@pureadmin/utils"

let formParam = ref()
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mb-2">
      <n-button @click="formParam = formDataHander({ a: 1, b: '2' })"> 处理FormData传参 </n-button>
      <n-gradient-text type="info" v-show="formParam?.get('a')">
        {a: {{ formParam?.get('a') }}, b: {{ formParam?.get('b') }}}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
