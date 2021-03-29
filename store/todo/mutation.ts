import { MutationTree } from 'vuex';
import { TodoState } from './index';

export enum MutationTypes {
  ADD_TOPIC = 'todo/addTopic',
}

export type Mutations = {
  addTopic(state: TodoState, payload: { topicName: string }): void;
};

export const mutation: MutationTree<TodoState> & Mutations = {
  addTopic: (state, payload) => {
    // console.log(payload);
    state.topicList.push({
      topicName: payload.topicName,
      todoList: [],
    });
  },
};
