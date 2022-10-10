<template>
  <naive-theme #default="{ dark }">
    <n-switch :value="dark" disabled>
      <template #checked> dark </template>
      <template #unchecked> light </template>
    </n-switch>
    点击右上角的主题切换按钮查看效果
  </naive-theme>
</template>
