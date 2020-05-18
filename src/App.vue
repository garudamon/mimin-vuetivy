<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<style lang="scss">
#app {
  height: 100vh;
}
</style>

<script>
const dashboard = "dashboard";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || dashboard) + "_layout";
    }
  }
};
</script>