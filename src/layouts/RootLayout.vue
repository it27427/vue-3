<script setup lang="ts">
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Header -->
    <Header />

    <!-- Page Content -->
    <main class="flex-1 p-6">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-200 text-center p-4">
      <p class="text-sm text-gray-700">© 2025 My Vue App</p>
    </footer>
  </div>
</template>
