<script setup lang="ts">
import BrandLogo from "@/components/global/BrandLogo.vue";
import MainList from "@/components/global/MainList.vue";
import { ref } from 'vue';

const isOpen = ref(false);

// function to close sidebar
const closeOffcanvas = () => {
  isOpen.value = false;
};
</script>

<template>
  <div class="md:hidden">
    <!-- Button to open sidebar -->
    <button @click="isOpen = true" class="px-4 py-2 text-white text-xl">
      ☰
    </button>

    <!-- Overlay -->
    <div v-if="isOpen" @click="isOpen = false" class="fixed inset-0 bg-black/50 z-40 transition-opacity"></div>

    <!-- Offcanvas Sidebar -->
    <aside :class="[
      'fixed top-0 left-0 w-64 h-full bg-gray-800 shadow-xl z-50 transform transition-transform duration-300',
      isOpen ? 'translate-x-0' : '-translate-x-full'
    ]">
      <!-- Header with Brand Logo -->
      <header class="p-4 flex justify-between items-center border-b h-16">
        <BrandLogo />

        <button @click="closeOffcanvas" class="text-red-600 hover:text-red-400">
          ✖
        </button>
      </header>

      <!-- Navigation List -->
      <nav class="p-4">
        <div @click="closeOffcanvas">
          <MainList />
        </div>
      </nav>
    </aside>
  </div>
</template>
