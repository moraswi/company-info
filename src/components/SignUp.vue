<template>
  <v-container>
    <v-card class="transparent" height="150" flat></v-card>
    <v-card class="pa-4">
      <form>
        <v-text-field
          v-model="formDetails.first_name"
          label="First Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="formDetails.last_name"
          label="Last Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="formDetails.email"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="formDetails.password"
          label="Password"
          required
        ></v-text-field>
        <v-text-field
          v-model="formDetails.confirm_password"
          label="Confirm Password"
          required
        ></v-text-field>
        <v-text-field
          v-model="formDetails.phone_number"
          label="Phone Number"
          required
        ></v-text-field>

        <v-btn @click="registerRequest" class="mr-4"> Register </v-btn>
      </form>
    </v-card>
  </v-container>
</template>

<script>
import Axios from "axios";
export default {
  name: "HelloWorld",

  data: () => ({
    formDetails: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      phone_number: "",
    },
  }),

  methods: {
    registerRequest() {
      Axios.post("https://jsonplaceholder.typicode.com/posts", this.formDetails)
        .then((response) => {
          if (response.status == 201) {
            console.log(response);
            console.log(response.status);
          }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss" scoped></style>
