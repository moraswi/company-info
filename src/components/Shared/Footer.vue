<template>
  <div class="nav primary white--text text-left">
    <v-container class="py-14">
      <v-row>
        <v-col class="hidden-sm-and-down" cols="12" md="1"></v-col>

        <v-col cols="12" md="3">
          <h3>SERVICES</h3>
          <router-link
            class="text-decoration-none white--text"
            :to="{ name: 'Tab2' }"
          >
            <p class="mt-4">Video</p>
          </router-link>

          <router-link
            class="text-decoration-none white--text py-0"
            :to="{ name: 'Tab1' }"
          >
            <p class="">Photoshot</p>
          </router-link>
        </v-col>

        <v-col cols="12" md="3">
          <h3>CONTACTS</h3>
          <p class="mt-4">email@email.com</p>
        </v-col>

        <v-col cols="12" md="3">
          <h3>Location</h3>
          <p class="mt-4">South Africa, Limpopo, Polokwane</p>
        </v-col>
        <v-col class="hidden-sm-and-down" cols="12" md="1"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import { mapState, mapMutations } from "vuex";
/* eslint-disable */

export default {
  name: "NavBarSection",

  data: () => ({}),
};
</script>

<style lang="scss" scoped></style>
