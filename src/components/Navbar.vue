<template>
  <nav class="navbar">
    <button>Starwars</button>
  </nav>
</template>

<script setup></script>

<style lang="scss">
.navbar {
  position: sticky;
  top: 0;
  background-image: linear-gradient(white, rgb(228, 228, 228));
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 12px rgb(196, 194, 194);

  button {
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
  }

  :hover {
    opacity: 0.7;
  }
}
</style>
