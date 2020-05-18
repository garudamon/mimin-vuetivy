<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="12" class="d-flex justify-center">
          <v-img :src="logo" :max-width="100" />
        </v-col>
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Login"
                  name="login"
                  prepend-icon="mdi-account"
                  type="text"
                  browser-autocomplete="new-password"
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  browser-autocomplete="new-password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions class="px-5 pb-5">
              <router-link to="/forgot-password">Forgot Password?</router-link>
              <v-spacer></v-spacer>
              <v-btn color="primary" :loading="loading" @click="login"
                >Login</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import logo from "@/assets/logo.png";
export default {
  data() {
    return {
      logo,
      loading: false
    };
  },
  methods: {
    simulateLogin() {
      return new Promise(resolve => {
        setTimeout(resolve, 1200);
      });
    },
    async login() {
      this.loading = true;
      await this.simulateLogin();
      this.loading = false;
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>