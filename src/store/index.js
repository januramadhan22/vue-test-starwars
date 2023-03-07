import { createStore } from "vuex";
import { character } from "./character.module";

const store = createStore({
  modules: {
    character,
  },
});

export default store;
