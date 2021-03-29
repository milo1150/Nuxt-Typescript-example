<template>
  <div class="addtodo">
    <div class="div-input-todo">
      <v-text-field
        v-model="inputValue"
        outlined
        dense
        @input="updateTodoname(inputValue)"
      ></v-text-field>
    </div>
    <div class="div-btn-todo">
      <v-btn color="primary" elevation="6" @click="addTodo">new Topic</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    inputTodo: {
      type: String,
      required: true,
    },
    updateTodoname: {
      type: Function,
      required: true,
    },
    addTodo: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const inputValue = ref(props.inputTodo);
    return {
      inputValue,
    };
  },
});
</script>

<style lang=""></style>
