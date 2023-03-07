export const character = {
  state: {
    allCharacters: [],
  },
  getters: {
    characters: (state) => state.allCharacters,
  },
  mutations: {},
  actions: {
    GET_ALL_CHARACTERS({ state }, payload) {},
  },
};
