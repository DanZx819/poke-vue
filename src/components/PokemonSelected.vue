<template>
  <div class="pokemon-card">
    <div class="card-header">
      <div class="types">
        <span
          v-for="tipo in pokemon.types"
          :key="tipo.slot"
          class="type-badge"
          :class="`type-${tipo.type.name}`"
        >
          {{ tipo.type.name }}
        </span>
      </div>
      <span class="pokemon-number">#{{ pokemon.id }}</span>
    </div>

    <div class="card-body">
      <img 
        :src="pokemon.sprites.front_default" 
        :alt="pokemon.name"
        class="pokemon-image" 
      />
      
      <h3 class="pokemon-name">
        {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}
      </h3>

      <p class="pokemon-description">
        {{ description || 'Carregando descrição...' }}
      </p>

      <div class="stats-container">
        <div class="stat-item">
          <span class="stat-label">XP Base</span>
          <span class="stat-value">{{ pokemon.base_experience }}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Altura</span>
          <span class="stat-value">{{ (pokemon.height / 10).toFixed(1) }}m</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Peso</span>
          <span class="stat-value">{{ (pokemon.weight / 10).toFixed(1) }}kg</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";

const { pokemon } = defineProps({
  pokemon: Object,
});

const description = ref("");

onMounted(async () => {
  try {
    const res = await fetch(pokemon.species.url);
    const data = await res.json();

    const entry = data.flavor_text_entries.find(
      e => e.language.name === "pt"
    ) || data.flavor_text_entries.find(
      e => e.language.name === "en"
    );

    description.value = entry?.flavor_text.replace(/\f/g, ' ');
  } catch (error) {
    description.value = "Descrição não disponível.";
  }
});
</script>

<style scoped>
.pokemon-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  max-width: 400px;
}

.pokemon-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.types {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.type-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  text-transform: capitalize;
}

/* Cores dos tipos de Pokémon */
.type-grass { background: #9bcc50; }
.type-poison { background: #b97fc9; }
.type-fire { background: #fd7d24; }
.type-water { background: #4592c4; }
.type-electric { background: #eed535; color: #333; }
.type-normal { background: #a4acaf; }
.type-psychic { background: #f366b9; }
.type-fighting { background: #d56723; }
.type-ground { background: #ab9842; }
.type-rock { background: #a38c21; }
.type-bug { background: #729f3f; }
.type-ghost { background: #7b62a3; }
.type-steel { background: #9eb7b8; }
.type-ice { background: #51c4e7; }
.type-dragon { background: #f16e57; }
.type-dark { background: #707070; }
.type-fairy { background: #fdb9e9; }
.type-flying { background: #3dc7ef; }

.pokemon-number {
  font-size: 14px;
  font-weight: 700;
  color: #666;
}

.card-body {
  text-align: center;
}

.pokemon-image {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin: 0 auto 12px;
  display: block;
}

.pokemon-name {
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0 0 12px 0;
}

.pokemon-description {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin: 0 0 20px 0;
  min-height: 60px;
  text-align: left;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 16px;
}

.stat-item {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-label {
  font-size: 11px;
  font-weight: 600;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-value {
  font-size: 16px;
  font-weight: 700;
  color: #333;
}

@media (max-width: 480px) {
  .pokemon-card {
    padding: 16px;
  }

  .stats-container {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .pokemon-image {
    width: 120px;
    height: 120px;
  }
}
</style>