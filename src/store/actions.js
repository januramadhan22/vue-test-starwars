import axiosSetup from "../axiosSetup";

export function searchCharacters({ commit }, keyword) {
  if (keyword != "") {
    axiosSetup.get(`people/?search=${keyword}`).then(({ data }) => {
      commit("setSearchCharacters", data.results);
    });
  }
}

export function getCharacters({ commit }) {
  axiosSetup.get(`people`).then(({ data }) => {
    commit("setGetCharacters", data.results);
  });
}
