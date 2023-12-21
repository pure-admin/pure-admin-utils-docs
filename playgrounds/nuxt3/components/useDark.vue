<script setup lang="ts">
import { useDark } from "@pureadmin/utils";

const switchVal = ref(false);

const { toggleDark } = useDark();
</script>

<template>
  <el-switch
    v-model="switchVal"
    class="ml-6 my-6"
    size="large"
    inline-prompt
    active-text="切换到浅色模式"
    inactive-text="切换到深色模式"
    style="--el-switch-on-color: #5993f7; --el-switch-off-color: #5871c0"
    @change="toggleDark"
  />
</template>
