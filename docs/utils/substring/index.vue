<script setup lang="ts">
import { ref } from "vue"
import { subBefore, subAfter, subBothSides, subBetween, subTextAddEllipsis, splitNum } from "@pureadmin/utils"

let character1 = ref('')
let character2 = ref('')
let character3 = ref()
let character4 = ref('')
let character5 = ref('')
let character6 = ref()
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mb-2">
      <n-button @click="character1 = subBefore('hello,gird', ',')"> 截取指定字符前面的值 </n-button>
      <n-gradient-text type="info">
        原字符：hello,gird
      </n-gradient-text>
      <n-gradient-text type="error" v-show="String(character1).length > 0">
        截取后字符：{{ character1 }}
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-button @click="character2 = subAfter('hello,gird', ',')"> 截取指定字符后面的值 </n-button>
      <n-gradient-text type="info">
        原字符：hello,gird
      </n-gradient-text>
      <n-gradient-text type="error" v-show="String(character2).length > 0">
        截取后字符：{{ character2 }}
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-button @click="character3 = subBothSides('hello,gird', ',')"> 截取指定字符两边的值 </n-button>
      <n-gradient-text type="info">
        原字符：hello,gird
      </n-gradient-text>
      <n-gradient-text type="error" v-show="character3?.length > 0">
        截取后字符：{{ character3 }}
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-button @click="character4 = subBetween('i love you', 'i ', ' you')"> 截取指定两个字符之间的值 </n-button>
      <n-gradient-text type="info">
        原字符：i love you
      </n-gradient-text>
      <n-gradient-text type="error" v-show="character4?.length > 0">
        截取后字符：{{ character4 }}
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-button @click="character5 = subTextAddEllipsis('hello,gird', 5)"> 截取字符并追加省略号（常用场景：echarts） </n-button>
      <n-gradient-text type="info">
        原字符：hello,gird
      </n-gradient-text>
      <n-gradient-text type="error" v-show="character5?.length > 0">
        截取后字符：{{ character5 }}
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mb-2">
      <n-button @click="character6 = splitNum(123456)"> 将数字拆分为单个数字组成的数组 </n-button>
      <n-gradient-text type="info">
        原数字：123456
      </n-gradient-text>
      <n-gradient-text type="error" v-show="character6?.length > 0">
        拆分后的数字：{{ character6 }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
