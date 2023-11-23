<script setup lang="ts">
import { useLoader } from "@pureadmin/utils";
import { useMessage } from "../../components/message";

const { message } = useMessage();
const { loadScript, loadCss } = useLoader();

function addScript() {
  loadScript({
    src: "https://unpkg.com/@pureadmin/utils@0.0.18/dist/iife.global.js"
  }).then(mgs => {
    if (mgs === "success") {
      message.success("加载JS成功");
    }
  });
}

function addCss() {
  loadCss({
    src: "https://unpkg.com/element-plus/dist/index.css"
  }).then(mgs => {
    if (mgs === "success") {
      message.success("加载CSS成功");
    }
  });
}

function addScriptFail() {
  loadScript({
    src: "https://failTest.js"
  }).catch(() => {
    message.error("加载JS失败");
  });
}

function addCssFail() {
  loadCss({
    src: "https://failTest.css"
  }).catch(() => {
    message.error("加载CSS失败");
  });
}
</script>

<template>
  <naive-theme>
    <n-card title="✅ 加载成功演示" embedded :bordered="false">
      <n-space>
        <n-button type="success" @click="addScript"> 加载JS </n-button>
        <n-button type="success" @click="addCss"> 加载CSS </n-button>
      </n-space>
    </n-card>
    <n-card title="❌ 加载失败演示" embedded :bordered="false">
      <n-space>
        <n-button type="error" @click="addScriptFail"> 加载JS </n-button>
        <n-button type="error" @click="addCssFail"> 加载CSS </n-button>
      </n-space>
    </n-card>
  </naive-theme>
</template>
