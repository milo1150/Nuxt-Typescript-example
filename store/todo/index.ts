import { InjectionKey } from '@nuxtjs/composition-api';
import { getter as GETTERS, GettersPath as GETTERS_PATH } from './getter';
import {
  mutation as MUTATIONS,
  MutationTypes as MUTATES_TYPE,
} from './mutation';

export interface TodoList {
  todoName: string;
  status: boolean;
}

export interface TopicList {
  topicId: string;
  topicName: string;
  todoList: TodoList[];
}

export interface TodoState {
  topicList: TopicList[];
}

export const state = (): TodoState => ({
  topicList: [
    {
      topicId: 'topic1',
      topicName: 'TEST01',
      todoList: [
        { todoName: 'Project1', status: true },
        { todoName: 'Project2', status: false },
        { todoName: 'Project3', status: true },
      ],
    },
    {
      topicId: 'topic2',
      topicName: 'TEST02',
      todoList: [
        { todoName: 'Project50', status: false },
        { todoName: 'Project60', status: true },
      ],
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
export const MutationsType = MUTATES_TYPE;
