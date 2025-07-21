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
  <nav class="flex items-center justify-between p-4 bg-gray-800 shadow">
    <figure class="flex items-center justify-center">
      <router-link to="/">
        <img src="@/assets/vue.svg" alt="Brand Logo" class="h-8 w-8" />
      </router-link>
    </figure>

    <ul class="flex items-center space-x-4">
      <li v-for="item in navItems" :key="item.name">
        <router-link :to="item.to"
          class="text-gray-50 hover:text-green-200 uppercase transition duration-500 ease-in-out">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
