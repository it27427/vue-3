<script setup lang="ts">
import ContactForm from "@/components/ContactForm.vue";
import { ref } from "vue";

const title = ref("Get In Touch");
const description = ref("We would love to hear from you!");
</script>

<template>
  <div class="container max-w-7xl px-4 pt-8 pb-4">
    <div class="mb-8">
      <div class="flex flex-col items-center justify-center gap-3 pb-5">
        <h1 class="text-5xl font-bold text-black">{{ title }}</h1>
        <p class="text-gray-600">{{ description }}</p>
      </div>

      <ContactForm />
    </div>
  </div>
</template>
