<template>
  <v-container align="center">
    <v-card class="transparent" height="100" flat tile></v-card>
    <v-card class="transparent" align="center" flat tile>
      <v-card to="/collection" class="mt-10 pa-5" width="50%">
        <h1>Food Lovers</h1>
        <p>below are your order details</p>
        <h3>Product: School Bag</h3>
        <h3>waiter: Lekgothoane Sayone</h3>

        <h3>location: Gauteng</h3>
        <h3>Collection Time: 18:00</h3>
        <v-btn to="/pay" class="mt-6 light-green" rounded width="380">
          procced</v-btn
        >
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
/* eslint-disable */
export default {
  name: "details",
  data: () => ({}),
};
</script>

<style></style>
