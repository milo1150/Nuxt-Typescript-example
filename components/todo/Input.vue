<template>
  <div class="addtodo">
    <div class="div-input-todo">
      <p>Text From parent: {{ inputValue }}</p>
      <v-text-field
        v-model="childtext"
        @input="editValue(childtext)"
        outlined
        dense
      ></v-text-field>
    </div>
    <div class="div-btn-todo">
      <!-- <v-btn color="primary" elevation="6" @click="updateValue">Add Todo</v-btn> -->
      <v-btn color="primary" elevation="6" @click="editValue(childtext)"
        >Add Todo</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  computed,
  watch,
  ref,
} from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    inputValue: { type: String, required: true },
    editValue: { type: Function, required: true },
  },
  setup(props, { emit }) {
    const childtext = ref(props.inputValue);
    onMounted(() => {
      console.log(props);
    });
    watch(props, (value) => {
      console.log('props updated:', props);
    });
    // watch(['inputValue'], (value) => {
    //   console.log(value);
    // });
    // const updateValue = () => {
    //   emit('editvalue', childtext.value);
    // };

    // const update = (value: string) => {
    //   console.log(value);
    //   return emit('update:inputValue', value);
    // };

    // const updateValue = () => {
    //   props.editValue();
    // };
    return {
      // update,
      // inputV,
      // inputSync,
      // updateValue,
      childtext,
    };
  },
});
</script>

<style lang=""></style>
