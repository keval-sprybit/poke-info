<template>
  <div
    class="bg-white hover:filter-none  drop-shadow-xl rounded-xl hover:scale-105 transition-all"
  >
  <div class="p-3 ">
    <!-- <img class="grayscale-" :src="pokemonInfo.sprites.back_default"> -->
    <h3 class="font-bold">{{ pokemonInfo.id }} {{ pokemon.name }}</h3>
    <img class="grayscale  hue-rotate-15 grayscale sepia-0 hover:filter-none hover:origin-top-left hover:saturate-200  object-cover" :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+pokemonInfo.id +'.svg'">

    </div>
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

console.log(pokemonInfo)
</script>
