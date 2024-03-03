<template>
  <h3>This is page Contact</h3>
</template>
<script>
export default {
  destroyed() {
    console.log("contact destroy");
  },
  activated() {
    console.log("contact activated");
  },
  deactivated() {
    console.log("contact deactivated");
  },
  created() {
    console.log("contact created");
  },
  beforeCreated() {
    console.log("contact before created");
  },
  onMounted() {
    console.log("contact on mounted");
  },
};
</script>
