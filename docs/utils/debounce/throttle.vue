<script setup lang="ts">
import { throttle } from "@pureadmin/utils"
import { useMessage } from "../../components/message"

const { message } = useMessage()

const handle = () => {
  message.success("恭喜您，这是一条成功消息")
}

const throttleClick = throttle(handle)
</script>

<template>
  <naive-theme>
    <n-space className="mt-2">
      <n-button @click="throttleClick">
        连续点击我，每一秒只会执行一次点击事件
      </n-button>
    </n-space>
  </naive-theme>
</template>
