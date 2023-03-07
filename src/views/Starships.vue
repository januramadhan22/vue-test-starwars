<template>
  <Navbar />
  <header>
    <h1>Starships List</h1>
  </header>

  <section class="starships-list">
    <div class="card-starships" v-for="starships in allStarships" key="index">
      <img
        class="card-image"
        src="https://i.pinimg.com/originals/f3/79/7c/f3797c2f05a30e111a1fd26e13478520.png"
        alt=""
      />
      <div class="starships-desc">
        <h3 class="starships-name">{{ starships.name }}</h3>
        <div>
          <p><strong>Speed:</strong> {{ starships.max_atmosphering_speed }}</p>
          <p><strong>Class:</strong> {{ starships.starship_class }}</p>
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
const allStarships = ref([]);

onMounted(async () => {
  fecthAllStarships(currentPage);
});

const fecthAllStarships = (page) => {
  axiosSetup.get(`starships/?page=${page}`).then(({ data }) => {
    allStarships.value = data.results;
  });
};

const nextPage = () => {
  if (currentPage < 4) {
    fecthAllStarships((currentPage += 1));
  } else {
    fecthAllStarships(currentPage);
    alert("You already at the last page");
  }
};
const prevPage = () => {
  if (currentPage > 1) {
    fecthAllStarships((currentPage -= 1));
  } else {
    fecthAllStarships(currentPage);
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

.starships-list {
  padding: 0 80px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  justify-content: center;
  align-items: center;
  gap: 40px;

  .card-starships {
    width: 180px;
    height: 280px;
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

    .starships-desc {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      color: white;
      background-color: transparent;

      h3 {
        text-align: center;
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

        p {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}
</style>
