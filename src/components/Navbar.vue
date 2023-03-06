<template>
  <header class="navbar">
    <router-link to="/" id="appName">Starwars Library</router-link>
    <div class="menubar">
      <router-link to="/" class="menu-btn">Characters</router-link>
      <router-link to="/films" class="menu-btn">Films</router-link>
      <router-link to="/planets" class="menu-btn">Planets</router-link>
      <router-link to="/starships" class="menu-btn">Starships</router-link>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss">
.navbar {
  position: sticky;
  top: 0;
  background-image: linear-gradient(white, rgb(238, 238, 238));
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 12px rgb(196, 194, 194);

  #appName {
    background-color: transparent;
    padding: 0;
    border: none;
    font-size: 32px;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    font-family: "proxima nova";
    color: black;
    opacity: 0.4;
    transition: all ease-in 200ms;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }

  .menubar {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 40px;
    cursor: pointer;

    .menu-btn {
      font-size: 18px;
      text-decoration: none;
      color: black;
      opacity: 0.6;
      transition: all ease-in 150ms;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
