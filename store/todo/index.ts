import { InjectionKey } from '@nuxtjs/composition-api';
import { getter as GETTERS, GettersPath as GETTERS_PATH } from './getter';
import { mutation as MUTATIONS } from './mutation';

export interface TodoList {
  todoName: string;
  status: boolean;
}

export interface TopicList {
  topicName: string;
  todoList: TodoList[];
}

export interface TodoState {
  topicList: TopicList[];
}

export const state = (): TodoState => ({
  topicList: [
    {
      topicName: 'TEST01',
      todoList: [
        { todoName: 'Project 1', status: true },
        { todoName: 'Project 2', status: false },
      ],
    },
    {
      topicName: 'TEST02',
      todoList: [],
    },
  ],
});

// export type RootState = ReturnType<typeof state>;

/**
 * SETUP
 */
export const key: InjectionKey<TodoState> = Symbol('Vuex Key');
export const getters = GETTERS;
export const mutations = MUTATIONS;
export const GettersPath = GETTERS_PATH; // getters path enum
