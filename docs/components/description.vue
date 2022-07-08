<script setup lang="ts">
import { CheckmarkCircle } from "@vicons/ionicons5";
import { NSpace, NTag, NIcon, NAlert, NGradientText } from "naive-ui";

defineProps({
  tagNameList: {
    type: Array<String>,
    default: () => ['Vue3','浏览器']
  },
  description: String
});
</script>

<template>
  <n-space>
    <n-tag round :bordered="false" type="success" v-for="item of tagNameList">
      {{ item }}
      <template #icon>
        <n-icon :component="CheckmarkCircle" />
      </template>
    </n-tag>
  </n-space>
  <n-alert class="mt-4" type="success" :show-icon="false">
    <n-gradient-text :size="18" type="success">
      功能：{{ description }}
    </n-gradient-text>
  </n-alert>
</template>
