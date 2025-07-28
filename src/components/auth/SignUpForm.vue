<script setup lang="ts">

</script>

<template>
  <form class="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg flex flex-col gap-4">
    <div>
      <label for="username" class="block text-sm font-medium text-gray-700">
        Full Name <span class="text-red-500">*</span>
      </label>
      <input type="text" id="username" name="username" required
        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">
        Email <span class="text-red-500">*</span>
      </label>
      <input type="email" id="email" name="email" required
        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    </div>

    <div>
      <label for="phoneNumber" class="block text-sm font-medium text-gray-700">
        Phone Number <span class="text-red-500">*</span>
      </label>
      <input type="tel" id="phoneNumber" name="phoneNumber" required
        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    </div>

    <div>
      <label for="password" class="block text-sm font-medium text-gray-700">
        Password <span class="text-red-500">*</span>
      </label>
      <input type="password" id="password" name="password" required
        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    </div>

    <div>
      <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
        Confirm Password <span class="text-red-500">*</span>
      </label>
      <input type="password" id="confirmPassword" name="confirmPassword" required
        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    </div>

    <button type="submit" class="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
      Sign Up
    </button>
  </form>
</template>