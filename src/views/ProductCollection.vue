<template>
  <v-app>
    <v-main class="top-section text-center">
      <NavBar />
      <collection />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import collection from "@/components/ProductCollection.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    collection,
  },
};
</script>
