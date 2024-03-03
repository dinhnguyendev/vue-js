<template>
  <div class="">
    <h2>Parent Component</h2>
    <p>{{ callBack }}</p>
    <input type="text" v-model="name" />
    <children-component
      :customizeName="name"
      @nameWasReset="name = $event"
      :handleResetCallback="handleReset"
      :age="age"
    ></children-component>
    <p>parent Age : {{ age }}</p>
    <age-component :age="age" @changeAge="age = $event">
      <p slot="title">Slot Age add in title</p>
      <p slot="content">Slot Age add in content</p>
    </age-component>
  </div>
</template>

<script>
import Children from "./Children.vue";
import Age from "./Age.vue";
export default {
  created() {},
  watch: {},
  data: function () {
    return {
      name: "hello world",
      callBack: "hello Call back !!!",
      age: 10,
    };
  },
  components: {
    "children-component": Children,
    "age-component": Age,
  },
  methods: {
    handleReset() {
      console.log("change call back");
      this.callBack = " change value ";
    },
  },
};
</script>
