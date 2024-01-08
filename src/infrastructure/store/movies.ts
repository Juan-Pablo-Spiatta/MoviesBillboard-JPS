import { defineStore } from "pinia";
import axios, { AxiosError, AxiosResponse } from "axios";
import { ref } from "vue";
import { computed } from "vue";

const api_key = import.meta.env.VITE_API_KEY;

export const useMoviesStore = defineStore("movies", () => {
  const moviesList = ref();
  const getMovies = computed(() => {
    return moviesList.value;
  });

  function fetchMovies() {
    axios(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
      .then((response: AxiosResponse) => {
        console.log(response);
      })
      .catch((error: AxiosError) => {
        console.error(error);
      });
  }

  return {
    fetchMovies,
    getMovies,
  };
});
