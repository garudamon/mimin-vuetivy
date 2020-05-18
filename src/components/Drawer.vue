<template>
  <v-navigation-drawer
    v-model="primaryDrawer.model"
    :clipped="primaryDrawer.clipped"
    :floating="primaryDrawer.floating"
    :mini-variant.sync="primaryDrawer.mini"
    :permanent="primaryDrawer.type === 'permanent'"
    :temporary="primaryDrawer.type === 'temporary'"
    color="primary"
    dark
    app
    overflow
  >
    <v-list-item class="px-2 brand">
      <v-list-item-avatar>
        <v-img :src="logo"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>
        {{ title }}
      </v-list-item-title>

      <v-btn icon @click.stop="primaryDrawer.mini = !primaryDrawer.mini">
        <v-icon color="#333">mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense shaped nav>
      <template v-for="(route, idx) in routes">
        <template v-if="!!route.childs">
          <v-divider :key="`${idx}-${route.name}-divider`" />
          <v-subheader
            class="mt-4 white--text text--darken-1"
            :key="`${idx}-${route.name}`"
          >
            <v-icon small>{{ route.icon }}</v-icon>
            <span class="pl-2" v-if="!primaryDrawer.mini">{{
              route.name.toUpperCase()
            }}</span>
            <v-icon x-small v-else>mdi-chevron-down</v-icon>
          </v-subheader>
          <v-list-item
            v-for="item in route.childs"
            :key="`${item.name}-${route.name}`"
            :to="item.path"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.name" />
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="`${idx}-${route.name}-divider2`" />
        </template>

        <v-list-item :key="idx" :to="route.path" v-else>
          <v-list-item-icon v-if="!!route.icon">
            <v-icon>{{ route.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="route.name" />
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>

    <template v-slot:append>
      <div :class="{ 'pa-2': !primaryDrawer.mini, 'px-2': primaryDrawer.mini }">
        <v-btn @click="logout" block v-if="!primaryDrawer.mini">
          Logout
        </v-btn>
        <v-btn @click="logout" icon v-else>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.brand {
  background-color: white;
  color: #333;
  .v-list-item__title {
    color: #333;
  }
}
</style>

<script>
import { mapState } from "vuex";
import logo from "@/assets/logo.png";
export default {
  data: () => ({
    logo,
    title: "Vuetify Lay..."
  }),
  computed: mapState({
    routes: state => state.layout.routes,
    primaryDrawer: state => state.layout.primaryDrawer
  }),
  methods: {
    async logout() {
      await localStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>
