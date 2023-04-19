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
    path: "/home",
    name: "home",
    component: () => import("@/components/layout/index.vue"),
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
