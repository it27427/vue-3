<script setup lang="ts">

</script>

<template>
  <form class="flex flex-col gap-5 shadow p-5 rounded bg-white">
    <div class="flex flex-col gap-3">
      <label for="name">Enter Your Name</label>
      <input type="text" id="name" name="name" class="border border-gray-300 rounded p-2 focus:outline outline-cyan-500"
        placeholder="Enter Full Name" />
    </div>

    <div class="flex flex-col gap-3">
      <label for="email">Enter Your E-mail</label>
      <input type="email" id="email" name="email"
        class="border border-gray-300 rounded p-2 focus:outline outline-cyan-500" placeholder="Enter Email Address" />
    </div>

    <div class="flex flex-col gap-3">
      <label for="phone">Enter Your Phone Number</label>
      <input type="tel" id="phone" name="phone"
        class="border border-gray-300 rounded p-2 focus:outline outline-cyan-500" placeholder="Enter Phone Number" />
    </div>

    <div class="flex flex-col gap-3">
      <label for="subject">Enter Your Subject</label>
      <input type="text" id="subject" name="subject"
        class="border border-gray-300 rounded p-2 focus:outline outline-cyan-500" placeholder="Enter Subject" />
    </div>

    <div class="flex flex-col gap-3 mb-5">
      <label for="message">Enter Your Message</label>
      <textarea id="message" name="message" class="border border-gray-300 rounded p-2 focus:outline outline-cyan-500"
        placeholder="Enter Your Message" rows="5"></textarea>
    </div>

    <button type="submit" class="cursor-pointer py-3 border border-cyan-400 rounded transition-all hover:bg-cyan-400">
      Send Message
    </button>
  </form>
</template>