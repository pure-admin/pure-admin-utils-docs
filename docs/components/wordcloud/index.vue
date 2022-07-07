<script setup lang="ts">
import { useData } from "./data";
import { onBeforeUnmount } from "vue";
import { WordCloud } from "@antv/g2plot";
import { debounce } from "@pureadmin/utils";

const { data, utilsLen } = useData();

let wordCloud;
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
    // 返回值设置成一个 [0, 1] 区间内的值，可以让每次渲染的位置相同（前提是每次的宽高一致）
    random: () => 0.5,
  });
  wordCloud.render();
}, 20)();

onBeforeUnmount(() => {
  wordCloud.destroy();
});
</script>

<template>
  <div id="container" className="mt-4"></div>
</template>
