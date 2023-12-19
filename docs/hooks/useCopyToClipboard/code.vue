<script setup lang="ts">
import { ref } from "vue";
import { useCopyToClipboard } from "@pureadmin/utils";
import { useMessage } from "../../components/message";

const { message } = useMessage();

let codeValue = ref(`function sayHello() {
  console.log('Hello, World!');
}`);

const { copied, update } = useCopyToClipboard();

function copy() {
  update(codeValue); // 更新要拷贝的文本值
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
      <n-code :code="codeValue" language="javascript" inline />
      <n-button @click="copy"> 拷贝 </n-button>
    </n-space>
  </naive-theme>
</template>
