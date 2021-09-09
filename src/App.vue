<template>
  <div id="app">
    <drawer-tab />
    <search-form />
    <content-tab />
  </div>
</template>

<script>
import SearchForm from "./components/SearchForm.vue";
import ContentTab from "./components/ContentTab.vue";
import DrawerTab from "./components/DrawerTab.vue";

export default {
  name: "App",
  components: {
    SearchForm,
    ContentTab,
    DrawerTab,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
