<template>
  <v-app>
    <v-btn>update</v-btn>
    <p>Value : {{ firstname }}</p>
  </v-app>
</template>
<script>
export default {
  props: {
    firstname: {
      type: String,
      required: true,
    },
  },
  model: {
    props: 'firstname',
    event: 'click',
  },
  mounted() {
    console.log('ON LOAD:', this.$props);
  },
};
</script>
<style lang=""></style>
