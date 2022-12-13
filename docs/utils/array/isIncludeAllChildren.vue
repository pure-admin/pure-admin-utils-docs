<script setup lang="ts">
import { computed } from "vue"
import { isIncludeAllChildren } from "@pureadmin/utils"

let arr1 = [1, 2, '3']
let arr2 = [1, 2, '3', 4, 10]
let arr = [{ name: 'Jack' }, 1, 2, 3, 4, 5, 6, '3', '1']

function stringify(val) {
  return JSON.stringify(val)
}

let firstText = computed(() => {
  return `${stringify(arr)} ${isIncludeAllChildren(arr1, arr) ? '完全包含 ' + stringify(arr1) : '不完全包含 ' + stringify(arr1)}`
})
let secondText = computed(() => {
  return `${stringify(arr)} ${isIncludeAllChildren(arr2, arr) ? '完全包含 ' + stringify(arr2) : '不完全包含 ' + stringify(arr2)}`
})
</script>

<template>
  <naive-theme>
    <n-space vertical className="mt-2">
      <n-gradient-text type="info">
        {{ firstText }}
      </n-gradient-text>
      <n-gradient-text type="info">
        {{ secondText }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
