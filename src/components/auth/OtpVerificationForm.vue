<script setup lang="ts">

</script>

<template>
  <form class="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg flex flex-col gap-6">
    <div class="flex gap-4 items-center justify-center w-full">
      <input type="number" id="otp1" name="otp1" required
        class="w-16 h-16 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      <input type="number" id="otp2" name="otp2" required
        class="w-16 h-16 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      <input type="number" id="otp3" name="otp3" required
        class="w-16 h-16 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      <input type="number" id="otp4" name="otp4" required
        class="w-16 h-16 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    </div>

    <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
      Verify OTP
    </button>
  </form>
</template>