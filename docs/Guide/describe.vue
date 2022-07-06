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
      <n-tag type="info">
        共 <n-number-animation :from="0" :to="9" /> 个
        <n-tooltip trigger="hover">
          <template #trigger>
            <n-button
              text
              type="primary"
              @click="go('/hooks/useAttrs/useAttrs')"
            >
              hooks方法
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
              utils工具集
            </n-button>
          </template>
          点击查看utils工具
        </n-tooltip>
      </n-tag>
    </n-space>
  </n-config-provider>
</template>
