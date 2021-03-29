<template>
  <v-app>
    <div class="todobox">
      <TodoInput
        :input-todo="todoname"
        :update-todoname="updateTodoname"
        :add-todo="addTodo"
      />
      <TodoCard />
    </div>
  </v-app>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  watch,
  useStore,
  onMounted,
} from '@nuxtjs/composition-api';
import { key, TopicList, GettersPath } from '../../store/todo/index';
import { MutationTypes } from '../../store/todo/mutation';
import TodoInput from '../../components/todo/Input.vue';
import TodoCard from '../../components/todo/TodoCard.vue';

export default defineComponent({
  components: {
    TodoInput,
    TodoCard,
  },
  setup() {
    const store = useStore(key);
    const todoname = ref<string>('');
    const TodoState = computed<TopicList[]>(
      () => store.getters[GettersPath.GET_TODO_STATE],
    );

    // watch(TodoState, (value) => {
    //   console.log('todostate:', value);
    // });

    const updateTodoname = (value: string): void => {
      // console.log('input value:', value);
      todoname.value = value;
    };

    const addTodo = (): void => {
      const name: string = todoname.value;
      const state = TodoState.value;
      for (const value of state) {
        if (value.topicName === name || !name) return;
      }
      store.commit({
        type: MutationTypes.ADD_TOPIC,
        topicName: name,
      });
      // store.commit('classroom/addMember');
    };

    return {
      todoname,
      updateTodoname,
      addTodo,
    };
  },
});
</script>

<style lang="scss" scoped></style>
