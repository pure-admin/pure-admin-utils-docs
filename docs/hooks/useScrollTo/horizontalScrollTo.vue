<script setup lang="ts">
import { ref } from "vue";
import { faker } from "@faker-js/faker/locale/en";
import { useMessage } from "../../components/message";
import { useScrollTo, debounce } from "@pureadmin/utils";

const scrollRef = ref();
const { message } = useMessage();

// 加个防抖。连续点击，只会执行第一次点击事件，立即执行
const onLeft = debounce(
  () =>
    useScrollTo({
      el: scrollRef,
      to: 0,
      directions: "scrollLeft",
      duration: 2000,
      callback: msg => {
        msg === "滚动完毕"
          ? message.success("已滚动到最左侧")
          : message.info(msg);
      }
    }).start(),
  1200,
  true
);

const onRight = debounce(
  () =>
    useScrollTo({
      el: scrollRef,
      to: scrollRef.value!.scrollWidth,
      directions: "scrollLeft",
      duration: 2000,
      callback: msg => {
        msg === "滚动完毕"
          ? message.success("已滚动到最右侧")
          : message.info(msg);
      }
    }).start(),
  1200,
  true
);

const onLeftShortly = () => {
  useScrollTo({ el: scrollRef, to: 0, directions: "scrollLeft" }).start();
};

const onRightShortly = () => {
  useScrollTo({
    el: scrollRef,
    to: scrollRef.value!.scrollWidth,
    directions: "scrollLeft"
  }).start();
};
</script>

<template>
  <naive-theme>
    <div
      ref="scrollRef"
      class="w-full my-3 overflow-x-scroll flex border-solid border-1 border-[var(--vp-c-divider)] rounded-lg"
    >
      <div
        v-for="(_, index) in 50"
        :key="index"
        class="shrink-0 text-center px-[20px] pt-[28px]"
      >
        <img
          class="rounded-lg w-[80px]"
          :src="`https://xiaoxian521.github.io/hyperlink/avatar/400*400_${
            index + 1
          }.jpg`"
        />
        <p>{{ faker.person.firstName() }}</p>
      </div>
    </div>
    <n-button tertiary size="small" class="mt-2" @click="onLeft">
      滚动到最左侧
    </n-button>
    <n-button tertiary size="small" class="mt-2 ml-2" @click="onRight">
      滚动到最右侧
    </n-button>
    <br />
    <n-button tertiary size="small" class="mt-2" @click="onLeftShortly">
      滚动到最左侧（无缓动效果）
    </n-button>
    <n-button tertiary size="small" class="mt-2 ml-2" @click="onRightShortly">
      滚动到最右侧（无缓动效果）
    </n-button>
  </naive-theme>
</template>
