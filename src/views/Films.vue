<template>
  <Navbar />
  <header>
    <h1>Films List</h1>
  </header>

  <section class="film-list">
    <table class="film-table">
      <thead>
        <th class="small-tab">Title</th>
        <th class="small-tab">Director</th>
        <th class="small-tab">Producers</th>
        <th class="small-tab">Release Date</th>
        <th class="large-tab">opening_crawl</th>
      </thead>
      <tbody v-for="film in allFilms" key="index">
        <td class="small-tab film-title">{{ film.title }}</td>
        <td class="small-tab">{{ film.director }}</td>
        <td class="small-tab">{{ film.producer }}</td>
        <td class="small-tab">{{ film.release_date }}</td>
        <td class="large-tab">{{ film.opening_crawl }}</td>
      </tbody>
    </table>
  </section>
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
  display: flex;
}
</style>
