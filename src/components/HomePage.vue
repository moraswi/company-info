<template>
  <v-container>
    <v-card class="transparent" flat height="200"></v-card>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md7>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="mdi-account"
                    name="login"
                    label="Login"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="mdi-lock "
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <router-link class="text-decoration-none" to="forgotPaswword">
                <p>forgot password</p></router-link
              >

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn block color="green" to="products">Login</v-btn>
              </v-card-actions>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn block color="primary" to="signUp">SignIn</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: "HomePage",

  data: () => ({}),
};
</script>

<style lang="scss" scoped>
//
</style>
