<script setup lang="ts">
import { onMounted } from "vue";
import { useLoader } from "@pureadmin/utils";
const { loadCss } = useLoader();

onMounted(async () => {
  try {
    let result = await loadCss({
      src: "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css"
    });
    if (result) {
      console.log(
        "%cresult===>>>: ",
        "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
        result
      );
      // 加载成功要做的事
    }
  } catch (err) {
    console.log(
      "%cerr===>>>: ",
      "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
      err
    );
    // 加载失败要做的事
  }
});
</script>

<template>
  <div></div>
</template>
