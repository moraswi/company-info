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
    path: "/contactUs",
    name: "contactUs",
    component: () => import("@/views/contacts.vue"),
  },

  // {
  //   path: "/forgotPaswword",
  //   name: "forgotPaswword",
  //   component: () => import("@/views/ForgotPassword.vue"),
  // },

  // {
  //   path: "/products",
  //   name: "products",
  //   component: () => import("@/views/Products.vue"),
  // },

  // {
  //   path: "/location",
  //   name: "location",
  //   component: () => import("@/views/shopLocation.vue"),
  // },

  // {
  //   path: "/collection",
  //   name: "collection",
  //   component: () => import("@/views/ProductCollection.vue"),
  // },
  // {
  //   path: "/pay",
  //   name: "pay",
  //   // props: true,
  //   component: () => import("@/views/PayScreen.vue"),
  // },
  // {
  //   path: "/booking",
  //   name: "booking",
  //   component: () => import("@/views/Bookings.vue"),
  // },

  // {
  //   path: "/details",
  //   name: "details",
  //   component: () => import("@/views/Details.vue"),
  // },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
