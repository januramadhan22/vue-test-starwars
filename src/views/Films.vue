<template>
  <Navbar />
  <header>
    <h1>Films List</h1>
  </header>

  <section class="film-list">
    <div class="card-film" v-for="film in allFilms" key="index">
      <img
        class="card-image"
        src="https://tse4.mm.bing.net/th?id=OIP.4JVJiq5HuQlkBgsXkI3QPAHaKf&pid=Api&P=0"
        alt=""
      />
      <div class="film-desc">
        <h3 class="film-name">{{ film.title }}</h3>
        <p>{{ film.release_date }}</p>
        <!-- <p>{{ film.opening_crawl }}</p> -->
      </div>
    </div>
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
  padding: 0 80px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  align-items: center;
  gap: 40px;

  .card-film {
    width: 240px;
    border: 2px solid gold;
    border-radius: 8px;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 6px whitesmoke;
    cursor: pointer;
    transition: all ease-in 150ms;

    &:hover {
      transform: scale(105%);
    }

    .card-image {
      width: 100%;
      border-radius: 12px;
      background-color: transparent;
    }

    .film-desc {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      color: white;
      background-color: transparent;

      h3 {
        background-color: transparent;
      }

      p {
        text-align: justify;
        background-color: transparent;
      }
    }
  }
}
</style>
