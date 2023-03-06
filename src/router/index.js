import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Films from "../views/Films.vue";
import Planets from "../views/Planets.vue";
import Starships from "../views/Starships.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/films",
    name: "films",
    component: Films,
  },
  {
    path: "/planets",
    name: "planets",
    component: Planets,
  },
  {
    path: "/starships",
    name: "starships",
    component: Starships,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
