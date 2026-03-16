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
      <h3 class="pokemon-name">{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}</h3>

      <div class="card-footer">
        <img :src="pokemon.img" class="pokemon-image" />
      </div>
    </div>
  </div>
</template>

<script setup>


const {pokemon} = defineProps({
  pokemon: Object
});

</script>

<style scoped>
.pokemon-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.pokemon-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.types {
  display: flex;
  gap: 6px;
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
.type-grass {
  background: #9bcc50;
}

.type-poison {
  background: #b97fc9;
}

.type-fire {
  background: #fd7d24;
}

.type-water {
  background: #4592c4;
}

.type-electric {
  background: #eed535;
  color: #333;
}

.type-normal {
  background: #a4acaf;
}

.type-psychic {
  background: #f366b9;
}

.type-fighting {
  background: #d56723;
}

.type-ground {
  background: #ab9842;
}

.type-rock {
  background: #a38c21;
}

.type-bug {
  background: #729f3f;
}

.type-ghost {
  background: #7b62a3;
}

.type-steel {
  background: #9eb7b8;
}

.type-ice {
  background: #51c4e7;
}

.type-dragon {
  background: #f16e57;
}

.type-dark {
  background: #707070;
}

.type-fairy {
  background: #fdb9e9;
}

.type-flying {
  background: #3dc7ef;
}

.pokemon-number {
  font-size: 14px;
  font-weight: 700;
  color: #666;
}

.card-body {
  position: relative;
}

.pokemon-name {
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px 0;
}

.pokemon-description {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin: 0 0 16px 0;
  min-height: 60px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.more-btn {
  padding: 8px 20px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;
}

.more-btn:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

.more-btn-grass {
  background: #9bcc50;
}

.more-btn-poison {
  background: #b97fc9;
}

.more-btn-fire {
  background: #fd7d24;
}

.more-btn-water {
  background: #4592c4;
}

.more-btn-electric {
  background: #eed535;
  color: #333;
}

.more-btn-normal {
  background: #a4acaf;
}

.more-btn-psychic {
  background: #f366b9;
}

.more-btn-fighting {
  background: #d56723;
}

.pokemon-image {
  width: 100px;
  height: 100px;

  object-fit: contain;
}
</style>