<template>
  <div class="">
    <h2>Children component</h2>
    <p>Children Age: {{ age }}</p>
    <div class="">Data Form Component Parent: {{ customizeName }}</div>
    <button @click="handleResetName()">handle Reset data</button>
    <button @click="handleResetCallback()">Change Value of parent</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  props: {
    customizeName: {
      type: String,
      required: true,
    },
    age: Number,
    handleResetCallback: Function,
  },
  data: function () {
    return {};
  },
  methods: {
    handleResetName: function () {
      this.customizeName = "name is reset !!!";
      this.$emit("nameWasReset", this.customizeName);
    },
  },
  created() {
    eventBus.$on("changeAge", (age) => {
      this.age = age;
    });
  },
};
</script>
