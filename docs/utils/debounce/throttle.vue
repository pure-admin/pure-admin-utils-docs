<script setup lang="ts">
import { throttle } from "@pureadmin/utils";
import { useMessage } from "../../components/message";

const { message } = useMessage();

const handle = () => {
  message.success("恭喜您，这是一条成功消息");
};

const throttleClick = throttle(handle);

const throttleClickParams: any = throttle((first, second) => {
  message.success(first);
  message.success(second);
});
</script>

<template>
  <naive-theme>
    <n-space className="mt-2">
      <n-button @click="throttleClick">
        连续点击我，每一秒只会执行一次点击事件
      </n-button>
      <n-button
        @click="
          throttleClickParams(
            '我是传过来的第一个参数',
            '我是传过来的第二个参数'
          )
        "
      >
        连续点击我，每一秒只会执行一次点击事件（可传参写法，不限制参数数量）
      </n-button>
    </n-space>
  </naive-theme>
</template>
