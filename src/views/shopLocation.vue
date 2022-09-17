<template>
  <v-app>
    <v-main class="top-section text-center">
      <NavBar />
      <shopLoaction />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import shopLoaction from "@/components/shopLocation.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    shopLoaction,
  },
};
</script>
