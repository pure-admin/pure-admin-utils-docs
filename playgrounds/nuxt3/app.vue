<script setup lang="ts">
import {
  UseDraggable,
  UseCopyToClipboard,
  UseGlobal,
  UseLoader,
  UseScrollTo,
  UseWatermark,
  UseECharts,
  UseDark
} from "./components";
</script>

<template>
  <Body
    class="h-[100vh] antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950"
  >
    <div class="flex flex-wrap">
      <UseDark />
      <UseCopyToClipboard class="ml-2" />
    </div>
    <div class="flex flex-wrap">
      <UseECharts />
      <UseDraggable />
    </div>
    <div class="flex flex-wrap">
      <UseScrollTo class="m-2" />
      <UseWatermark class="m-2" />
    </div>
    <UseGlobal />
    <UseLoader />
  </Body>
</template>
