<script setup lang="ts">
import { ref } from "vue"
import { faker } from '@faker-js/faker'
import { useScrollTo } from "@pureadmin/utils"

const scrollbarRef = ref()

const onTop = () => {
  useScrollTo({
    el: scrollbarRef, to: 0, directions: "scrollTop", duration: 2000, callback: () => {
      console.log('已滚动到顶部')
    }
  }).start()
}

const onBottom = () => {
  const { start, stop } = useScrollTo({
    el: scrollbarRef, to: scrollbarRef.value!.scrollHeight, directions: "scrollTop", duration: 2000, callback: () => {
      console.log('已滚动到底部')
    }
  })
  start()
}

const onTopShortly = () => {
  useScrollTo({ el: scrollbarRef, to: 0, directions: "scrollTop" })
}

const onBottomShortly = () => {
  useScrollTo({ el: scrollbarRef, to: scrollbarRef.value!.scrollHeight, directions: "scrollTop" })
}
</script>

<template>
  <naive-theme>
    <div ref="scrollbarRef"
      class="h-[335px] overflow-y-scroll bg-[#f8fafc] dark:bg-[#1e293b] dark:text-[#1e293b] rounded-lg">
      <div v-for="(text, index) in 66" :key="index" class="my-[10px]">
        <div class="bg-white flex items-center justify-start p-2 w-9/10 m-auto">
          <img class="rounded-lg w-[80px] mr-10" :src="faker.image.avatar()">
          <p>{{ faker.word.words({ count: { min: 5, max: 10 } }) }}</p>
        </div>
      </div>
    </div>
    <n-button tertiary size="small" class="mt-2" @click="onTop">
      滚动到顶部
    </n-button>
    <n-button tertiary size="small" class="ml-2 mt-2" @click="onBottom">
      滚动到底部
    </n-button>
    <br />
    <n-button tertiary size="small" class="mt-2" @click="onTopShortly">
      滚动到顶部（无缓动效果）
    </n-button>
    <n-button tertiary size="small" class="mt-2 ml-2" @click="onBottomShortly">
      滚动到底部（无缓动效果）
    </n-button>
  </naive-theme>
</template>
