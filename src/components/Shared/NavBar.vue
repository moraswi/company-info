<template>
  <div class="nav">
    <v-card class="red py-2" height="60" width="100%" flat tile>
      <v-container class="py-2 text-left paragraph-p1 white--text">
        <v-icon class="mb-1" medium color="white"> mdi-clock-outline </v-icon>

        <label class="paragraph-p1">
          Hours : Mon - Fri - 07:30am - 16:30pm
        </label>
        <!-- <v-icon class="ml-5" medium color="orange"> mdi-phone </v-icon>
          <label> 0123456789 </label> -->
      </v-container>
    </v-card>
    <v-card class="py-5">
      <v-container>
        <v-row class="white--text">
          <v-btn
            @click.stop="drawer = !drawer"
            icon
            class="hidden-md-and-up mb-5 ml-3 mr-4 mt-2"
            width="18"
            color="black"
          >
            <v-icon> mdi-menu </v-icon>
          </v-btn>

          <!-- <a class="nav-link text-decoration-none mt-1" href="/"> -->
          <router-link
            class="nav-link text-decoration-none mt-1"
            :to="{ name: 'home' }"
          >
            <!-- <v-img
              alt="Logo"
              class="kmLogo"
              src="@/assets/images/SoftiDoc.png"
            /> -->
          </router-link>
          <!-- </a> -->

          <v-spacer></v-spacer>

          <div>
            <v-row class="navB nav-link black--text">
              <!-- About us -->

              <router-link
                class="nav-link text-decoration-none hidden-sm-and-down mx-4"
                :to="{ name: 'home' }"
              >
                <p class="mt-7 hidden-sm-and-down">Home</p>
              </router-link>

              <router-link
                class="nav-link text-decoration-none hidden-sm-and-down mx-4"
                :to="{ name: 'home' }"
              >
                <p class="mt-7 hidden-sm-and-down">About Us</p>
              </router-link>

              <router-link
                class="nav-link text-decoration-none hidden-sm-and-down mr-4"
                :to="{ name: 'home' }"
              >
                <p class="mt-7 hidden-sm-and-down"></p>
              </router-link>

              <v-btn
                color="orange"
                depressed
                rounded
                class="mt-5 mr-5 white--text"
                :to="{ name: 'contactUs' }"
              >
                Contact Us <v-icon right dark> mdi-login </v-icon>
              </v-btn>

              <!-- <router-link
                  class="nav-link text-decoration-none hidden-sm-and-down mx-6"
                  :to="{ name: 'contact-us' }"
                >
                  <p class="mt-7 hidden-sm-and-down">Buy-Credit</p>
                </router-link> -->

              <!-- :to="{ name: 'LogIn' }" -->
            </v-row>
          </div>
        </v-row>
      </v-container>
    </v-card>
    <!-- side bar -->

    <v-container>
      <v-navigation-drawer
        class="primary sideBar text-justify"
        v-model="drawer"
        absolute
        temporary
      >
        <v-divider class="mt-5 white"></v-divider>

        <v-list nav dense>
          <v-list-item class="d-flex justify-end my-0">
            <v-icon @click="drawer = !drawer" color="white"
              >mdi-close-thick</v-icon
            >
          </v-list-item>
          <v-list-item-group class="mt-4 white--text" v-model="group">
            <v-list-item class="white--text">
              <v-list-item-title class="">
                <!-- <a
                    class="nav-link white--text text-decoration-none mt-7 hidden-md-and-up"
                    href="#"
                    >Home</a
                  > -->
                <router-link
                  class="text-decoration-none hidden-md-and-up white--text"
                  :to="{ name: 'home' }"
                >
                  <p class="mt-7">Home</p>
                </router-link>
              </v-list-item-title>
            </v-list-item>

            <v-list-item class="white--text">
              <v-list-item-title class="white--text">
                <router-link
                  class="nav-link text-decoration-none hidden-md-and-up"
                  :to="{ name: 'home' }"
                >
                  <p class="mt-3 hidden-md-and-up white--text">About Us</p>
                </router-link>
              </v-list-item-title>
            </v-list-item>

            <v-list-item class="white--text">
              <v-list-item-title class="white--text">
                <router-link
                  class="text-decoration-none hidden-md-and-up"
                  :to="{ name: 'home' }"
                >
                  <p class="mt-3 hidden-md-and-up white--text">Contact Us</p>
                </router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-container>
  </div>
</template>

<script>
// import { mapMutations, mapState } from "vuex";

export default {
  name: "NavBarSection",

  data: () => ({
    drawer: false,
    mini: true,

    // about: false,
    // team: false,
    // journey: false,
    // contacts: false,

    group: null,
    items: [
      { title: "About" },
      { title: "Team" },
      { title: "Client Journey" },
      { title: "Contact Us" },
    ],
  }),

  // computed: {
  //   ...mapState({ auth: "auth" }),
  // },

  // methods: {
  //   clicked() {
  //     this.about == true;
  //     this.team = false;
  //     this.journey = false;
  //     this.contacts = false;
  //   },

  //   ...mapMutations({
  //     setUser: "auth/setUser",
  //     resetAuthState: "auth/resetState",
  //   }),

  //   logOut() {
  //     this.resetAuthState();

  //     this.$router.push("/login");
  //   },
  // },
};
</script>

<style lang="scss" scoped>
@import "@/components/Shared/NavBar.scss";
</style>
