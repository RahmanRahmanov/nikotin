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
import TestPages from "@/components/TestPages.vue";
import GoodsPagesgrape from "@/components/GoodsPagesgrape.vue";
import GoodsPageslush from "@/components/GoodsPageslush.vue";
import GoodsPageskiwi from "@/components/GoodsPageskiwi.vue";
import GoodsPagescola from "@/components/GoodsPagescola.vue";
import GoodsPagescherry from "@/components/GoodsPagescherry.vue";
import GoodsPagesenergy from "@/components/GoodsPagesenergy.vue";
import GoodsPagesraspberry from "@/components/GoodsPagesraspberry.vue";
import GoodsPagesmixed from "@/components/GoodsPagesmixed.vue";
import GoodsPagesblackcurrant from "@/components/GoodsPagesblackcurrant.vue";
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
    },
    {
      name: "GoodsPagesgrape",
      path: "/goodsgrape",
      component: GoodsPagesgrape,
    },
    {
      name: "GoodsPagescola",
      path: "/goodscola",
      component: GoodsPagescola,
    },
    {
      name: "GoodsPagescherry",
      path: "/goodscherry",
      component: GoodsPagescherry,
    },
    {
      name: "GoodsPageslush",
      path: "/goodslush",
      component: GoodsPageslush,
    },
    {
      name: "GoodsPageskiwi",
      path: "/goodskiwi",
      component: GoodsPageskiwi,
    },
    {
      name: "GoodsPagesenergy",
      path: "/goodsenergy",
      component: GoodsPagesenergy,
    },
    {
      name: "GoodsPagesraspberry",
      path: "/goodsraspberry",
      component: GoodsPagesraspberry,
    },
    {
      name: "GoodsPagesmixed",
      path: "/goodsmixed",
      component: GoodsPagesmixed,
    },
    {
      name: "GoodsPagesblackcurrant",
      path: "/goodsblackcurrant",
      component: GoodsPagesblackcurrant,
    },
    {
      name: "TestPages",
      path: "/test",
      component: TestPages,
    },
  ],
});
const app = createApp(App);
createApp(App);
app.use(router);
app.mount("#app");
