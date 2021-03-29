<template>
  <v-app>
    <div>
      <label for="test">Test Vmodel :</label>
      <v-text-field type="text" aria-label="test" v-model="firstname" />
      <vue-model v-model="firstname" />
    </div>
  </v-app>
</template>
<script>
import VueModel from './vmodel.vue';
export default {
  components: {
    VueModel,
  },
  data() {
    return {
      firstname: 'kortoei',
    };
  },
};
</script>
<style lang=""></style>
