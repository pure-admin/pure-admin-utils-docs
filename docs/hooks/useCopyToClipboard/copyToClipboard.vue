<script setup lang="ts">
import { ref, unref } from "vue";
import { NButton, NSpace, NInput } from "naive-ui";
import { useCopyToClipboard } from "@pureadmin/utils";
import { useMessage } from "../../components/message";

const { message } = useMessage();

let value = ref("copy");
const { clipboardValue, copied } = useCopyToClipboard();

function copy() {
  clipboardValue.value = unref(value);
  if (copied.value) {
    message.success("拷贝成功");
  }
}
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center">
      <n-input type="text" v-model:value="value" />
      <n-button @click="copy"> 拷贝 </n-button>
    </n-space>
  </naive-theme>
</template>
