<script setup lang="ts">
import { ref } from "vue";
import { useWatermark } from "@pureadmin/utils";

const partRef = ref();
const { setWatermark, clear } = useWatermark(partRef);
</script>

<template>
  <naive-theme>
    <div ref="partRef">
      <n-scrollbar
        x-scrollable
        class="mt-4 mb-4 h-[300px] border-solid border-1 border-[var(--vp-c-divider)] rounded-md overflow-auto"
      >
        <div class="whitespace-nowrap p-3">
          useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何 😉。
        </div>
        <div class="whitespace-nowrap p-3">
          滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，你小子给我等着 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，你小子给我等着
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩 😳 ...
        </div>
        <div class="whitespace-nowrap p-3">
          useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何 😉。
        </div>
        <div class="whitespace-nowrap p-3">
          滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，你小子给我等着 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，你小子给我等着
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩 😳 ...
        </div>
        <div class="whitespace-nowrap p-3">
          useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何 😉。
        </div>
        <div class="whitespace-nowrap p-3">
          滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，你小子给我等着 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，你小子给我等着
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩 😳 ...
        </div>
        <div class="whitespace-nowrap p-3">
          useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何 😉。
        </div>
        <div class="whitespace-nowrap p-3">
          滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，你小子给我等着 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，你小子给我等着
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩 😳 ...
        </div>
        <div class="whitespace-nowrap p-3">
          useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何 😉。
        </div>
        <div class="whitespace-nowrap p-3">
          滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，你小子给我等着 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，你小子给我等着
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩 😳 ...
        </div>
        <div class="whitespace-nowrap p-3">
          useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何 😉。
        </div>
        <div class="whitespace-nowrap p-3">
          滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，你小子给我等着 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，你小子给我等着
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩 😳 ...
        </div>
        <div class="whitespace-nowrap p-3">
          useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何 😉。
        </div>
        <div class="whitespace-nowrap p-3">
          滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，你小子给我等着 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，你小子给我等着
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩 😳 ...
        </div>
        <div class="whitespace-nowrap p-3">
          useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何 😉。
        </div>
        <div class="whitespace-nowrap p-3">
          滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，你小子给我等着 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，你小子给我等着
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩 😳 ...
        </div>
        <div class="whitespace-nowrap p-3">
          useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何 😉。
        </div>
        <div class="whitespace-nowrap p-3">
          滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，你小子给我等着 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，你小子给我等着
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩 😳 ...
        </div>
        <div class="whitespace-nowrap p-3">
          useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何 😉。
        </div>
        <div class="whitespace-nowrap p-3">
          滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，你小子给我等着 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，你小子给我等着
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩 😳 ...
        </div>
        <div class="whitespace-nowrap p-3">
          useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何 😉。
        </div>
        <div class="whitespace-nowrap p-3">
          滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，你小子给我等着 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，你小子给我等着
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩 😳 ...
        </div>
        <div class="whitespace-nowrap p-3">
          useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何 😉。
        </div>
        <div class="whitespace-nowrap p-3">
          滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，你小子给我等着 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，你小子给我等着
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩 😳 ...
        </div>
        <div class="whitespace-nowrap p-3">
          useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何 😉。
        </div>
        <div class="whitespace-nowrap p-3">
          滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，你小子给我等着 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，你小子给我等着
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩 😳 ...
        </div>
        <div class="whitespace-nowrap p-3">
          useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何
          😉。useWatermark说：上下、左右滚动能奈我何 😉。
        </div>
        <div class="whitespace-nowrap p-3">
          滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，你小子给我等着 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩是吧
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，你小子给我等着
          😳。滚动条说：好好好，这么玩是吧 😳。滚动条说：好好好，这么玩 😳 ...
        </div>
      </n-scrollbar>
    </div>

    <n-space vertical>
      <n-button
        size="small"
        @click="
          setWatermark('局部水印', {
            width: 138,
            height: 80
          })
        "
      >
        创建局部水印
      </n-button>
      <n-button
        size="small"
        @click="
          setWatermark('局部水印', {
            width: 138,
            height: 80,
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' }
            ]
          })
        "
      >
        创建局部渐变的水印
      </n-button>
      <n-button
        size="small"
        @click="
          setWatermark('局部水印', {
            width: 138,
            height: 75,
            rotate: 0,
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' }
            ]
          })
        "
      >
        创建局部渐变且横向水平的水印
      </n-button>
      <n-button
        size="small"
        @click="
          setWatermark('局部水印', {
            width: 138,
            height: 61,
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' }
            ],
            shadowConfig: [20]
          })
        "
      >
        创建局部渐变且有阴影的水印
      </n-button>
      <n-button size="small" @click="clear">清除局部水印</n-button>
    </n-space>
  </naive-theme>
</template>
