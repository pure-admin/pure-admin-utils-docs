<script setup lang="ts">
import { CheckmarkCircle } from "@vicons/ionicons5"

defineProps({
  tagNameList: {
    type: Array<String>,
    default: () => ['Vue3']
  },
  isShowIcon: {
    type: Boolean,
    default: true
  },
  isShowGradient: {
    type: Boolean,
    default: true
  },
  gradientClass: String,
  description: String,
})
</script>

<template>
  <n-space v-show="isShowIcon">
    <n-tag round :bordered="false" type="success" v-for="item of tagNameList">
      {{ item }}
      <template #icon>
        <n-icon :component="CheckmarkCircle" />
      </template>
    </n-tag>
  </n-space>
  <n-alert v-show="isShowGradient" :class="['mt-2', gradientClass]" type="success" :show-icon="false">
    <n-gradient-text :size="18" type="success">
      功能：{{ description }}
    </n-gradient-text>
  </n-alert>
</template>
