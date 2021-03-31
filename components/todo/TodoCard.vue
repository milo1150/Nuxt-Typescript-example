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
          <v-checkbox v-model="todo.status" hide-details>
            <template #label>
              <slot name="sdsd">label value is here</slot>
              <!-- <span>hello</span> -->
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
} from '@nuxtjs/composition-api';
import { key, TopicList, GettersPath } from '../../store/todo/index';
export default defineComponent({
  setup() {
    const store = useStore(key);
    const topicList = computed<TopicList[]>(
      () => store.getters[GettersPath.GET_TODO_STATE],
    );
    // console.log('TodoCard LOAD:', store);

    watch([topicList], () => {
      console.log('todostate:', topicList.value);
    });

    return { topicList };
  },
});
</script>

<style lang="scss"></style>
