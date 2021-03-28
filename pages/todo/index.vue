<template>
  <v-app>
    <v-main>
      <div class="todobox">
        <div class="addtodo">
          <v-text-field label="" outlined></v-text-field>
          <v-btn color="primary" elevation="6">Todo</v-btn>
        </div>
        <div class="todolist">Todo list</div>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
// import Vue from 'vue';
import { computed } from '@nuxtjs/composition-api';
export default {
  setup() {
    const value: number = 20;
    return {
      value,
    };
  },
};
</script>

<style lang="scss" scoped></style>
