<template>
  <Navbar />
  <header>
    <h1>Planets List</h1>
  </header>

  <section class="planet-list">
    <div class="card-planet" v-for="planet in allPlanets" key="index">
      <img
        class="card-image"
        src="https://vignette2.wikia.nocookie.net/starwars/images/1/18/Ord_Mantell_TOR_new.png/revision/latest?cb=20121011040100"
        alt=""
      />
      <div class="planet-desc">
        <h3 class="planet-name">{{ planet.name }}</h3>
        <div>
          <p><strong>Diameter:</strong> {{ planet.diameter }}</p>
          <p><strong>Population:</strong> {{ planet.population }}</p>
        </div>
      </div>
    </div>
  </section>

  <div class="paginate-btn">
    <button @click="prevPage" id="prev-btn">Previous</button>
    <button @click="nextPage" id="next-btn" type="submit">Next</button>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axiosSetup from "../axiosSetup";
import Navbar from "../components/Navbar.vue";

let currentPage = 1;
const allPlanets = ref([]);

onMounted(async () => {
  fecthAllPlanets(currentPage);
});

const fecthAllPlanets = (page) => {
  axiosSetup.get(`planets/?page=${page}`).then(({ data }) => {
    allPlanets.value = data.results;
  });
};

const nextPage = () => {
  if (currentPage < 6) {
    fecthAllPlanets((currentPage += 1));
  } else {
    fecthAllPlanets(currentPage);
    alert("You already at the last page");
  }
};
const prevPage = () => {
  if (currentPage > 1) {
    fecthAllPlanets((currentPage -= 1));
  } else {
    fecthAllPlanets(currentPage);
    alert("You already at the first page");
  }
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

.planet-list {
  padding: 0 80px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  justify-content: center;
  align-items: center;
  gap: 40px;

  .card-planet {
    width: 180px;
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
      margin-bottom: 10px;
    }

    .planet-desc {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      color: white;
      background-color: transparent;

      h3 {
        background-color: transparent;
      }

      div {
        display: flex;
        gap: 20px;
        font-size: 14px;
        background-color: transparent;

        strong,
        p {
          text-align: center;
          background-color: transparent;
        }
      }
    }
  }
}
</style>
