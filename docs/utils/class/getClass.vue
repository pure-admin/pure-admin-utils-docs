<script setup lang="ts">
import { ref } from "vue"
import { getClass } from "@pureadmin/utils"

const testRef = ref()
</script>

<template>
  <naive-theme>
    <div className="mt-2">
      <div ref="testRef" class="test test1 test2"></div>
      <p>当前元素的类名 {{ getClass(testRef) }}</p>
    </div>
  </naive-theme>
</template>
