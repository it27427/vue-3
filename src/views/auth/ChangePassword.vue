<script setup lang="ts">
import { ref } from 'vue';

const title = ref('Create new password');
const description = ref('Your new password must be unique from those previously used.');
</script>

<template>
  <div>
    <h1 class="text-5xl font-bold text-black">{{ title }}</h1>
    <p class="text-lg text-gray-600">{{ description }}</p>

    <!-- Add change password form here -->
  </div>
</template>