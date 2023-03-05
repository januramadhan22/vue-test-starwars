import axiosSetup from "../axiosSetup";

export function searchCharacters({ commit }, keyword) {
  if (keyword != "") {
    axiosSetup.get(`people/?search=${keyword}`).then(({ data }) => {
      commit("setSearchCharacters", data.results);
    });
  }
}
export function getAllCharacters({ commit }, page) {
  axiosSetup.get(`people/?page=${page}`).then(({ data }) => {
    commit("setGetAllCharacters", data.results);
  });
}
