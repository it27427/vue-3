import { createApp } from "vue";
import "@/assets/tailwind.css";
import "@/assets/style.scss";
import App from "@/App.vue";
import router from "@/routes/index.ts";

createApp(App).use(router).mount("#app");
