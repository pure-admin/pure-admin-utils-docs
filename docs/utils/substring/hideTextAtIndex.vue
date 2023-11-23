<script setup lang="ts">
import { hideTextAtIndex } from "@pureadmin/utils";

const name = "张小明";
const oname = "王小六";
const phone = "18212349876";
const idNum = "411543123498764567";
const word = "hello world";
</script>

<template>
  <naive-theme>
    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info"> 姓名：{{ oname }} </n-gradient-text>
      <n-gradient-text type="error">
        隐藏后的姓名：{{ hideTextAtIndex(oname, 1) }}
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info"> 姓名：{{ name }} </n-gradient-text>
      <n-gradient-text type="error">
        隐藏后的姓名：{{ hideTextAtIndex(name, [1, 2]) }}
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center">
      <n-gradient-text type="info"> 手机号：{{ phone }} </n-gradient-text>
      <n-gradient-text type="error">
        隐藏后的手机号：{{ hideTextAtIndex(phone, { start: 3, end: 6 }) }}
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info"> 身份证号：{{ idNum }} </n-gradient-text>
      <n-gradient-text type="error">
        隐藏后的身份证号：{{
          hideTextAtIndex(idNum, [
            { start: 3, end: 6 },
            { start: 10, end: 13 }
          ])
        }}
      </n-gradient-text>
    </n-space>

    <n-space className="flex items-center mt-2">
      <n-gradient-text type="info"> 使用指定符号：{{ word }} </n-gradient-text>
      <n-gradient-text type="error">
        使用指定符号隐藏后的值：{{ hideTextAtIndex(word, 5, "&") }}
      </n-gradient-text>
    </n-space>
  </naive-theme>
</template>
