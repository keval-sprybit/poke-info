<template>
  <figure >
<!--  -->
<div class="flex font-sans shadow-xl ">
  <div class="flex-none w-48 relative ">
    <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+pokemonInfo.id+'.svg'"  width="" alt="" class="absolute object-cover" loading="lazy" />
  </div>
  
  <form class="flex-auto p-6">
    <div class="flex flex-wrap">
      <h1 class="flex-auto text-lg font-semibold text-slate-900">
        {{ pokemonInfo.name }}
        
      </h1>
      <div class="text-lg font-semibold text-slate-500">
       <label>Experience:  {{ pokemonInfo.base_experience }} </label>
      </div>
      <template v-for="pokemon in pokemonInfo.types" :key="pokemon.types">
      <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        {{ pokemon.type.name }}
      </div>
    </template>
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div class="space-x-2 flex text-sm">
        <label>
          
        </label>
      </div>
    </div>
    <div class="flex space-x-4 mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4">
    
          <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 px-8">
            <div>
              <h2 class="text-2xl font-semibold mb-2">Details</h2>
              <ul class="list-disc">
                  <li>Height : {{ pokemonInfo.height }}</li>
                  <li>Weight : {{ pokemonInfo.weight }}</li>
                  <li>Order  : {{ pokemonInfo.order }}</li>
              </ul>
            </div>
            <div>
              <h2 class="text-2xl font-semibold mb-2">Abilities</h2>
              <ul class="list-decimal">
                <template v-for="pokemon in pokemonInfo.abilities" :key="pokemon.ability">
                  <li>
                      {{ pokemon.ability.name }}
                  </li>
                </template>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl font-semibold mb-2">Held Items</h2>
              <ul class="list-decimal">
                <template v-for="pokemon in pokemonInfo.held_items" :key="pokemon.held_items">
                  <li>
                      {{ pokemon.item.name }}
                  </li>
                </template>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl font-semibold mb-2">Stats</h2>
              <ul class="list-decimal">
                <template v-for="pokemon in pokemonInfo.stats" :key="pokemon.stats">
                  <li>
                      {{ pokemon.stat.name }} - {{ pokemon.base_stat }}
                  </li>
                </template>
              </ul>
            </div>
          

          </div>
      </div>
    </div>


   
  </form>
</div>
<!--  -->
 
</figure>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';

const route = useRoute();
const pokemonInfo = ref({})

 onMounted(() => {
   axiosClient.get(`pokemon/${route.params.name}`)
    .then(({ data }) => {
      pokemonInfo.value = data || {}
    });
    // console.log(pokemonInfo.id)
     /* axiosClient.get(`characteristic/`+pokemonInfo.id)
    .then(({ data }) => {
      pokemonInfo.value = data || {}
    }) */
  
    // methods: {
    //     capitalize(str) {
    //       return str.charAt(0).toUpperCase() + str.slice(1);
    //     }
    //   }
})


</script>

