<template>
  <v-app>
    <v-main class="top-section text-center">
      <NavBar />
      <HomePage />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import HomePage from "@/components/HomePage.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    HomePage,
  },
};
</script>
