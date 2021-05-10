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
    class="pt-10"
  >
    <v-app-bar absolute color="white" elevate-on-scroll class="px-0 app-drawer">
      <v-list-item class="px-0 brand">
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
    </v-app-bar>

    <v-divider></v-divider>

    <v-list dense shaped nav class="mt-5">
      <template v-for="(route, idx) in routes">
        <template v-if="!!route.childs">
          <v-list-group
            :key="`${idx}-${route.name}`"
            :prepend-icon="route.icon"
            active-class="white--text"
          >
            <template v-slot:activator>
              <v-list-item-title>{{
                route.name.toUpperCase()
              }}</v-list-item-title>
            </template>
            <v-list-item
              v-for="item in route.childs"
              :key="`${item.name}-${route.name}`"
              :to="item.path"
              class="pl-10"
            >
              <v-list-item-icon class="mr-3">
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.name" />
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
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
.app-drawer {
  .v-toolbar__content {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .brand {
    background-color: white;
    color: #333;
    .v-list-item__title {
      color: #333;
    }
  }
}
.v-list-group--active {
  background-color: rgba($color: #000000, $alpha: 0.4);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.v-list-item__icon {
  &:first-child {
    margin-right: 10px !important;
  }
}
</style>
<style lang="scss">
.app-drawer {
  .v-toolbar__content {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }
}
.v-list-group__header__prepend-icon {
  &:first-child {
    margin-right: 10px !important;
  }
}
</style>

<script>
import { mapState } from 'vuex';
import logo from '@/assets/logo.png';
export default {
  data: () => ({
    logo,
    title: 'Vuetify Lay...',
  }),
  computed: mapState({
    routes: (state) => state.layout.routes,
    primaryDrawer: (state) => state.layout.primaryDrawer,
  }),
  methods: {
    async logout() {
      await localStorage.clear();
      this.$router.push('/login');
    },
  },
};
</script>
