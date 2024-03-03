<template>
  <div class="">
    <div class="h2">This is Item Layout Page</div>
    <item-component
      v-for="item in items"
      v-bind:data="item"
      v-bind:key="item"
      >{{ item }}</item-component
    >
  </div>
</template>

<script>
import Item from "./Items.vue";
export default {
  props: ["items"],
  components: {
    "item-component": Item,
  },
};
</script>
