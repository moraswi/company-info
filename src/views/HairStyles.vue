<template>
  <v-app>
    <v-main class="top-section text-center">
      <HairStyles />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import HairStyles from "@/components/HairStyles.vue";

export default {
  name: "HomeView",
  components: {
    HairStyles,
  },
};
</script>
