<template>
  <div id="app">
    <background-tab/>
    <drawer-tab />
    <search-form />
    <content-tab />
  </div>
</template>

<script>
import SearchForm from "./components/SearchForm.vue";
import ContentTab from "./components/ContentTab.vue";
import DrawerTab from "./components/DrawerTab.vue";
import BackgroundTab from "./components/BackgroundTab.vue";

export default {
  name: "App",
  components: {
    SearchForm,
    ContentTab,
    DrawerTab,
    BackgroundTab,
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
  /* margin-top: 60px; */
}
</style>
