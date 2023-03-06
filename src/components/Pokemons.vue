<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
    <PokemonDetail  v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon" />
  </div>
  <div v-if="!pokemons.length" class="flex justify-center text-gray-600 p-8">
    There are no pokemon
  </div>
</template>

<script setup>
import PokemonDetail from './PokemonDetail.vue';
const { pokemons } = defineProps({
  pokemons: {
    required: true,
    type: Object,
  },
  
})

</script>
