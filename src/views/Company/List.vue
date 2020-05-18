<template>
  <div>
    <v-card-title>
      <v-btn color="info" outlined small to="/company/new">
        Add
      </v-btn>
      <v-btn color="success" outlined small class="mx-3" :loading="loading">
        Refresh
      </v-btn>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
    ></v-data-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      search: ""
    };
  },
  computed: {
    ...mapState({
      headers: state => state.company.headers,
      items: state => state.company.items,
      loading: state => state.company.loading
    })
  },
  methods: {
    async getData() {}
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
</style>