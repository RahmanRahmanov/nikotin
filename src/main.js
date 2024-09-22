import { createApp } from "vue";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import HomePages from "@/components/HomePages.vue";
import KatalogPages from "@/components/KatalogPages.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "HomePages",
      path: "/",
      component: HomePages,
    },
    {
      name: "KatalogPages",
      path: "/katalog",
      component: KatalogPages,
    },
  ],
});
const app = createApp(App);
createApp(App);
app.use(router);
app.mount("#app");