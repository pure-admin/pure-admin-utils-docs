<script setup lang="ts">
import { CheckmarkCircle } from "@vicons/ionicons5"

defineProps({
  tagNameList: {
    type: Array<String>,
    default: () => []
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
  <naive-theme>
    <n-space v-show="isShowIcon">
      <n-tag round :bordered="false" type="success" v-for="item of tagNameList">
        {{ item }}
        <template #icon>
          <n-icon :component="CheckmarkCircle" />
        </template>
      </n-tag>
    </n-space>
    <n-alert v-show="isShowGradient" :class="['mt-2', gradientClass]" type="success" :show-icon="false">
      功能：{{ description }}
    </n-alert>
  </naive-theme>
</template>
