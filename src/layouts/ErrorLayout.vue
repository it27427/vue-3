<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-red-50">
    <h1 class="text-4xl font-bold text-red-600"> Oops! Something went wrong</h1>
    <p class="text-gray-700 mt-2">The page you are looking for does not exist.</p>

    <router-link to="/" class="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
      🔙Go Back Home
    </router-link>

    <slot />
  </div>
</template>
