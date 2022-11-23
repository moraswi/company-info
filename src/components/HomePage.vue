<template>
  <div>
    <v-card class="red white--text pb-3 text-left redCardTop" flat>
      <v-container>
        <h1 class="mt-10">Photoshot</h1>
      </v-container>
    </v-card>

    <v-container>
      <v-row class="text-left my-16">
        <v-col cols="12" md="6">
          <h1>Doraemon is the name of a robot</h1>
          <p>
            Doraemon is the name of a robot cat that came from the future to
            help a boy named Nobita Nobi. Doraemon is about the life of Nobita
            Nobi. In a typical story Doramon uses a gadget to solve a problem
            for Nobita, but Nobita goes too far and ends up being punished and
            learning a lesson. Doraemon
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-card class="py-16 text-left" height="200">
      <!-- <v-img
        alt="Logo"
        class="kmLogo"
        contain
        width="100%"
        height="100"
        src="@/assets/img/jakob-owens-DQPP9rVLYGQ-unsplash.jpg"
      /> -->
    </v-card>

    <v-container class="mt-16">
      <v-row>
        <v-col cols="4">
          <v-card>
            <v-img
              alt="Logo"
              class="kmLogo"
              contain
              width="100%"
              src="@/assets/logo.png"
            />
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card>
            <v-img
              alt="Logo"
              class="kmLogo"
              contain
              width="100%"
              src="@/assets/logo.png"
            />
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card>
            <v-img
              alt="Logo"
              class="kmLogo"
              contain
              width="100%"
              src="@/assets/logo.png"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <h1 class="mt-10">About Us</h1>

      <v-row>
        <v-col cols="12" md="">
          <p>
            Doraemon is the name of a robot cat that came from the future to
            help a boy named Nobita Nobi. Doraemon is about the life of Nobita
            Nobi. In a typical story Doramon uses a gadget to solve a problem
            for Nobita, but Nobita goes too far and ends up being punished and
            learning a lesson. Doraemon
          </p>

          <p class="mt-10">
            Doraemon is the name of a robot cat that came from the future to
            help a boy named Nobita Nobi. Doraemon is about the life of Nobita
            Nobi. In a typical story Doramon uses a gadget to solve a problem
            for Nobita, but Nobita goes too far and ends up being punished and
            learning a lesson. Doraemon
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  data: () => ({}),
};
</script>

<style lang="scss" scoped>
//

@import "@/components/HomePage.scss";
</style>
