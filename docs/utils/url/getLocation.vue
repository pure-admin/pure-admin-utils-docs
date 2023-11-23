<script setup lang="ts">
import { getLocation } from "@pureadmin/utils";
</script>

<template>
  <naive-theme>
    <p>
      当前的location信息：
      <n-gradient-text type="info">
        {{ getLocation() }}
      </n-gradient-text>
    </p>
  </naive-theme>
</template>
