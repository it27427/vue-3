<script setup lang="ts">
import { computed } from 'vue';

const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>

<template>
  <span>{{ currentYear }}</span>
</template>