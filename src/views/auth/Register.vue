<script setup lang="ts">
import { ref } from 'vue';

const title = ref('Register Page');
const description = ref('Please fill in the details to create an account.');
</script>

<template>
  <div>
    <h1 class="text-5xl font-bold text-black">{{ title }}</h1>
    <p class="text-lg text-gray-600">{{ description }}</p>

    <!-- Add registration form here -->
  </div>
</template>