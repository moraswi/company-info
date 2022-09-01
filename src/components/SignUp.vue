<template>
  <v-container>
    <v-card class="pa-4">
      <form>
        <v-text-field label="First Name" required></v-text-field>
        <v-text-field label="Last Name" required></v-text-field>
        <v-text-field label="E-mail" required></v-text-field>
        <v-text-field label="Password" required></v-text-field>
        <v-text-field label="Confirm Password" required></v-text-field>
        <v-text-field label="Phone Number" required></v-text-field>

        <v-btn class="mr-4"> Register </v-btn>
        <!-- <v-btn @click="clear">
      clear
    </v-btn> -->
      </form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  /* eslint-disable */
  name: "HelloWorld",

  data: () => ({}),
};
</script>

<style lang="scss" scoped>
//
</style>
