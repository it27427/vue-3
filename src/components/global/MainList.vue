<script setup lang="ts">
const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Blog", to: "/blog" },
  { name: "Store", to: "/store" },
  { name: "Contact", to: "/contact" },
];
</script>

<template>
  <ul class="flex flex-col items-start space-y-4 md:flex-row md:items-center md:space-x-4">
    <li v-for="item in navItems" :key="item.name" class="md:mb-0">
      <router-link :to="item.to"
        class="text-gray-50 hover:text-green-200 uppercase transition duration-500 ease-in-out">
        {{ item.name }}
      </router-link>
    </li>
  </ul>
</template>