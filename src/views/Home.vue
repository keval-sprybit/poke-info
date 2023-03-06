<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Pokemon</h1>
  </div>
  <!-- <Meals :meals="meals" /> -->
  <Pokemons :pokemons="pokemons" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import Pokemons from "../components/Pokemons.vue";
import axiosClient from "../axiosClient.js";

const pokemons = ref([]);

onMounted(async () => {
  
  axiosClient
      .get(`pokemon?limit=100&offset=0`)
      .then(({ data }) => pokemons.value=(data.results));
  
});

</script>
