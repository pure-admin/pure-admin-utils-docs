<script setup lang="ts">
import { useRouter } from "vitepress";
import { useData } from "../components/wordcloud/data";

const { go } = useRouter();
const { hooksLen, utilsLen } = useData();
</script>

<template>
  <naive-theme>
    <n-space vertical>
      <div className="flex items-center">
        <n-tag type="info">
          <n-number-animation :from="0" :to="hooksLen" /> 个
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-button
                text
                type="primary"
                @click="go('/hooks/useCopyToClipboard/useCopyToClipboard')"
              >
                Hooks
              </n-button>
            </template>
            点击查看hooks方法
          </n-tooltip>
          、
          <n-number-animation :from="0" :to="utilsLen" /> 个
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-button text type="primary" @click="go('/utils/amount/amount')">
                Utils
              </n-button>
            </template>
            点击查看utils工具
          </n-tooltip>
        </n-tag>
        <a
          href="https://www.npmjs.com/package/@pureadmin/utils"
          target="__blank"
          className="ml-1 mr-1"
        >
          <img
            alt="NPM version"
            src="https://img.shields.io/npm/v/@pureadmin/utils?color=a1b858&label="
          />
        </a>
        <a
          href="https://www.npmjs.com/package/@pureadmin/utils"
          target="__blank"
        >
          <img
            alt="NPM Downloads"
            src="https://img.shields.io/npm/dm/@pureadmin/utils?color=50a36f&label="
          />
        </a>
      </div>
    </n-space>
  </naive-theme>
</template>
