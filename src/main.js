import { createApp } from "vue";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import HomePages from "@/components/HomePages.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "HomePages",
      path: "/",
      component: HomePages,
    },
  ],
});
const app = createApp(App);
createApp(App);
app.use(router);
app.mount("#app");