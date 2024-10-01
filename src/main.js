import { createApp } from "vue";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import HomePages from "@/components/HomePages.vue";
import KatalogPages from "@/components/KatalogPages.vue";
import ContactsPages from "@/components/ContactsPages.vue";
import DeliveryPages from "@/components/DeliveryPages.vue";
import NewsPages from "@/components/NewsPages.vue";
import ArticlePages from "@/components/ArticlePages.vue";
import GoodsPages from "@/components/GoodsPages.vue";
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
    {
      name: "ContactsPages",
      path: "/contacts",
      component: ContactsPages,
    },
   { 
    name: "DeliveryPages",
    path: "/delivery",
    component: DeliveryPages,
   },
   { 
    name: "NewsPages",
    path: "/news",
    component: NewsPages,
   },   
   { 
    name: "ArticlePages",
    path: "/article",
    component: ArticlePages,
   },
   { 
    name: "GoodsPages",
    path: "/goods",
    component: GoodsPages,
   }
  ],
});
const app = createApp(App);
createApp(App);
app.use(router);
app.mount("#app");