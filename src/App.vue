<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useMoviesStore } from "./infrastructure/store/movies";

const moviesStore = useMoviesStore();
const { fetchMovies } = moviesStore;
const { getMovies } = storeToRefs(moviesStore);

fetchMovies();
const movies = getMovies.value?.results;
</script>

<template>
  <ul>
    <li v-for="movie in movies">{{ movie }}</li>
  </ul>
</template>

<style scoped></style>
