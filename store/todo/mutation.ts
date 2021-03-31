import { MutationTree } from 'vuex';
import { TodoState } from './index';

export enum MutationTypes {
  ADD_TOPIC = 'todo/addTopic',
  ADD_TODO = 'todo/addTodo',
}

export type Mutations = {
  addTopic(state: TodoState, payload: { topicName: string }): void;
  addTodo(
    state: TodoState,
    payload: { data: { topicId: string; todoName: string } },
  ): void;
};

export const mutation: MutationTree<TodoState> & Mutations = {
  addTopic: (state, payload) => {
    console.log(payload);
    state.topicList.push({
      topicId: `topic${state.topicList.length + 1}`,
      topicName: payload.topicName,
      todoList: [],
    });
  },
  addTodo: (state, payload) => {
    console.log(payload.data);
    for (const data of state.topicList) {
      if (data.topicId === payload.data.topicId) {
        data.todoList.push({
          todoName: payload.data.todoName,
          status: false,
        });
      }
    }
  },
};
