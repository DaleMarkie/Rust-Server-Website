import { createRouter, createWebHistory } from "vue-router";

const routes = [{ path: "/" }, { path: "/events" }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
