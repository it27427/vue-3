<template>
  <nav class="flex items-center justify-between p-4 bg-gray-800">
    <figure class="flex items-center justify-center">
      <router-link to="/">
        <img src="@/assets/vue.svg" alt="Brand Logo" class="h-8 w-8" />
      </router-link>
    </figure>

    <ul class="flex items-center space-x-4">
      <li>
        <router-link
          to="/"
          class="text-gray-50 hover:text-green-200 uppercase transition duration-500 ease-in-out"
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link
          to="/about"
          class="text-gray-50 hover:text-green-200 uppercase transition duration-500 ease-in-out"
        >
          About
        </router-link>
      </li>
      <li>
        <router-link
          to="/blog"
          class="text-gray-50 hover:text-green-200 uppercase transition duration-500 ease-in-out"
        >
          Blog
        </router-link>
      </li>
      <li>
        <router-link
          to="/store"
          class="text-gray-50 hover:text-green-200 uppercase transition duration-500 ease-in-out"
        >
          Store
        </router-link>
      </li>
      <li>
        <router-link
          to="/contact"
          class="text-gray-50 hover:text-green-200 uppercase transition duration-500 ease-in-out"
        >
          Contact
        </router-link>
      </li>
    </ul>
  </nav>
</template>
