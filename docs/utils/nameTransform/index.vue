<script setup lang="ts">
import { ref } from "vue"
import { nameCamelize, nameHyphenate } from "@pureadmin/utils"

let name = ref('i-love-study')
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mb-2">
      <n-button @click="name = nameCamelize(name)"> 横线转驼峰命名 </n-button>
      <n-button @click="name = nameHyphenate(name)"> 驼峰命名转横线命名 </n-button>
      <n-gradient-text type="info">
        {{ name }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
