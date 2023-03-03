<template>
  <div
    class="bg-white  drop-shadow-xl rounded-xl hover:scale-105 transition-all"
  >
  <p class="underline">The quick brown fox ...</p>
  <img
        src="https://images.unsplash.com/photo-1677690742158-8f12c1296edc"
        :alt="pokemon.name"
        class="rounded-t-xl w-full hue-rotate-15 grayscale sepia-0 hover:filter-none hover:origin-top-left hover:saturate-200  object-cover"
      />
    <div class="p-3 ">
      <h3 class="font-bold">{{ pokemon.name }}</h3>
      <p class="mb-4 ">
        <!-- {{ $filters.truncateWords(pokemon.strInstructions, 20) }} -->
      </p>
  
    </div>
  </div>
</template>

<script setup>
// import YouTubeButton from './YouTubeButton.vue';
const { pokemon } = defineProps({
  pokemon: {
    required: true,
    type: Object
  }
})

</script>
