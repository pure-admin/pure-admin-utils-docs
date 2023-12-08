<script setup lang="ts">
import { ref } from "vue";
import { getQueryMap } from "@pureadmin/utils";

let url = ref(
  "http://test/#/tabs/query-detail?a=test&&token=eyJhbGciOiJIUzUxMiJ9.admin"
);
</script>

<template>
  <naive-theme>
    <p>url：{{ url }}</p>
    <n-gradient-text type="info">
      url中所有参数：{{ getQueryMap(url) }}
    </n-gradient-text>
  </naive-theme>
</template>
