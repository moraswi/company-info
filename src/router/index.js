import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

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

    component: () => import("@/views/Employee.vue"),
  },

  {
    path: "/forgotPaswword",
    name: "forgotPaswword",
    props: true,
    component: () => import("@/views/Form.vue"),
  },

  {
    path: "/hairstyles",
    name: "hairstyles",
    props: true,
    component: () => import("@/views/HairStyles.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
