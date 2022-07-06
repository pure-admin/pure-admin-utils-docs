<script setup lang="ts">
import { CheckmarkCircle } from "@vicons/ionicons5";
import { NSpace, NTag, NIcon, NAlert } from "naive-ui";

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
    功能：{{ description }}
  </n-alert>
</template>
