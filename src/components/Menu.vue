<template>
  <div class="">
    <div class="">
      <h3>Card Component</h3>
      <button @click="selectedComponent = 'appCard'">Card</button>
      <button @click="selectedComponent = 'appAbout'">About</button>
      <button @click="selectedComponent = 'appContact'">Contact</button>
    </div>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>
<script>
import Card from "./Card.vue";
import About from "./About.vue";
import Contact from "./Contact.vue";
export default {
  props: {},
  components: {
    appCard: Card,
    appAbout: About,
    appContact: Contact,
  },
  data: function () {
    return {
      selectedComponent: "appCard",
    };
  },
};
</script>
