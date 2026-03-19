<template>
  <Default>
    <div class="container-center">
      <PokemonSelected v-if="pokemon" :pokemon="pokemon"/>
    </div>
  </Default>
</template>

<script setup>
import PokemonSelected from "@/components/PokemonSelected.vue";
import Default from "@/layouts/default.vue";

import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const pokemon = ref(null);

onMounted(async () => {
  const id = route.params.id;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  pokemon.value = await res.json();
});
</script>

<style scoped>
.container-center {
  margin: 40px auto;
  display: flex;
  justify-content: center;
}
</style>