<template>
  <div class="nav primary white--text text-left">
    <v-container class="py-14">
      <v-row>
        <v-col cols="12" md="2">
          <h3>Softidoc Verify ID</h3>

          <router-link
            class="text-decoration-none white--text"
            :to="{ name: 'about-us' }"
          >
            <p class="mt-4">About Us</p>
          </router-link>

          <router-link
            class="text-decoration-none white--text red"
            :to="{ name: 'contact-us' }"
          >
            <p class="">Contact Us</p>
          </router-link>
        </v-col>

        <v-col cols="12" md="2">
          <h3>SERVICES</h3>
          <router-link
            class="text-decoration-none white--text"
            :to="{ name: 'Tab2' }"
          >
            <p class="mt-4">SMS ID Verification</p>
          </router-link>

          <router-link
            class="text-decoration-none white--text py-0"
            :to="{ name: 'Tab1' }"
          >
            <p class="">ID Verification</p>
          </router-link>

          <router-link
            class="text-decoration-none white--text"
            :to="{ name: 'Tab1' }"
          >
            <p class="">BioMetric ID Verification</p>
          </router-link>

          <router-link
            class="text-decoration-none white--text"
            :to="{ name: 'Tab4' }"
          >
            <p class="">Commercial Risk</p>
          </router-link>
        </v-col>

        <v-col cols="12" md="2">
          <h3>CONTACTS</h3>
          <p class="mt-4">info@softidoc.co.za</p>
        </v-col>

        <v-col cols="12" md="2">
          <h3>Location SA</h3>
          <p class="mt-4">South Africa, Limpopo, Polokwane</p>
        </v-col>
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
