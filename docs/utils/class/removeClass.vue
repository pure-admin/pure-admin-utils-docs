<script setup lang="ts">
import { ref, nextTick } from "vue"
import { removeClass, getClass } from "@pureadmin/utils"

const testRef = ref()
const names = ref()

nextTick(() => {
  names.value = getClass(testRef.value)
})

function onRemove() {
  removeClass(testRef.value, "test1 test2")
  names.value = getClass(testRef.value)
}
</script>

<template>
  <naive-theme>
    <div className="mt-2">
      <div ref="testRef" class="test test1 test2 test3"></div>
      <n-button type="warning" @click="onRemove">
        点击删除类名
      </n-button>
      <p>当前元素的类名 {{ names }}</p>
    </div>
  </naive-theme>
</template>
