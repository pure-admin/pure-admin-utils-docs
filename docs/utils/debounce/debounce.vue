<script setup lang="ts">
import { debounce } from "@pureadmin/utils";
import { useMessage } from "../../components/message";

const { message } = useMessage();

const handle = () => {
  message.success("恭喜您，这是一条成功消息");
};

const immediateDebounce = debounce(handle, 1000, true);

const immediateDebounceParams: any = debounce(
  (first, second) => {
    message.success(first);
    message.success(second);
  },
  1000,
  true
);

const debounceClick = debounce(handle, 1000);

const debounceClickParams: any = debounce((first, second) => {
  message.success(first);
  message.success(second);
}, 1000);
</script>

<template>
  <naive-theme>
    <n-space className="mt-2">
      <n-button @click="immediateDebounce">
        连续点击我，只会执行第一次点击事件，立即执行
      </n-button>
      <n-button
        @click="
          immediateDebounceParams(
            '我是传过来的第一个参数',
            '我是传过来的第二个参数'
          )
        "
      >
        连续点击我，只会执行第一次点击事件，立即执行（可传参写法，不限制参数数量）
      </n-button>
      <n-button @click="debounceClick">
        连续点击我，只会执行最后一次点击事件，延后执行
      </n-button>
      <n-button
        @click="
          debounceClickParams(
            '我是传过来的第一个参数',
            '我是传过来的第二个参数'
          )
        "
      >
        连续点击我，只会执行最后一次点击事件，延后执行（可传参写法，不限制参数数量）
      </n-button>
    </n-space>
  </naive-theme>
</template>
