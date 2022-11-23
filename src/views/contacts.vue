<template>
  <v-app>
    <v-main class="top-section text-center">
      <NavBar />
      <Contact />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src

import NavBar from "@/components/Shared/NavBar.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Shared/Footer.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    Contact,
    Footer,
  },
};
</script>
