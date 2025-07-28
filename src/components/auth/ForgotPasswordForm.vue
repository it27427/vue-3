<script setup lang="ts">

</script>

<template>
  <form class="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg flex flex-col gap-4">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">
        Email
      </label>
      <input type="email" id="email" name="email" required
        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    </div>

    <button type="submit" class="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
      Send Code
    </button>
  </form>
</template>