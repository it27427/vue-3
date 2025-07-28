<script setup lang="ts">
import { ref } from 'vue';

const title = ref('Forgot Password Page');
const description = ref('Please enter your email to reset your password.');
</script>

<template>
  <div>
    <h1 class="text-5xl font-bold text-black">{{ title }}</h1>
    <p class="text-lg text-gray-600">{{ description }}</p>

    <!-- Add forgot password form here -->


  </div>
</template>