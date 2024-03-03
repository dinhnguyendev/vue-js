import Vue from "vue";
import App from "./App.vue";
import Parent from "./components/Parent.vue";
import Menu from "./components/Menu.vue";
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit("changeAge", age);
    },
  },
});
Vue.component("parent-component", Parent);
Vue.component("menu-component", Menu);
new Vue({
  el: "#app",
  render: (h) => h(App),
});
