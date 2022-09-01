<template>
  <v-app>
    <v-main class="top-section text-center">
      <ForgotPassword />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import ForgotPassword from "@/components/ForgotPassword.vue";

export default {
  name: "ForgotPassword",
  components: {
    ForgotPassword,
  },
};
</script>
