<template>
  <Navbar />
  <header>
    <h1>Characters List</h1>
  </header>

  <section class="character-list">
    <div class="card-character" v-for="character in allCharacters" key="index">
      <img
        class="card-image"
        src="https://cdn3.iconfinder.com/data/icons/halloween-avatar-01/348/halloween_avatar-20-512.png"
        alt=""
      />
      <div class="character-desc">
        <h3 class="character-name">{{ character.name }}</h3>
        <div>
          <p><strong>Heigth:</strong> {{ character.height }}cm</p>
          <p><strong>Weigth:</strong> {{ character.mass }}kg</p>
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
    alert("You already at the last page");
  }
};
const prevPage = () => {
  if (currentPage > 1) {
    fecthAllCharacters((currentPage -= 1));
  } else {
    fecthAllCharacters(currentPage);
    alert("You already at the first page");
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "proxima nova";
  background-color: rgb(10, 10, 27);
}

header {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  h1 {
    color: white;
  }
}

.character-list {
  padding: 0 80px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  justify-content: center;
  align-items: center;
  gap: 40px;

  .card-character {
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
    }

    .character-desc {
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
.paginate-btn {
  padding: 0 40px 40px 40px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 40px;

  #prev-btn,
  #next-btn {
    width: 120px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid gold;
    cursor: pointer;
    background-color: transparent;
    font-weight: 500;
    color: white;
    transition: all ease-in 150ms;
  }

  #prev-btn:hover,
  #next-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: gold;
  }
}
</style>
