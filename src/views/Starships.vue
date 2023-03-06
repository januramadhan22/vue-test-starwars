<template>
  <Navbar />
  <header>
    <h1>Starships List</h1>
  </header>

  <section class="film-list">
    <table class="film-table">
      <thead>
        <th>Name</th>
        <th>Model</th>
        <th>Manufacturer</th>
        <th>Cost</th>
        <th>Length</th>
        <th>Crew</th>
        <th>Passengers</th>
        <th>Max Speed</th>
        <th>Class</th>
      </thead>
      <tbody v-for="starships in allStarships" key="index">
        <td class="starships-title">{{ starships.name }}</td>
        <td>{{ starships.model }}</td>
        <td>{{ starships.manufacturer }}</td>
        <td>{{ starships.cost_in_credits }}</td>
        <td>{{ starships.length }}</td>
        <td>{{ starships.crew }}</td>
        <td>{{ starships.passengers }}</td>
        <td>{{ starships.max_atmosphering_speed }}</td>
        <td>{{ starships.starship_class }}</td>
      </tbody>
    </table>

    <div class="paginate-btn">
      <button @click="prevPage" id="prev-btn">Previous</button>
      <button @click="nextPage" id="next-btn" type="submit">Next</button>
    </div>
  </section>
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

.film-list {
  padding: 0 80px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .film-table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    overflow-x: scroll;

    thead {
      text-transform: uppercase;
      background-color: rgb(214, 253, 214);
      color: gray;
    }

    tbody {
      text-transform: capitalize;
      font-size: 14px;
    }

    th,
    td {
      padding: 10px 18px;
      border: 4px solid white;
      border-radius: 8px;
    }

    tbody:nth-child(odd) {
      background: whitesmoke;
    }

    .starships-title {
      font-weight: 500;
    }
  }

  .paginate-btn {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 40px;

    #prev-btn,
    #next-btn {
      width: 120px;
      height: 32px;
      border-radius: 8px;
      border: 1px solid rgb(96, 201, 96);
      cursor: pointer;
      background-color: rgb(96, 201, 96);
      font-weight: 500;
      color: white;
      transition: all ease-in 150ms;
    }

    #prev-btn:hover,
    #next-btn:hover {
      background-color: white;
      color: rgb(96, 201, 96);
    }
  }
}
</style>
