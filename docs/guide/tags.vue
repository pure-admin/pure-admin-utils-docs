<script setup lang="ts">
import description from "../components/description.vue"
import TypeIt from "../components/typeit"

defineProps({
  tagNameList: {
    type: Array<String>,
    default: () => ['Vue3']
  },
  values: {
    type: Array<String | Number>,
    default: () => []
  },
  className: {
    type: String,
    default: "type-it",
  },
  speed: {
    type: Number,
    default: 200,
  },
})
</script>

<template>
  <naive-theme>
    <n-space>
      <description :isShowGradient="false" :tagNameList="tagNameList" />
      <TypeIt :values="values" :className="className" :speed="speed" />
    </n-space>
  </naive-theme>
</template>
