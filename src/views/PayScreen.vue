<template>
  <v-app>
    <v-main class="top-section text-center">
      <NavBar />
      <PayScreen />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import PayScreen from "@/components/PayScreen.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    PayScreen,
  },
};
</script>
