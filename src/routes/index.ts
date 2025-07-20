import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";

import Store from "@/views/Store.vue";

import NotFound from "@/views/NotFound.vue";

const routes = [
  { path: "/", name: "Home", component: Home },

  { path: "/about", name: "About", component: About },

  { path: "/contact", name: "Contact", component: Contact },

  { path: "/store", name: "Store", component: Store },

  // Catch-all route for 404 Not Found
  { path: "/*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(), // import.meta.env.BASE_URL

  routes,
});

export default router;
