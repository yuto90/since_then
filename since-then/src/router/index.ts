import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/setting",
    name: "Setting",
    component: () =>
      import(/* webpackChunkName: "setting" */ "../views/Setting.vue"),
  },
  {
    // ワイルドカード
    path: "/:pathMatch(.*)*",
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
