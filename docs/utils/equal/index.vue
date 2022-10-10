<script setup lang="ts">
import { ref, computed } from "vue"
import { isEqual } from "@pureadmin/utils"

let beforeVal = ref('')
let afterVal = ref('')
let isObjEqual = computed(() => {
  return isEqual(beforeVal.value, afterVal.value)
})

let options = [
  {
    label: '对象',
    key: '1',
    disabled: true,
    style: {
      color: '#c03f53'
    },
    children: [
      {
        label: "{ name: 'Tom', age: 16 }",
        value: "{ name: 'Tom', age: 16 }",
      },
      {
        label: "{ name: 'Tom', age: 20 }",
        value: "{ name: 'Tom', age: 20 }",
      },
      {
        label: "{ name: 'Mary', age: 18 }",
        value: "{ name: 'Mary', age: 18 }",
      },
      {
        label: "{ name: 'Tony', age: 18 }",
        value: "{ name: 'Tony', age: 18 }",
      }
    ]
  },
  {
    label: '数组',
    key: '2',
    disabled: true,
    style: {
      color: '#4b9d5f'
    },
    children: [
      {
        label: "[{ name: 'Tony', age: 16 }]",
        value: "[{ name: 'Tony', age: 16 }]",
      },
      {
        label: "[{ name: 'Tony', age: 20 }]",
        value: "[{ name: 'Tony', age: 20 }]",
      },
      {
        label: "[{ name: 'Alan', age: 18 }]",
        value: "[{ name: 'Alan', age: 18 }]",
      },
      {
        label: "[{ name: 'Mary', age: 18 }]",
        value: "[{ name: 'Mary', age: 18 }]",
      }
    ]
  },
  {
    label: '数字',
    key: '3',
    disabled: true,
    style: {
      color: '#3b81e8'
    },
    children: [
      {
        label: 20,
        value: 20,
      },
      {
        label: 24,
        value: 24
      }
    ]
  },
  {
    label: '字符串',
    key: '4',
    disabled: true,
    style: {
      color: '#e4a341'
    },
    children: [
      {
        label: '小哥哥，你真帅',
        value: '小哥哥，你真帅',
      },
      {
        label: '小姐姐，你真漂亮',
        value: '小姐姐，你真漂亮'
      }
    ]
  },
]
</script>

<template>
  <naive-theme>
    <n-space>
      <n-select :options="options" class="w-220px" v-model:value="beforeVal" />
      <span class="leading-34px">{{ isObjEqual ? '等于' : '不等于' }}</span>
      <n-select :options="options" class="w-220px" v-model:value="afterVal" />
    </n-space>
  </naive-theme>
</template>