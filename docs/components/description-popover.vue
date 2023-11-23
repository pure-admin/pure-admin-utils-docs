<script setup lang="ts">
import description from "./description.vue";

defineProps({
  tagNameList: {
    type: Array<String>,
    default: () => ["浏览器"]
  },
  num: Number
});
</script>

<template>
  <naive-theme>
    <n-popover trigger="hover" placement="right-start">
      <template #trigger>
        <n-badge :value="num" color="#4b9d5f" processing>
          <description :isShowGradient="false" :tagNameList="tagNameList" />
        </n-badge>
      </template>
      <span
        >此页面共<n-gradient-text type="info">{{ num }}</n-gradient-text
        >个函数</span
      >
    </n-popover>
  </naive-theme>
</template>
