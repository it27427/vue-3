import { createRouter, createWebHistory } from "vue-router";

// Import Layouts
import RootLayout from "@/layouts/RootLayout.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import ErrorLayout from "@/layouts/ErrorLayout.vue";

// Import Root Views
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Blog from "@/views/Blog.vue";
import Contact from "@/views/Contact.vue";
import Store from "@/views/Store.vue";

// Import Admin Views
import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";

// Import Error Views
import NotFound from "@/views/NotFound.vue";

const routes = [
  // Catch-all route for Root Layout
  {
    path: "/",
    component: RootLayout,
    children: [{ path: "", name: "Home", component: Home }],
  },
  {
    path: "/about",
    component: RootLayout,
    children: [{ path: "", name: "About", component: About }],
  },
  {
    path: "/blog",
    component: RootLayout,
    children: [{ path: "", name: "Blog", component: Blog }],
  },
  {
    path: "/contact",
    component: RootLayout,
    children: [{ path: "", name: "Contact", component: Contact }],
  },
  {
    path: "/store",
    component: RootLayout,
    children: [{ path: "", name: "Store", component: Store }],
  },

  // Catch-all route for Admin Dashboard
  {
    path: "/dashboard",
    component: AdminLayout,
    children: [{ path: "", name: "Dashboard", component: Dashboard }],
  },
  {
    path: "/settings",
    component: AdminLayout,
    children: [{ path: "", name: "Settings", component: Settings }],
  },

  // Catch-all route for 404 Not Found
  {
    path: "/:pathMatch(.*)*",
    component: ErrorLayout,
    children: [{ path: "", name: "NotFound", component: NotFound }],
  },
];

const router = createRouter({
  history: createWebHistory(), // import.meta.env.BASE_URL

  routes,
});

export default router;
