import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),//import.meta.env.BASE_URL   '/test/'
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchView.vue"),
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("../views/DetailView.vue"),
    },
    {
      path: "/video",
      name: "video",
      component: () => import("../views/VideoView.vue"),
    },
    {
      path: "/:error*",
      name: "notFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
