<script setup lang="ts">
import { ref } from "vue"
import { CashOutline as CashIcon } from "@vicons/ionicons5"
import { NButton, NSpace, NGradientText, NIcon } from "naive-ui"
import { randomColor, hexToRgb, rgbToHex, darken, lighten } from "@pureadmin/utils"

let color = ref()
let hrColor = ref()
let currentColor = ref('#94cdaf')
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mb-2">
      <n-button @click="color = randomColor()"> 随机生成rgb颜色 </n-button>
      <n-button @click="color = randomColor({ type: 'hex' })"> 随机生成hex颜色 </n-button>
      <n-button @click="color = randomColor({ type: 'hsl' })"> 随机生成hsl颜色 </n-button>
      <n-button @click="color = randomColor({ num: 6 })"> 随机生成指定数量的rgb颜色数组 </n-button>
      <n-gradient-text type="info">
        {{ color }}
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-button @click="hrColor = hexToRgb('#9ad447')"> hex 转 rgb </n-button>
      <n-button @click="hrColor = rgbToHex(154, 212, 71)"> rgb 转 hex </n-button>
      <n-gradient-text type="info">
        {{ hrColor }}
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-button @click="currentColor = darken('#94cdaf', 1 / 5)"> 颜色值加深 </n-button>
      <n-button @click="currentColor = lighten('#94cdaf', 0.4)"> 颜色值变浅 </n-button>
      <n-button @click="currentColor = '#94cdaf'"> 颜色值还原 </n-button>
      <n-gradient-text type="info">
        <n-button :color="currentColor">
          <template #icon>
            <n-icon>
              <cash-icon />
            </n-icon>
          </template>
          {{ currentColor }}
        </n-button>
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
