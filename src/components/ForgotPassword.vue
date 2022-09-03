<template>
  <div>
    <v-container>
      <v-card class="mx-auto pa-2" max-width="544">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>
        <v-text-field class="mt-3" label="Email" required></v-text-field>

        <v-btn block color="success" class="mr-4" @click="create">
          Submit
        </v-btn>
      </v-card>

      <!-- <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

    <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn> -->
    </v-container>
  </div>
</template>

<script>
// import Axios from "axios";

export default {
  name: "HelloWorld",

  data: () => ({
    // FormData: {
    //   userid: "",
    //   title: "",
    //   body: "",
    // },
  }),

  // methods: {
  //   create() {
  //     Axios.post("https://jsonplaceholder.typicode.com/posts", this.FormData)
  //       .then((response) => console.log(response))
  //       .catch((error) => console.log(error));
  //   },
  // },
};
</script>

<style lang="scss" scoped>
//
</style>
