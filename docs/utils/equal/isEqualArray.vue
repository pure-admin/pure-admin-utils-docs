<script setup lang="ts">
import { ref } from "vue"
import { isEqualArray } from "@pureadmin/utils"

let array1 = ref([1, 2])
let array2 = ref([1, 2])
let array3 = ref([1, 2, 3])
</script>

<template>
  <naive-theme>
    <n-space className="mt-2" vertical>
      <n-gradient-text type="info">
        {{isEqualArray(array1,array2) ? `[${array1}] 等于 [${array2}]`:`[${array1}] 不等于 [${array2}]` }}
      </n-gradient-text>

      <n-gradient-text type="info">
        {{isEqualArray(array1,array3) ? `[${array1}] 等于 [${array3}]`:`[${array1}] 不等于 [${array3}]` }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
