import { createRouter, createWebHistory } from "vue-router";

// import your components
import Login from "../components/Login.vue";
import App from "../App.vue"; // your main page

const routes = [
  {
    path: "/",
    component: App,
  },
  {
    path: "/events",
    component: App,
  },
  {
    path: "/login",
    component: Login, // ✅ THIS MAKES LOGIN WORK
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
