<script setup lang="ts">
import { ref } from "vue";
import { formDataHander } from "@pureadmin/utils";

let formParam = ref();

function onClick() {
  formParam.value = formDataHander({ a: 1, b: "2" });
}
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="onClick"> 处理FormData传参 </n-button>
      <n-gradient-text type="info" v-show="formParam?.get('a')">
        {a: {{ formParam?.get("a") }}, b: {{ formParam?.get("b") }}}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
