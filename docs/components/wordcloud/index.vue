<script setup lang="ts">
import { useData } from "./data"
import { useRouter } from "vitepress"
import { onBeforeUnmount, watch } from "vue"
import { WordCloud, G2 } from "@antv/g2plot"
import { debounce, useDark } from "@pureadmin/utils"

const { go } = useRouter()
const theme = G2.getTheme("dark")
G2.registerTheme("customize-dark", {
  ...theme,
  background: "transparent",
})

const { data } = useData()
const { isDark } = useDark()

let wordCloud
debounce(() => {
  wordCloud = new WordCloud("container", {
    data: data.value,
    wordField: "name",
    weightField: "value",
    colorField: "name",
    wordStyle: {
      fontFamily: "Verdana",
      fontSize: [22, 42],
      rotation: 0,
    },
    theme: isDark.value ? "customize-dark" : "light",
    // 返回值设置成一个 [0, 1] 区间内的值，可以让每次渲染的位置相同（前提是每次的宽高一致）
    random: () => 0.5,
  })
  wordCloud.on('element:click', ({ data: { data: { text } } }) => {
    if (text === 'Utils') {
      go('/utils/amount/amount')
    } else if (text === 'Hooks') {
      go('/hooks/useCopyToClipboard/useCopyToClipboard')
    } else if (text.slice(0, 3) === ('use')) {
      go(`/hooks/${text}/${text}`)
    } else {
      go(`/utils/${text}/${text}`)
    }
  })
  wordCloud.render()
}, 20)()

watch(isDark, (value) => {
  value
    ? wordCloud?.update({ theme: "customize-dark" })
    : wordCloud?.update({ theme: "light" })
})

onBeforeUnmount(() => {
  wordCloud.destroy()
})
</script>

<template>
  <div id="container" className="mt-4"></div>
</template>
