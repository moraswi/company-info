import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signUp",
    name: "signUp",

    component: () => import("@/views/SignUp.vue"),
  },

  {
    path: "/forgotPaswword",
    name: "forgotPaswword",
    props: true,
    component: () => import("@/views/ForgotPassword.vue"),
  },

  {
    path: "/products",
    name: "products",
    props: true,
    component: () => import("@/views/Products.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
