<script setup lang="ts">
import { ref } from "vue";
import { hasClass } from "@pureadmin/utils";

const testRef = ref();
</script>

<template>
  <naive-theme>
    <div ref="testRef" class="test"></div>
    <p>
      {{
        hasClass(testRef, "test")
          ? "当前 div 存在 test 类名"
          : "当前 div 不存在 test 类名"
      }}
    </p>
  </naive-theme>
</template>
