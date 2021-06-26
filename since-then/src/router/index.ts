import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Add from "../views/add/Add.vue";
import AddFirst from "../views/add/AddFirst.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add/first",
    component: Add,
    children: [
      {
        path: "/add/first",
        name: "first",
        component: AddFirst,
      },
      {
        path: "/add/second",
        name: "second",
        component: () =>
          import(
            /* webpackChunkName: "add" */ "../views/add/AddSecond.vue"
          ),
      },
    ],
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
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
