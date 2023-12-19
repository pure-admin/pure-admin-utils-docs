<script setup lang="ts">
import { useCopyToClipboard } from "@pureadmin/utils";
import { useMessage } from "../../components/message";

const { message } = useMessage();

let codeValue = `function sayHello() {
  console.log('Hello, World!');
}`;

const { clipboardValue, copied } = useCopyToClipboard();

function copy() {
  clipboardValue.value = codeValue;
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
