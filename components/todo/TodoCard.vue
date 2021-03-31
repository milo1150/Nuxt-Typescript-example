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
          <v-text-field
            v-model="todoInputName[topic.topicId]"
            label="Todo Name"
          ></v-text-field>
          <v-btn
            class="btn-addtodo"
            color="primary"
            tile
            small
            @click="addTodo(topic.topicId)"
            >Add todo</v-btn
          >
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
          >
            <template #label>
              <span
                :class="{
                  done:
                    todoListChecked[topic.topicId] && // if not provoke update value from vuex @setup() cycle
                    todoListChecked[topic.topicId].includes(todo.todoName),
                }"
                >{{ todo.todoName }}</span
              >
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
  watchEffect,
  reactive,
  onBeforeUpdate,
  onUpdated,
  onMounted,
  onBeforeMount,
} from '@nuxtjs/composition-api';
import {
  key,
  TopicList,
  GettersPath,
  MutationsType,
} from '../../store/todo/index';

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
    const todoInputName = reactive<{ [index: string]: string }>({});

    watch(topicList, () => {
      console.log('todostate:', topicList.value);
    });

    // Update local reactive value
    const refreshData = (): void => {
      console.log('REFRESH');
      for (const data of topicList.value) {
        // Add index name in to array
        if (!todoListChecked[data.topicId]) {
          todoListChecked[data.topicId] = [];
        }
        if (!todoInputName[data.topicId]) {
          todoInputName[data.topicId] = data.topicName;
        }
        // if any todo in any topic is done -> add to list
        for (const todo of data.todoList) {
          if (todo.status) {
            todoListChecked[data.topicId].push(todo.todoName);
          }
        }
      }
    };

    // Invoke Update Reactive Fnc
    refreshData();
    onUpdated(() => {
      console.log('UPDATE !!!');
      refreshData();
    });

    // Add Todo
    const addTodo = (tId: string): void => {
      const name = todoInputName[tId];
      store.commit({
        type: MutationsType.ADD_TODO,
        data: {
          topicId: tId,
          todoName: name,
        },
      });
    };

    /**
    |--------------------------------------------------
    | Console
    |--------------------------------------------------
    */
    console.log('TODOLISTCHECKED:', todoListChecked);
    console.log('DYNAMIC INPUT:', todoInputName);
    // watchEffect(() => console.log('todolistchecked updated:', todoListChecked));

    // watch(todoListChecked, (value) => {
    //   console.log('CHECKED UPDATE:', value);
    // });

    // watch(todoInputName, (value) => {
    //   console.log('INPUT UPDATE:', value);
    // });

    // watchEffect(() => console.log(todoInputName.topic1));
    // watch(
    //   () => todoInputName.topic1,
    //   (value) => {
    //     console.log('wtf:', value);
    //   },
    // );
    onBeforeMount(() => console.log('onBeforeMount'));
    onMounted(() => console.log('onMounted'));
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });

    return {
      topicList,
      todoListChecked,
      addTodo,
      todoInputName,
    };
  },
});
</script>

<style lang="scss"></style>
