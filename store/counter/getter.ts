import { Counter } from './index';

export type TodoGetters = {
  getvalue(state: Counter): number;
};

/**
|--------------------------------------------------
| this work !!
|--------------------------------------------------
*/
export const getter = {
  getvalue(state: any) {
    return state.counter;
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
