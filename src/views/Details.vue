<template>
  <v-app>
    <v-main class="top-section text-center">
      <NavBar />
      <Details />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Details from "@/components/Details.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    Details,
  },
};
</script>
