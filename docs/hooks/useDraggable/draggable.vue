<script setup lang="ts">
import { ref, computed } from "vue";
import { useDraggable } from "@pureadmin/utils";

const targetRef = ref();
const dragRef = ref();

const { transform, init, reset } = useDraggable(targetRef, dragRef);
// 初始化开启拖拽功能
init();

let info = computed(() => {
  return `offsetX: ${Math.round(transform.offsetX)} offsetY: ${Math.round(
    transform.offsetY
  )}`;
});
</script>

<template>
  <div ref="targetRef" class="pure-target">
    <div ref="dragRef" class="pure-drag">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="88"
        height="88"
        viewBox="0 0 1024 1024"
      >
        <path
          fill="#3451b2"
          d="M119.026 584.87a43.651 43.651 0 1 0-43.651-43.652 43.651 43.651 0 0 0 43.651 43.652M945.487 45.633a32.01 32.01 0 0 0-58.201-27.064L694.348 465.848a183.917 183.917 0 0 1 58.201 25.026zM645.46 511.245c-51.218 0-68.096 34.048-140.557 89.339a475.215 475.215 0 0 1-254.923 90.794c-85.265 4.365-217.091 0-229.896 12.805s26.191 123.387 127.17 191.483c58.202 38.704 200.214 136.191 332.04 127.752 213.018-13.677 255.505-174.605 268.31-229.896a838.102 838.102 0 0 0 12.804-203.705c-4.365-51.8-55.292-77.117-114.948-77.117zm-12.805 396.061c-119.895 116.403-229.896 63.73-229.896 63.73l138.229-95.159-224.076 58.202-64.021-38.413 171.694-48.89-235.425 10.477-12.804-25.609 160.927-43.07-199.34 17.752-67.223-63.73a1504.51 1504.51 0 0 0 293.626-25.609 478.707 478.707 0 0 0 166.166-76.535l166.165 76.535a207.488 207.488 0 0 1-64.022 191.483zM948.398 584.87a58.202 58.202 0 1 0 58.201 58.201 58.202 58.202 0 0 0-58.201-58.201m-87.303 261.906a29.1 29.1 0 1 0 29.101 29.101 29.1 29.1 0 0 0-29.1-29.1zM308.181 555.77a29.1 29.1 0 1 0-29.1-29.1 29.1 29.1 0 0 0 29.1 29.1"
        />
      </svg>
      <p>拖着我满世界跑吧</p>
      <p>{{ info }}</p>
    </div>
    <p class="pure-reset" title="复位" @click="reset">点击召回</p>
  </div>
</template>

<style scoped>
.pure-target {
  position: relative;
  z-index: 999;
  width: 15em;
  height: 15em;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  color: var(--vp-c-brand);
  border-radius: 0.5em;
  background-color: var(--vp-custom-block-tip-bg);
  border: 1px solid var(--vp-custom-block-tip-border);
}

.pure-reset {
  cursor: pointer;
  position: absolute;
  bottom: -10px;
  right: 10px;
}

.pure-reset:hover {
  color: var(--vp-c-text-1);
}

.pure-drag {
  text-align: center;
}

.pure-drag svg {
  margin: 0 auto;
}
</style>
