<script setup lang="ts">
import { ref } from "vue";
import { useDraggable } from "@pureadmin/utils";

let showModal = ref(false);

const { draggable, init, close, reset, open } = useDraggable(
  ".n-dialog",
  ".n-dialog__title"
);

function onOpenDialog() {
  showModal.value = true;
  init();
}
</script>

<template>
  <naive-theme>
    <n-button @click="onOpenDialog"> 点击打开模态框 </n-button>
    <n-modal v-model:show="showModal" preset="dialog" :maskClosable="false">
      <template #header> 拖动我吧 </template>
      <div>
        <p>naiveui：我暴露了足够的api，怎么会难用呢？🤔</p>
        <p>二开疯子：确实，这下很多组件都能更好地二次封装了 😄</p>
        <p>拷贝高手：好咧，赶紧动起来！👍</p>
      </div>
      <template #action>
        <n-button @click="reset">复位</n-button>
        <n-button @click="close" v-if="draggable">关闭拖拽</n-button>
        <n-button @click="open" v-else>开启拖拽</n-button>
      </template>
    </n-modal>
  </naive-theme>
</template>
