<script setup lang="ts">
import { ref } from 'vue';

const title = ref('Login Page');
const description = ref('Please enter your credentials to log in.');
</script>

<template>
  <div>
    <h1 class="text-5xl font-bold text-black">{{ title }}</h1>
    <p class="text-lg text-gray-600">{{ description }}</p>

    <!-- Add login form here -->
  </div>
</template>