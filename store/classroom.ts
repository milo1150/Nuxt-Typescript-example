export const state = () => ({
  member: 59,
});

export const getters = {
  getMember(state: any) {
    return state.member;
  },
};

export const mutations = {
  addMember(state: any) {
    state.member++;
  },
};
