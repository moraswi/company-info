<template>
  <v-app>
    <v-main class="top-section text-center">
      <NavBar />
      <Bookings />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Bookings from "@/components/Bookings.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    Bookings,
  },
};
</script>
