import { onMounted, ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePokemonStore = defineStore("pokemon", () => {
  const pokemons = ref([]);
  const urlBaseImg = ref(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
  );
  const urlBasePokemon = ref("https://pokeapi.co/api/v2/pokemon/");
  const searchPokemon = ref("");
  const tipos = ref([]);

  const pokemonTipos = async () =>{
    const res = await fetch(`${urlBasePokemon.value}/`);

    const data = await res.json();

    tipos.value = data.types;
    
  }

  const fetchPokemons = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0",
    );

    const data = await res.json();

    const detalhes = await Promise.all(
        data.results.map(async (pokemon) =>{
            const res = await fetch(pokemon.url);
            const detalhesPokemon = await res.json();
            return {
                id: detalhesPokemon.id,
                name: detalhesPokemon.name,
                types: detalhesPokemon.types,
                img: detalhesPokemon.sprites.front_default
            };
        })
    );
    pokemons.value = detalhes;
  };

  const pokemonsFiltrados = computed(() => {
    if (!searchPokemon.value) {
      return pokemons.value;
    }

    return pokemons.value.filter((pokemon) => {
      return pokemon.name
        .toLowerCase()
        .includes(searchPokemon.value.toLocaleLowerCase());
    });
  });

  return {
    pokemons,
    searchPokemon,
    fetchPokemons,
    pokemonsFiltrados,
  };
});
