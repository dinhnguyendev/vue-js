<template>
  <div id="app">
    <h2>Hello Vue js</h2>

    <!-- <menu-component></menu-component> -->
    <item-layout-component :items="items"></item-layout-component>
  </div>
</template>

<script>
import ItemLayout from "./components/ItemLayout.vue";
export default {
  watch: {},
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      items: ["i love you", "i miss you"],
    };
  },
  components: {
    "item-layout-component": ItemLayout,
  },
};
</script>

<style></style>
