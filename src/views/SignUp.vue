<template>
  <v-app>
    <v-main class="top-section text-center">
      <NavBar />
      <SignUp />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import SignUp from "@/components/SignUp.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    SignUp,
  },
};
</script>
