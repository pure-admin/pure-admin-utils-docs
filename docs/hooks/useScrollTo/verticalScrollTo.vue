<script setup lang="ts">
import { ref } from "vue";
import { faker } from "@faker-js/faker/locale/en";
import { useMessage } from "../../components/message";
import { useScrollTo, debounce } from "@pureadmin/utils";

const scrollRef = ref();
const { message } = useMessage();

// 加个防抖。连续点击，只会执行第一次点击事件，立即执行
const onTop = debounce(
  () =>
    useScrollTo({
      el: scrollRef,
      to: 0,
      directions: "scrollTop",
      duration: 2000,
      callback: msg => {
        msg === "滚动完毕"
          ? message.success("已滚动到顶部")
          : message.info(msg);
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
      callback: msg => {
        msg === "滚动完毕"
          ? message.success("已滚动到底部")
          : message.info(msg);
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
      callback: msg => {
        msg === "滚动完毕"
          ? message.success("整页已滚动到顶部")
          : message.info(msg);
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
      callback: msg => {
        msg === "滚动完毕"
          ? message.success("整页已滚动到底部")
          : message.info(msg);
      }
    }).start(),
  1200,
  true
);
</script>

<template>
  <naive-theme>
    <div
      ref="scrollRef"
      class="w-full h-[335px] mt-3 overflow-y-scroll border-solid border-1 border-[var(--vp-c-divider)] rounded-lg"
    >
      <div v-for="(_, index) in 50" :key="index" class="my-[10px]">
        <div class="flex items-center justify-start p-2 w-9/10 ml-3">
          <img
            class="rounded-lg w-[80px] mr-10"
            :src="`https://xiaoxian521.github.io/hyperlink/avatar/400*400_${
              index + 1
            }.jpg`"
          />
          <p>{{ faker.word.words({ count: { min: 5, max: 10 } }) }}</p>
        </div>
      </div>
    </div>
    <n-button tertiary size="small" class="mt-4" @click="onTop">
      滚动到顶部
    </n-button>
    <n-button tertiary size="small" class="mt-4 ml-2" @click="onBottom">
      滚动到底部
    </n-button>
    <br />
    <n-button tertiary size="small" class="mt-2" @click="onTopShortly">
      滚动到顶部（无缓动效果）
    </n-button>
    <n-button tertiary size="small" class="mt-2 ml-2" @click="onBottomShortly">
      滚动到底部（无缓动效果）
    </n-button>
    <br />
    <n-button tertiary size="small" class="mt-2" @click="onPageTop">
      整页滚动到顶部
    </n-button>
    <n-button tertiary size="small" class="mt-2 ml-2" @click="onPageBottom">
      整页滚动到底部
    </n-button>
  </naive-theme>
</template>
