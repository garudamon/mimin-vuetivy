<template>
  <v-app id="sandbox">
    <v-app-bar :clipped-left="primaryDrawer.clipped" app>
      <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        class="mr-3"
      >
        <v-icon v-if="!$vuetify.theme.dark">mdi-weather-night</v-icon>
        <v-icon v-else>mdi-weather-sunny</v-icon>
      </v-btn>
      <v-menu offset-y min-width="150">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon>
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="() => {}">
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <drawer />

    <v-content>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="8">
            <v-breadcrumbs :items="breadcrumbs" class="px-2 py-0">
              <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
          </v-col>
          <v-col cols="12" md="4">
            <!-- <v-list-item-subtitle class="px-2 py-0 content-title">{{
              title()
            }}</v-list-item-subtitle> -->
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" v-if="!this.$route.meta.selfPanel">
            <v-card>
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <slot />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" v-else>
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer :inset="true" app>
      <v-spacer></v-spacer>
      <span class="px-0"
        >&copy; {{ new Date().getFullYear() }} — <b>Nayla</b></span
      >
    </v-footer>
  </v-app>
</template>

<style lang="scss" scoped>
.content-title {
  text-align: right;
  @media screen and (max-width: 600px) {
    text-align: left;
  }
}
</style>

<script>
import { mapState } from 'vuex';
export default {
  data: () => ({
    right: null,
  }),
  computed: mapState({
    primaryDrawer: (state) => {
      return state.layout.primaryDrawer;
    },
    breadcrumbs: function() {
      return this.$route.meta.breadcrumbs;
    },
  }),
  components: {
    Drawer: () =>
      import(/* webpackChunkName: "app-drawer" */ '@/components/Drawer.vue'),
  },
  methods: {
    title() {
      if (this.$route.name == null) return '';
      return this.$route.name
        .split('-')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(` `);
    },
  },
};
</script>
