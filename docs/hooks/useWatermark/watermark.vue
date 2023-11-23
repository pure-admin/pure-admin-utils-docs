<script setup lang="ts">
import { ref, onMounted, nextTick, onBeforeUnmount } from "vue";
import { useWatermark } from "@pureadmin/utils";

const local = ref();
const preventLocal = ref();
const value = ref("pure-admin-utils");
const { setWatermark, clear } = useWatermark();
const { setWatermark: setLocalWatermark, clear: clearLocal } =
  useWatermark(local);
const { setWatermark: setPreventLocalWatermark } = useWatermark(preventLocal);

onMounted(() => {
  nextTick(() => {
    setPreventLocalWatermark("无法删除的水印", {
      forever: true,
      width: 187,
      height: 80
    });
  });
});

onBeforeUnmount(() => {
  // 在离开该页面时清除整页水印
  clear();
});
</script>

<template>
  <naive-theme>
    <div>
      <span> 请输入要创建水印的值：</span>
      <n-input
        class="mb-4 mr-4"
        style="width: 200px"
        v-model:value="value"
        clearable
      />
    </div>

    <n-space>
      <n-button
        size="small"
        @click="setWatermark(value, { fillStyle: '#409EFF' })"
      >
        创建整页水印
      </n-button>
      <n-button
        size="small"
        @click="
          setWatermark(value, {
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' }
            ]
          })
        "
      >
        创建整页渐变水印
      </n-button>
      <n-button
        size="small"
        @click="
          setWatermark(value, {
            rotate: 0,
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' }
            ]
          })
        "
      >
        创建整页渐变且水平90度的水印
      </n-button>
      <n-button
        size="small"
        @click="
          setWatermark(value, {
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' }
            ],
            shadowConfig: [20]
          })
        "
      >
        创建整页渐变且有阴影的水印
      </n-button>

      <n-button
        size="small"
        @click="
          setWatermark(value, {
            globalAlpha: 0.15, // 值越低越透明
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' }
            ]
          })
        "
      >
        创建整页高透明渐变水印
      </n-button>
      <n-button size="small" @click="clear">清除整页水印</n-button>
    </n-space>

    <div
      ref="local"
      class="mt-4 mb-4 w-[370px] h-[300px] border-dotted border-2 border-sky-500"
    />

    <n-space>
      <n-button
        size="small"
        @click="
          setLocalWatermark('局部水印', {
            fillStyle: '#409EFF',
            width: 140,
            height: 60
          })
        "
      >
        创建局部水印
      </n-button>
      <n-button
        size="small"
        @click="
          setLocalWatermark('局部水印', {
            width: 140,
            height: 60,
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' }
            ]
          })
        "
      >
        创建局部渐变水印
      </n-button>
      <n-button
        size="small"
        @click="
          setLocalWatermark('局部水印', {
            width: 140,
            height: 56.5,
            rotate: 0,
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' }
            ]
          })
        "
      >
        创建局部渐变且水平90度的水印
      </n-button>
      <n-button
        size="small"
        @click="
          setLocalWatermark('局部水印', {
            width: 140,
            height: 56.5,
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
      <n-button size="small" @click="clearLocal">清除局部水印</n-button>
    </n-space>

    <div
      ref="preventLocal"
      class="mt-4 mb-4 w-[300px] h-[300px] border-dotted border-2 border-indigo-500"
    />
  </naive-theme>
</template>
