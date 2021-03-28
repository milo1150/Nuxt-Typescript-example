import { Counter } from './index';

export type TodoGetters = {
  getvalue(state: Counter): number;
};

/**
|--------------------------------------------------
| this work !!
|--------------------------------------------------
*/
export const getter: TodoGetters = {
  getvalue(state) {
    return state.counter2;
  },
};

/**
|--------------------------------------------------
| In test
|--------------------------------------------------
*/
// export const getters = (): TodoGetters => ({
//   getvalue(state) {
//     return state.counter;
//   },
// });
