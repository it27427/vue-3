<script setup lang="ts">
import MainList from "@/components/global/MainList.vue";
</script>

<template>
  <nav class="flex items-center justify-between p-4 bg-gray-800 shadow">
    <figure class="flex items-center justify-center">
      <router-link to="/">
        <img src="@/assets/vue.svg" alt="Brand Logo" class="h-8 w-8" />
      </router-link>
    </figure>

    <MainList />
  </nav>
</template>
