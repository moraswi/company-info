<template>
  <v-app>
    <v-main class="top-section text-center">
      <NavBar />
      <ForgotPassword />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import ForgotPassword from "@/components/ForgotPassword.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    ForgotPassword,
  },
};
</script>
