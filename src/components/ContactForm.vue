<script setup lang="ts">

</script>

<template>
  <form class="flex flex-col gap-5">
    <div class="flex flex-col gap-3">
      <label for="name">Enter Your Name</label>
      <input type="text" id="name" name="name" class="border border-gray-300 rounded p-2"
        placeholder="Enter Full Name" />
    </div>

    <div class="flex flex-col gap-3">
      <label for="email">Enter Your E-mail</label>
      <input type="email" id="email" name="email" class="border border-gray-300 rounded p-2"
        placeholder="Enter Email Address" />
    </div>

    <div class="flex flex-col gap-3">
      <label for="phone">Enter Your Phone Number</label>
      <input type="tel" id="phone" name="phone" class="border border-gray-300 rounded p-2"
        placeholder="Enter Phone Number" />
    </div>

    <div class="flex flex-col gap-3">
      <label for="subject">Enter Your Subject</label>
      <input type="text" id="subject" name="subject" class="border border-gray-300 rounded p-2"
        placeholder="Enter Subject" />
    </div>

    <div class="flex flex-col gap-3">
      <label for="message">Enter Your Message</label>
      <textarea id="message" name="message" class="border border-gray-300 rounded p-2" placeholder="Enter Your Message"
        rows="5"></textarea>
    </div>

    <button type="submit" class="border-t-cyan-400 transition-all focus:border-t-cyan-400 hover:bg-cyan-400">
      Send Message
    </button>
  </form>
</template>