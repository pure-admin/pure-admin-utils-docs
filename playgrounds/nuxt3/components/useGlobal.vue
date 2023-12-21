<script setup lang="ts">
import { useGlobal } from "@pureadmin/utils";

const { $echarts } = useGlobal<GlobalPropertiesApi>();

console.log(
  "%c$echarts===>>>: ",
  "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
  $echarts
);
</script>

<template>
  <div></div>
</template>
