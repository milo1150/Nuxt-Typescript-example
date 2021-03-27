interface State {
  member: number;
}

export const state = (): State => ({
  member: 50,
});

// getters no need to be ({}) ***
export const getters = {
  nMember(state: State): number {
    return state.member;
  },
};

export const mutations = {
  addMember(state: State) {
    return state.member++;
  },
};
