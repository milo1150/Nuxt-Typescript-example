// import { getter } from './getter'; // trick

export interface Counter {
  counter: number;
  counter2: number;
}

export const state = (): Counter => ({
  counter: 10,
  counter2: 20,
});
