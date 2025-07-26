<script setup lang="ts">
import BrandLogo from "@/components/global/BrandLogo.vue";
import MainList from "@/components/global/MainList.vue";
import Offcanvas from "@/components/global/Offcanvas.vue";
</script>

<template>
  <nav class="flex items-center justify-between p-4 bg-gray-800 shadow h-16 md:h-20">
    <BrandLogo />

    <!-- Mobile Menu -->
    <Offcanvas />

    <!-- Desktop Navigation -->
    <div class="hidden md:flex">
      <MainList />
    </div>
  </nav>
</template>
