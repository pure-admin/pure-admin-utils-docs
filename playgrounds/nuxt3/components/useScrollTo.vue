<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { useScrollTo, debounce } from "@pureadmin/utils";

const scrollRef = ref();

// 加个防抖。连续点击，只会执行第一次点击事件，立即执行
const onTop = debounce(
  () =>
    useScrollTo({
      el: scrollRef,
      to: 0,
      directions: "scrollTop",
      duration: 2000,
      callback: message => {
        message === "滚动完毕"
          ? ElMessage({ message: "已滚动到顶部", type: "success" })
          : ElMessage({ message, type: "info" });
      }
    }).start(),
  1200,
  true
);

const onBottom = debounce(
  () =>
    useScrollTo({
      el: scrollRef,
      to: scrollRef.value!.scrollHeight,
      directions: "scrollTop",
      duration: 2000,
      callback: message => {
        message === "滚动完毕"
          ? ElMessage({ message: "已滚动到底部", type: "success" })
          : ElMessage({ message, type: "info" });
      }
    }).start(),
  1200,
  true
);

const onTopShortly = () => {
  useScrollTo({ el: scrollRef, to: 0, directions: "scrollTop" }).start();
};

const onBottomShortly = () => {
  useScrollTo({
    el: scrollRef,
    to: scrollRef.value!.scrollHeight,
    directions: "scrollTop"
  }).start();
};

// 整页滚动
const onPageTop = debounce(
  () =>
    useScrollTo({
      el: document.documentElement,
      to: 0,
      directions: "scrollTop",
      duration: 800,
      callback: message => {
        message === "滚动完毕"
          ? ElMessage({ message: "整页已滚动到顶部", type: "success" })
          : ElMessage({ message, type: "info" });
      }
    }).start(),
  1200,
  true
);

const onPageBottom = debounce(
  () =>
    useScrollTo({
      el: document.documentElement,
      to: document.documentElement.scrollHeight,
      directions: "scrollTop",
      duration: 800,
      callback: message => {
        message === "滚动完毕"
          ? ElMessage({ message: "整页已滚动到底部", type: "success" })
          : ElMessage({ message, type: "info" });
      }
    }).start(),
  1200,
  true
);
</script>

<template>
  <div class="flex flex-wrap w-[600px]">
    <div
      ref="scrollRef"
      class="w-full h-[335px] overflow-y-scroll border-solid border-1 border-[#e2e2e3] dark:border-[#2e2e32] rounded-lg"
    >
      <div v-for="(_, index) in 50" :key="index" class="my-[10px]">
        <div class="flex items-center justify-start p-2 w-9/10 ml-3">
          <img
            class="rounded-lg w-[80px] mr-10"
            :src="`https://xiaoxian521.github.io/hyperlink/avatar/400*400_${
              index + 1
            }.jpg`"
          />
          <p>{{ `我是第 ${index + 1} 个模特` }}</p>
        </div>
      </div>
    </div>
    <div>
      <el-button tertiary size="small" class="mt-4" @click="onTop">
        滚动到顶部
      </el-button>
      <el-button tertiary size="small" class="mt-4 ml-2" @click="onBottom">
        滚动到底部
      </el-button>
      <br />
      <el-button tertiary size="small" class="mt-2" @click="onTopShortly">
        滚动到顶部（无缓动效果）
      </el-button>
      <el-button
        tertiary
        size="small"
        class="mt-2 ml-2"
        @click="onBottomShortly"
      >
        滚动到底部（无缓动效果）
      </el-button>
      <br />
      <el-button tertiary size="small" class="mt-2" @click="onPageTop">
        整页滚动到顶部
      </el-button>
      <el-button tertiary size="small" class="mt-2 ml-2" @click="onPageBottom">
        整页滚动到底部
      </el-button>
    </div>
  </div>
</template>
