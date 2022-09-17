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
    // props: true,
    component: () => import("@/views/ForgotPassword.vue"),
  },

  {
    path: "/products",
    name: "products",
    // props: true,
    component: () => import("@/views/Products.vue"),
  },

  {
    path: "/location",
    name: "location",
    // props: true,
    component: () => import("@/views/shopLocation.vue"),
  },

  {
    path: "/collection",
    name: "collection",
    // props: true,
    component: () => import("@/views/ProductCollection.vue"),
  },
  {
    path: "/pay",
    name: "pay",
    // props: true,
    component: () => import("@/views/PayScreen.vue"),
  },
  {
    path: "/booking",
    name: "booking",
    // props: true,
    component: () => import("@/views/Bookings.vue"),
  },

  {
    path: "/details",
    name: "details",
    // props: true,
    component: () => import("@/views/Details.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
