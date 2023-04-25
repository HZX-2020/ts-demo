import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw, // 内置的类型接口
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/index",
    component: () => import("@/views/index/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/components/layout/index.vue"),
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "/order",
        name: "order",
        component: () => import("@/views/order/index.vue"),
      },
      {
        path: "/census",
        name: "census",
        component: () => import("@/views/census/index.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
