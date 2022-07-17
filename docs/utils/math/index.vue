<script setup lang="ts">
import { ref } from "vue"
import { NButton, NSpace, NGradientText, NInput } from "naive-ui"
import { max, min, sum, average, numberToChinese } from "@pureadmin/utils"

let arr = [2, 4, 6, 8]

let maxNum = ref()
let minNum = ref()
let sumNum = ref()
let averageNum = ref()

let value = ref()
</script>

<template>
  <naive-theme>
    原数组：{{ arr }}
    <n-space className="flex items-center mb-2">
      <n-button @click="maxNum = max(arr)"> 求数字类型组成数组中的最大值 </n-button>
      <n-gradient-text type="info" v-show="maxNum?.toString()?.length > 0">
        最大值：{{ maxNum }}
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-button @click="minNum = min(arr)"> 求数字类型组成数组中的最小值 </n-button>
      <n-gradient-text type="info" v-show="minNum?.toString()?.length > 0">
        最小值：{{ minNum }}
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-button @click="sumNum = sum(arr)"> 求数字类型组成数组中的和 </n-button>
      <n-gradient-text type="info" v-show="sumNum?.toString()?.length > 0">
        和：{{ sumNum }}
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-button @click="averageNum = average(arr)"> 求数字类型组成数组中的平均值 </n-button>
      <n-gradient-text type="info" v-show="averageNum?.toString()?.length > 0">
        平均值：{{ averageNum }}
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mb-2">
      将阿拉伯数字翻译成中文数字
      <n-input v-model:value="value" type="number" placeholder="试试输入点什么" />
      <n-gradient-text type="info" v-show="value?.toString()?.length > 0">
        中文数字：{{ numberToChinese(value) }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
