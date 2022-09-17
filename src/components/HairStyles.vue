<template>
  <v-container class="">
    <v-card class="transparent" height="160" flat tile></v-card>
    <v-card class="transparent" align="center" flat tile>
      <v-card to="/location" class="mt-10" width="50%" height="130px">
        <h1>Product Name</h1>
        <h2>Price: R120</h2>
      </v-card>

      <v-card class="mt-10" width="50%" height="130px">
        <h1>Product Name</h1>
        <h2>Price: R120</h2>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "HairStyles",
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
//
</style>
