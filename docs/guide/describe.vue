<script setup lang="ts">
import { useRouter } from "vitepress";
import { useDark } from "@pureadmin/utils";
import {
  NSpace,
  NTag,
  NButton,
  NTooltip,
  darkTheme,
  NConfigProvider,
  NNumberAnimation,
} from "naive-ui";

const { go } = useRouter();
const { isDark } = useDark();
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : undefined">
    <n-space vertical>
      <div className="flex items-center">
        <n-tag type="info">
          <n-number-animation :from="0" :to="9" /> 个
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-button
                text
                type="primary"
                @click="go('/hooks/useAttrs/useAttrs')"
              >
                Hooks
              </n-button>
            </template>
            点击查看hooks方法
          </n-tooltip>
          ，
          <n-number-animation :from="0" :to="25" /> 个
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-button
                text
                type="primary"
                @click="go('/utils/banMouseEvent/banMouseEvent')"
              >
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
  </n-config-provider>
</template>
