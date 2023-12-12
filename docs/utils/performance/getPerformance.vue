<script setup lang="ts">
import { ref, computed } from "vue";
import { getPerformance } from "@pureadmin/utils";

let performance = ref();
let precision = computed(() => {
  return val => (val > 0 ? 3 : 0);
});

getPerformance()
  .then(res => {
    performance.value = res;
  })
  .catch(err => console.log(err));
</script>

<template>
  <naive-theme>
    <div className="mt-2">
      DNS查询耗时：
      <n-gradient-text type="info">
        <n-number-animation
          :from="0"
          :to="performance?.dns"
          :precision="precision(performance?.dns)"
        />
        秒
      </n-gradient-text>
      <br />

      TCP连接耗时：
      <n-gradient-text type="info">
        <n-number-animation
          :from="0"
          :to="performance?.tcp"
          :precision="precision(performance?.tcp)"
        />
        秒
      </n-gradient-text>
      <br />

      Request请求耗时：
      <n-gradient-text type="info">
        <n-number-animation
          :from="0"
          :to="performance?.request"
          :precision="precision(performance?.request)"
        />
        秒
      </n-gradient-text>
      <br />

      解析Dom树耗时：
      <n-gradient-text type="info">
        <n-number-animation
          :from="0"
          :to="performance?.dom"
          :precision="precision(performance?.dom)"
        />
        秒
      </n-gradient-text>
      <br />

      白屏时长：
      <n-gradient-text type="info">
        <n-number-animation
          :from="0"
          :to="performance?.whiteScreen"
          :precision="precision(performance?.whiteScreen)"
        />
        秒
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
