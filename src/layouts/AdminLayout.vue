<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-800 text-white p-6 space-y-4">
      <h2 class="text-xl font-bold">📊 Dashboard</h2>
      <nav class="space-y-2">
        <router-link to="/dashboard" class="block hover:bg-gray-700 p-2 rounded">Overview</router-link>
        <router-link to="/dashboard/settings" class="block hover:bg-gray-700 p-2 rounded">Settings</router-link>
      </nav>
    </aside>

    <!-- Main Dashboard Content -->
    <div class="flex-1 p-6">
      <slot />
    </div>
  </div>
</template>
