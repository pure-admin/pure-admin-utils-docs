<script setup lang="ts">
import { ref } from "vue"
import { convertPath, clone } from "@pureadmin/utils"

let path1 = ref('Documents\\newFolder')
let path2 = ref('C:\\Documents\\newFolder\\test.js')
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mb-2">
      <n-card title="Demo1" embedded :bordered="false">
        <n-gradient-text type="info">
          windows路径：{{ clone(path1) }}
        </n-gradient-text>
        <br />
        <n-gradient-text type="error">
          转换后的路径：{{ convertPath(path1) }}
        </n-gradient-text>
      </n-card>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-card title="Demo2" embedded :bordered="false">
        <n-gradient-text type="info">
          windows路径：{{ clone(path2) }}
        </n-gradient-text>
        <br />
        <n-gradient-text type="error">
          转换后的路径：{{ convertPath(path2) }}
        </n-gradient-text>
      </n-card>
    </n-space>
  </naive-theme>
</template>
