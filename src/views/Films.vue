<template>
  <Navbar />
  <header>
    <h1>Films List</h1>
  </header>

  <div class="film-list">
    <div class="card-film" v-for="film in allFilms" key="index">
      <img src="" alt="" />
      {{ film.title }}
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axiosSetup from "../axiosSetup";
import Navbar from "../components/Navbar.vue";

let currentPage = 1;
const allFilms = ref([]);

onMounted(async () => {
  fecthAllFilms(currentPage);
});

const fecthAllFilms = (page) => {
  axiosSetup.get(`films/?page=${page}`).then(({ data }) => {
    allFilms.value = data.results;
  });
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "proxima nova";
}

header {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.film-list {
  padding: 0 80px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
</style>
