<template>
  <Navbar />
  <header>
    <h1>Characters List</h1>

    <form @submit.prevent="searchCharacter">
      <input
        id="search-field"
        type="text"
        placeholder="Search Character . . ."
        @change="searchCharacter"
        v-model="keyword"
      />
      <button id="search-btn" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  </header>

  <section class="character-list">
    <table class="character-table">
      <thead>
        <th>Name</th>
        <th>Gender</th>
        <th>Height</th>
        <th>Weight</th>
        <th>Birthday</th>
        <th>Hair Color</th>
        <th>Skin Color</th>
        <th>Eye Color</th>
      </thead>
      <tbody v-for="character in allCharacters" key="index">
        <td>{{ character.name }}</td>
        <td>{{ character.gender }}</td>
        <td>{{ character.height }}cm</td>
        <td>{{ character.mass }}kg</td>
        <td>{{ character.birth_year }}</td>
        <td>{{ character.hair_color }}</td>
        <td>{{ character.skin_color }}</td>
        <td>{{ character.eye_color }}</td>
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

const keyword = ref("");
let currentPage = 1;
const allCharacters = ref([]);
const datas = ref({});

onMounted(async () => {
  fecthAllCharacters(currentPage);
});

const fecthAllCharacters = (page) => {
  axiosSetup.get(`people/?page=${page}`).then(({ data }) => {
    (allCharacters.value = data.results), (datas.value = data);
  });
};

const nextPage = () => {
  if (currentPage < 9) {
    fecthAllCharacters((currentPage += 1));
  } else {
    fecthAllCharacters(currentPage);
  }
};
const prevPage = () => {
  if (currentPage > 1) {
    fecthAllCharacters((currentPage -= 1));
  } else {
    fecthAllCharacters(currentPage);
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

  form {
    width: 320px;
    padding: 8px 12px;
    border: 1px solid rgb(207, 207, 207);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 4px;

    #search-field {
      width: 100%;
      border: none;
      padding: 3px 2px;
    }
    :focus,
    :active {
      outline: none;
      background-color: transparent;
    }

    #search-btn {
      cursor: pointer;
      width: 24px;
      height: 24px;
      padding: 0;
      border: none;
      background-color: transparent;
      color: gray;
    }
    :hover {
      color: black;
    }
  }
}

.character-list {
  padding: 0 80px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .character-table {
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
