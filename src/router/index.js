import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/logged",
      component: () => import("../views/Logged.vue"),
    },
  ],
});

export default router;
