<template>
  <div
    class="bg-white hover:filter-none  drop-shadow-xl rounded-xl hover:scale-105 transition-all"
  >
  
  <router-link :to="{ name: 'byName', params: { name: pokemon.name  } }">
    <h3 class="font-bold">{{ pokemonInfo.id }} {{ pokemon.name }}</h3>
    <img class="hover:filter-none hover:origin-top-left hover:saturate-200  object-cover" :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+pokemonInfo.id +'.svg'">
  </router-link>

  
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";

const { pokemon} = defineProps({
  pokemon: {
    required: true,
    type: Object
  }

})
const pokemonInfo = ref([]);

onMounted(async () => {
  axiosClient
      .get(`pokemon/`+pokemon.name)
      .then(({ data }) => pokemonInfo.value=(data));
});
</script>
