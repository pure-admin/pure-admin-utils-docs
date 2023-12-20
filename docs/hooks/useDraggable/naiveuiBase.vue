<script setup lang="ts">
import { ref } from "vue";
import { useDraggable } from "@pureadmin/utils";

const targetRef = ref();
const dragRef = ref();
let showModal = ref(false);

const { init } = useDraggable(targetRef, dragRef);

function onOpenModal() {
  showModal.value = true;
  init();
}
</script>

<template>
  <naive-theme>
    <n-button @click="onOpenModal"> 点击打开模态框 </n-button>
    <n-modal v-model:show="showModal">
      <div ref="targetRef">
        <n-card
          style="width: 400px"
          title="模态框"
          :bordered="false"
          size="huge"
          role="dialog"
          aria-modal="true"
        >
          <template #header>
            <div ref="dragRef">拖动我吧</div>
          </template>
          emm...不知道写点啥 🤷
        </n-card>
      </div>
    </n-modal>
  </naive-theme>
</template>
