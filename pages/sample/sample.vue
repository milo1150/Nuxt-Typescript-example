<template>
  <div>
    <p>TEST</p>
    <!-- <p>Current Counter Value : {{ getvalue }}</p> -->
    <!-- <v-btn @click="increaseValue">Increase 1</v-btn> -->
    <p>Classroom member {{ classMember }}</p>
    <v-btn @click="moreMember">add more member</v-btn>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { useStore, computed } from '@nuxtjs/composition-api';

export default Vue.extend({
  // computed: {
  //   ...mapGetters('counter', ['getvalue']),
  // },
  // mounted() {
  //   console.log(this.$store);
  // },
  setup() {
    const store = useStore();
    console.log('STORE:', store);
    // console.log('state:', store.state.counter); // count state value

    console.log('GETTER:', store.getters);
    // console.log(store.getters['classroom/nMember']);
    // const counter = computed(() => store.getters['counter/getvalue']);
    // const nNumber = computed(() => store.getters.nNumber);
    // console.log(counter);
    // console.log('nNumber', nNumber);

    // const increaseValue = store.commit('counter/increaseNumber');

    /**
    |--------------------------------------------------
    | Classroom Vuex
    |--------------------------------------------------
    */
    // const classMember = computed(() => store.state.classroom.member);
    // const moreClassroomMember = () => store.commit('classroom/addMember');

    return {
      // counter,
      // increaseValue,
      // classMember,
      // moreMember: moreClassroomMember,
    };
  },
});
</script>
<style scope></style>
