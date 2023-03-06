<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Pokemon</h1>
  </div>
  
  <!-- <div class="flex  mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4">
        <button v-if="!pokemons" class="h-10 px-6 font-semibold rounded-md bg-black text-white">
          Previous
        </button>
        <button v-if="!pokemons" class="h-10 px-6 font-semibold rounded-md  bg-black text-white border border-slate-200 text-slate-900" >
          Next
        </button>
      </div>
     
    </div> -->
  <Pokemons :pokemons="pokemons" />

</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import Pokemons from "../components/Pokemons.vue";
import axiosClient from "../axiosClient.js";

const pokemons = ref([]);

onMounted(async () => {
  var number = Math.floor((Math.random() * 721) + 1); 
  axiosClient
      .get('pokemon?limit=9&offset='+number)
      .then(({ data }) => pokemons.value=(data.results));
  
})

</script>
