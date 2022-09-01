<template>
  <v-app>
    <v-main class="top-section text-center">
      <SignUp />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import SignUp from "@/components/SignUp.vue";

export default {
  name: "SignUp",
  components: {
    SignUp,
  },
};
</script>
