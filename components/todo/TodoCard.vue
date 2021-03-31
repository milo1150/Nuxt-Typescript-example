<template>
  <div class="todolist">
    <v-card
      v-for="(topic, topicIndex) in topicList"
      :key="topicIndex"
      elevation="1"
      class="card-body"
    >
      <div class="card-header">
        <p class="card-header__text">{{ topic.topicName }}</p>
        <div class="card-header__addtodo-box">
          <v-text-field label="Todo Name"></v-text-field>
          <v-btn class="btn-addtodo" color="primary" tile small>Add todo</v-btn>
        </div>
      </div>
      <div class="card-todo">
        <div
          v-for="(todo, todoIndex) in topic.todoList"
          :key="todoIndex"
          class="card-todo__list"
        >
          <v-checkbox
            v-model="todoListChecked[topic.topicId]"
            hide-details
            :value="todo.todoName"
            @change="checkTodo(todo.todoName)"
          >
            <template #label>
              <span>{{ todo.todoName }}</span>
            </template>
          </v-checkbox>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useStore,
  computed,
  watch,
  ref,
  onMounted,
  onBeforeMount,
  reactive,
} from '@nuxtjs/composition-api';
import { key, TopicList, GettersPath } from '../../store/todo/index';

type TodoListChecked = {
  [index: string]: Array<string>;
};

export default defineComponent({
  setup() {
    const store = useStore(key);
    const topicList = computed<TopicList[]>(
      () => store.getters[GettersPath.GET_TODO_STATE],
    );
    const todoListChecked = reactive<TodoListChecked>({});

    watch([topicList], () => {
      console.log('todostate:', topicList.value);
    });

    onBeforeMount(() => {
      console.log('topicList:', topicList.value);
      for (const data of topicList.value) {
        // Add index name in to array
        if (!todoListChecked[data.topicId]) {
          todoListChecked[data.topicId] = [];
        }
        // if any todo in any topic is done -> add to list
        for (const todo of data.todoList) {
          if (todo.status) {
            todoListChecked[data.topicId].push(todo.todoName);
          }
        }
      }
      console.log(todoListChecked);
    });

    const CheckboxModel = (topicId: string) => {
      console.log(topicId);
      return todoListChecked.todo1;
    };

    const checkTodo = (value: string): void => {
      console.log(value);
    };

    return { topicList, checkTodo, todoListChecked, CheckboxModel };
  },
});
</script>

<style lang="scss"></style>
