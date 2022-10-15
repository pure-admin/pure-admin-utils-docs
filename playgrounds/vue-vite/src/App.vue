<script setup lang="ts">
import { buildUUID, getCurrentWeek } from "@pureadmin/utils"
</script>

<template>
  <p>
    {{getCurrentWeek()}}{{buildUUID()}}
  </p>
</template>

