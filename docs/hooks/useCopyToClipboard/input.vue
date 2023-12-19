<script setup lang="ts">
import { ref } from "vue";
import { useCopyToClipboard } from "@pureadmin/utils";
import { useMessage } from "../../components/message";

const { message } = useMessage();

let textValue = ref("");
const { clipboardValue, copied } = useCopyToClipboard("当值为空时我会被拷贝");

function copy() {
  clipboardValue.value = textValue.value;
  if (copied.value) {
    message.success("拷贝成功");
  } else {
    message.warning("拷贝失败");
  }
}
</script>

<template>
  <naive-theme>
    <n-space className="mt-2 flex items-center">
      <n-input
        type="text"
        v-model:value="textValue"
        placeholder="请输入要拷贝的值"
      />
      <n-button @click="copy"> 拷贝 </n-button>
    </n-space>
  </naive-theme>
</template>
