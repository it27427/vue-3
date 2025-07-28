<script setup lang="ts">
import { ref } from 'vue';

// Define reactive variables for title and description
const title = ref('OTP Verification');
const description = ref('Enter the verification code we just sent on your email address..');
</script>

<template>
  <div>
    <h1 class="text-5xl font-bold text-black">{{ title }}</h1>
    <p class="text-lg text-gray-600">{{ description }}</p>

    <!-- Add otp verification form here -->
  </div>
</template>