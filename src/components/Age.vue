<template>
  <div class="">
    <h2>Age Component</h2>
    <div class="">
      <p>{{ age }}</p>
      <button @click="handleChangeAge()">Change Age</button>
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
import { eventBus } from "../main.js";
export default {
  props: {},
  props: ["age"],
  methods: {
    handleChangeAge() {
      this.age = 1000;
      //   this.$emit("changeAge", this.age);
      eventBus.changeAge(this.age);
    },
  },
};
</script>
