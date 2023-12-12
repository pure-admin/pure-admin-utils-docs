<script setup lang="ts">
defineProps({
  imgSrc: String
});
</script>

<template>
  <photo-provider>
    <photo-consumer :src="imgSrc">
      <img :src="imgSrc" class="view-box" />
    </photo-consumer>
  </photo-provider>
</template>
