<script setup lang="ts">
import { getCurrentWeek } from "@pureadmin/utils"
</script>

<template>
  <p>{{ getCurrentWeek() }} </p>
</template>
