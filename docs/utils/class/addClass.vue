<script setup lang="ts">
import { ref, nextTick } from "vue"
import { addClass, getClass, uuid } from "@pureadmin/utils"

const testRef = ref()
const names = ref()

nextTick(() => {
  names.value = getClass(testRef.value)
})

function onAdd() {
  addClass(testRef.value, uuid(4))
  names.value = getClass(testRef.value)
}
</script>

<template>
  <naive-theme>
    <div className="mt-2">
      <div ref="testRef" class="test"></div>
      <n-button type="primary" @click="onAdd">
        点击添加类名
      </n-button>
      <p>当前元素的类名 {{ names }}</p>
    </div>
  </naive-theme>
</template>
