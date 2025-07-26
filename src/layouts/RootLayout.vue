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
    <Footer />
  </div>
</template>
