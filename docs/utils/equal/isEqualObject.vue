<script setup lang="ts">
import { ref } from "vue";
import { isEqualObject } from "@pureadmin/utils";

let obj1 = ref({ a: "test" });
let obj2 = ref({ a: "test" });
let obj3 = ref({ a: "test1" });
</script>

<template>
  <naive-theme>
    <n-space className="mt-2" vertical>
      <n-gradient-text type="info">
        {{
          isEqualObject(obj1, obj2)
            ? `${JSON.stringify(obj1)} 等于 ${JSON.stringify(obj2)}`
            : `${JSON.stringify(obj1)} 不等于 ${JSON.stringify(obj2)}`
        }}
      </n-gradient-text>

      <n-gradient-text type="info">
        {{
          isEqualObject(obj1, obj3)
            ? `${JSON.stringify(obj1)} 等于 ${JSON.stringify(obj3)}`
            : `${JSON.stringify(obj1)} 不等于 ${JSON.stringify(obj3)}`
        }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
