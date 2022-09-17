<template>
  <div class="nav primary">
    <v-container>
      <v-row class="py-4">
        <!-- menu button -->

        <v-btn
          @click.stop="drawer = !drawer"
          icon
          class="hidden-md-and-up mb-5 ml-3 mr-2 mt-1"
          width="18"
        >
          <v-icon color="white"> mdi-menu </v-icon>
        </v-btn>

        <!-- logo -->

        <router-link class="text-decoration-none mt-1" to="/">
          <v-toolbar-side-icon>
            <!-- <v-img
                alt="Logo"
                class="AULLogo"
                src="@/assets/img/home/SoftiDoc.png"
              /> -->
          </v-toolbar-side-icon>
        </router-link>
        <v-spacer></v-spacer>

        <div>
          <v-row class="navB nav-link">
            <!-- Contact Us -->
            <a
              class="nav-link white--text text-decoration-none ma-6 mt-7 hidden-sm-and-down"
              href="/products"
              >Home</a
            >

            <a
              class="nav-link white--text text-decoration-none ma-6 mt-7 hidden-sm-and-down"
              href="/booking"
              >Bookings</a
            >

            <a
              class="nav-link white--text text-decoration-none ma-6 mt-7 hidden-sm-and-down"
              href="#"
              >Employees</a
            >

            <!-- Log In -->

            <!-- <a
              class="white--text nav-link text-decoration-none ma-9 mr-16 mt-7 hidden-sm-and-down"
              href="#"
              >Sign Up</a
            > -->
            <router-link
              class="text-decoration-none white--text mt-8"
              to="signUp"
            >
              <p>Sign Up</p></router-link
            >
            <!--  GET STARTED-->

            <a class="text-decoration-none" href="#getStarted"
              ><v-card
                class="mt-7 ml-2 mr-5 rounded-pill callBackCard"
                outlined
                align="center"
                to=""
              >
                <p class="callMeBackText px-5">Contacts</p>
              </v-card></a
            >
          </v-row>
        </div>
      </v-row>

      <!-- side bar -->
      <v-navigation-drawer
        class="primary sideBar text-justify"
        v-model="drawer"
        absolute
        temporary
      >
        <!-- logo -->

        <!-- <v-img
            class="mt-10 ml-16"
            alt="Logo"
            src="@/assets/img/home/SoftiDoc.png"
            width="100px"
            height="30px"
            contain
          /> -->

        <v-divider class="mt-4 white"></v-divider>

        <v-list nav dense>
          <v-list-item-group class="mt-10" v-model="group">
            <!-- home -->

            <v-list-item class="white--text">
              <v-list-item-title class="white--text">
                <a
                  class="nav-link white--text text-decoration-none ma-6 mt-7 hidden-md-and-up"
                  href="#home"
                  >Location</a
                >
              </v-list-item-title>
            </v-list-item>

            <!-- log in -->

            <v-list-item class="white--text">
              <v-list-item-title class="white--text">
                <a
                  class="nav-link white--text text-decoration-none ma-6 mt-7 hidden-md-and-up"
                  href="#contacts"
                  >Employees</a
                >
              </v-list-item-title>
            </v-list-item>

            <!-- Contact Us -->

            <v-list-item class="white--text">
              <v-list-item-title class="white--text">
                <a
                  class="nav-link white--text text-decoration-none ma-6 mt-7 hidden-md-and-up"
                  href="#contacts"
                  >SignIn</a
                >
              </v-list-item-title>
            </v-list-item>

            <!-- GET STARTED -->

            <v-list-item class="white--text">
              <v-list-item-title>
                <v-btn
                  height=""
                  rounded
                  color="  blue"
                  outlined
                  class="ml-5 mt-3"
                  dark
                >
                  <p class="callMeBack--text white--text mt-4">Contacts</p>
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "NavBarSection",

  data: () => ({
    drawer: false,
    mini: true,
    group: null,
    items: [
      { title: "Home" },
      { title: "About" },
      { title: "Products" },
      { title: "Amendments" },
      { title: "Claims" },
      { title: "CONTACT" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
//
.nav {
  position: fixed;
  justify-content: space-around;
  z-index: 3;
  background-color: primary;
  width: 100%;
  height: auto;
}

.nav-link {
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
}
// a.active {
//   color: #ffa126;
// }
.callMeBackText {
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
  color: #001457;
}
//hover dropbar iteam
.listHover:hover {
  color: #ffa126;
}

.sideBar {
  position: fixed;
}
.imgId {
  height: 33px;
  width: 235px;
}
.callBackCard {
  height: 48px;
  width: 173px;
  padding: 8px;
  gap: 10px;
}
p {
  font-size: 20px;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.1px;
  line-height: 26px;
}
@media screen and (max-width: 1265px) {
  .AULLogo {
    width: 170px;
  }
}
@media screen and (max-width: 1024px) {
  .AULLogo {
    width: 170px;
  }
  p {
    font-size: 15px;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.1px;
    line-height: 26px;
  }
}

@media screen and (max-width: 768px) {
  .AULLogo {
    width: 140px;
  }
}

@media screen and (max-width: 320px) {
  .AULLogo {
    width: 120px;
  }
  .callMeBackText {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #060a23;
  }

  .callBackCard {
    height: 35px;
    width: 126px;
    padding: 3px;
    padding-top: 10px;
    gap: 10px;
  }
}
</style>
