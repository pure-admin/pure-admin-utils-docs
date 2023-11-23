<script setup lang="ts">
import { ref } from "vue"
import { useScrollTo } from "@pureadmin/utils"
import { faker } from '@faker-js/faker/locale/en'

const scrollbarRef = ref()


const onLeft = () => {
  useScrollTo({
    el: scrollbarRef, to: 0, directions: "scrollLeft", duration: 2000, callback: () => {
      console.log('已滚动到最左侧')
    }
  }).start()
}

const onRight = () => {
  const { start, stop } = useScrollTo({
    el: scrollbarRef, to: scrollbarRef.value!.scrollWidth, directions: "scrollLeft", duration: 2000, callback: () => {
      console.log('已滚动到最右侧')
    }
  })
  start()
}

const onLeftShortly = () => {
  useScrollTo({ el: scrollbarRef, to: 0, directions: "scrollLeft" })
}

const onRightShortly = () => {
  useScrollTo({ el: scrollbarRef, to: scrollbarRef.value!.scrollWidth, directions: "scrollLeft" })
}
</script>

<template>
  <naive-theme>
    <div ref="scrollbarRef" class="w-[600px] overflow-x-scroll flex bg-[#f8fafc] dark:bg-[#1e293b] rounded-lg">
      <div v-for="(text, index) in 66" :key="index" class="shrink-0 text-center px-[20px] pt-[20px]">
        <img class="rounded-lg w-[80px]" :src="faker.image.avatar()">
        <p> {{ faker.person.firstName() }}</p>
      </div>
    </div>
    <n-button tertiary size="small" class="mt-2" @click="onLeft">
      滚动到最左侧
    </n-button>
    <n-button tertiary size="small" class="ml-2 mt-2" @click="onRight">
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
