<template>
  <v-container align="center">
    <v-card class="transparent" height="100" flat tile></v-card>
    <v-card class="transparent" align="center" flat tile>
      <v-card to="/collection" class="mt-10 pa-5" width="50%">
        <h1>Lekgothoane Sayone</h1>
        <p>click below to pay</p>
        <v-btn to="" class="mt-6 light-green" rounded width="380"> pay</v-btn>
        <v-btn to="/products" class="mt-6 red" rounded width="380">
          calcel</v-btn
        >
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  //   name: "HairStyles",
  data: () => ({}),
};
</script>

<style></style>
