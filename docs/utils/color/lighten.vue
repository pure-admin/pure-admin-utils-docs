<script setup lang="ts">
import { ref } from "vue";
import { CashOutline as CashIcon } from "@vicons/ionicons5";
import { lighten } from "@pureadmin/utils";

let currentColor = ref("#94cdaf");
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-button @click="currentColor = lighten('#94cdaf', 0.4)">
        颜色值变浅
      </n-button>
      <n-button @click="currentColor = '#94cdaf'"> 颜色值还原 </n-button>
      <n-gradient-text type="info">
        <n-button :color="currentColor">
          <template #icon>
            <n-icon>
              <cash-icon />
            </n-icon>
          </template>
          {{ currentColor }}
        </n-button>
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
