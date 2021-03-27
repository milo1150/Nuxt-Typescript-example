import { getter } from './getter'; // trick

export interface Counter {
  counter: number;
  counter2: number;
}

export const state = (): Counter => ({
  counter: 10,
  counter2: 20,
});

export const getters = getter; // trick

// export

/**
|--------------------------------------------------
| TEST
|--------------------------------------------------
*/
// type TodoGetters = {
//   getvalue(state: Counter): number;
// };

// export const getters = {
//   getvalue: (state: Counter) => {
//     return state.counter;
//   },
// };

// export type TodoMutations = {
//   increaseNumber(state: Counter): void;
// };

// export const mutations = (): TodoMutations => ({
//   increaseNumber(state) {
//     return state.counter++;
//   },
// });
