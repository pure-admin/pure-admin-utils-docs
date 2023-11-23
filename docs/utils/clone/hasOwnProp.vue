<script setup lang="ts">
import { hasOwnProp } from "@pureadmin/utils";

const obj = { name: "Tom" };
</script>

<template>
  <naive-theme>
    <p>
      对象 {{ obj }} 中
      <n-gradient-text type="info">
        {{ hasOwnProp(obj, "name") ? "存在" : "不存在" }}
      </n-gradient-text>
      name 属性，
      <n-gradient-text type="error">
        {{ hasOwnProp(obj, "age") ? "存在" : "不存在" }}
      </n-gradient-text>
      age 属性
    </p>
  </naive-theme>
</template>
