<template>
  <Default>
    <div class="pokedex-page">
      <!-- Search Bar (apenas visual) -->
      <SearchBar v-model="usePokemon.searchPokemon" />

      <!-- Grid de Pokémons -->
      <div class="pokemon-grid">
        <PokemonCard
          v-for="pokemon in usePokemon.pokemonsFiltrados"
          :key="pokemon.id"
          :pokemon="pokemon"
          @click="selectPokemon(pokemon)"
        />
      </div>
    </div>
  </Default>
</template>

<script setup>
import { usePokemonStore } from "@/stores/pokemon";

import PokemonCard from "../components/PokemonCard.vue";
import SearchBar from "../components/SearchBar.vue";
import Default from "@/layouts/default.vue";

import { onMounted, ref, computed, reactive } from "vue";
import { useRouter } from "vue-router";
const usePokemon = usePokemonStore();

let pokemonSelected = reactive(ref());

onMounted(() => {
  usePokemon.fetchPokemons();
});

const router = useRouter();

const selectPokemon = (pokemon) => {
  router.push(`/pokemon/${pokemon.id}`)
}
</script>




<style scoped>
.pokedex-page {
  width: 100%;
  padding-top: 30px;
}

.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 30px;
}

@media (max-width: 768px) {
  .pokemon-grid {
    grid-template-columns: 1fr;
  }

  .pokedex-page {
    padding-top: 20px;
  }
}
</style>