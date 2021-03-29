<template>
  <v-app>
    <div class="todobox">
      <TodoInput :input-value="data.todoname" :edit-value="sampleLog" />
      <!-- <TodoCard /> -->
      <p>Current Text : {{ data.todoname }}</p>
    </div>
  </v-app>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  reactive,
  ref,
  watch,
} from '@nuxtjs/composition-api';
import TodoInput from '../../components/todo/Input.vue';
import TodoCard from '../../components/todo/TodoCard.vue';

type todoName = {
  todoname: string;
  sampleNumber: number;
};

export default defineComponent({
  components: {
    TodoInput,
    TodoCard,
  },
  setup(props, { emit }) {
    const data = reactive<todoName>({
      todoname: 'emptyzzz',
      sampleNumber: 0,
    });

    watch(data, (value) => {
      console.log(value.todoname);
    });

    const sampleLog = (value: string) => {
      console.log('new value:', value);
      data.todoname = value;
      console.log('new data obj value:', data.todoname);
    };

    return { data, inputValue: data.todoname, sampleLog };
  },
});
</script>

<style lang="scss" scoped></style>
