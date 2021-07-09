import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Add from "../views/Add.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "Add",
    component: Add,
  },
  {
    path: "/setting",
    name: "Setting",
    component: () =>
      import(/* webpackChunkName: "setting" */ "../views/Setting.vue"),
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: () => import("../views/Detail.vue"),
  },
  {
    // ワイルドカード
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
