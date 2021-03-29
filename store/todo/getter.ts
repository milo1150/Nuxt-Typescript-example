import { GetterTree } from 'vuex';
import { TodoState, TopicList } from './index';

export enum GettersPath {
  GET_TODO_STATE = 'todo/getTodoState',
}

export type Getters = {
  getTodoState(state: TodoState): TopicList[];
};

export const getter: GetterTree<TodoState, TodoState> & Getters = {
  getTodoState: (state) => {
    return state.topicList;
  },
};
