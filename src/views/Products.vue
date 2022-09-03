<template>
  <v-app>
    <v-main class="top-section text-center">
      <NavBar />
      <HairStyles />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import HairStyles from "@/components/HairStyles.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    HairStyles,
  },
};
</script>
