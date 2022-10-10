<script setup lang="ts">
import { ref } from "vue"
import { getQueryMap, getLocation } from "@pureadmin/utils"

let url = ref('https://test?a=test&&token=token')
</script>

<template>
  <naive-theme>
    <p>url：{{ url }}</p>

    <n-gradient-text type="info">
      url中所有参数：{{ getQueryMap(url) }}
    </n-gradient-text>

    <p>当前的location信息：<n-gradient-text type="info">
        {{ getLocation() }}
      </n-gradient-text>
    </p>
  </naive-theme>
</template>
