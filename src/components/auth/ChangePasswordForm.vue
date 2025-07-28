<script setup lang="ts">

</script>

<template>
  <form class="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg flex flex-col gap-4">
    <div>
      <label for="password" class="block text-sm font-medium text-gray-700">
        New Password <span class="text-red-500">*</span>
      </label>
      <input type="password" id="newPassword" name="newPassword" required
        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    </div>

    <div>
      <label for="confirmNewPassword" class="block text-sm font-medium text-gray-700">
        Confirm New Password <span class="text-red-500">*</span>
      </label>
      <input type="password" id="confirmNewPassword" name="confirmNewPassword" required
        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    </div>
  </form>
</template>