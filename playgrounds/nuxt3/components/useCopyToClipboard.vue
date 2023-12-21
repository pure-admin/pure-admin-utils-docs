<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { useCopyToClipboard } from "@pureadmin/utils";

let textValue = ref("");
const { copied, update } = useCopyToClipboard("当值为空时我会被拷贝");

function copy() {
  update(textValue); // 更新要拷贝的文本值
  if (copied.value) {
    ElMessage({ message: "拷贝成功", type: "success" });
  } else {
    ElMessage({ message: "拷贝失败", type: "warning" });
  }
}
</script>

<template>
  <el-space className="mt-2 flex items-center">
    <el-input
      clearable
      type="text"
      v-model="textValue"
      placeholder="请输入要拷贝的值"
      class="!w-[200px]"
    />
    <el-button @click="copy"> 拷贝 </el-button>
  </el-space>
</template>
