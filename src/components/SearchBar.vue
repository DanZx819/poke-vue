<template>
  <div class="search-container">
    <input
      type="text" 
      class="search-input" 
      placeholder="Pesquise o nome de um Pokemon"
      @input="emit('update:modelValue', $event.target.value)" 
      :value="modelValue"
    />
    
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const { modelValue } = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
</script>
<style scoped>
.search-container {
  position: relative;
  max-width: 600px;
  margin: 0 auto 40px;
}

.search-input {
  width: 100%;
  padding: 16px 60px 16px 20px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  outline: none;
}

.search-input::placeholder {
  color: #999;
}

.search-btn {
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: #EF5350;
  cursor: not-allowed;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.search-btn:hover {
  background: #E53935;
}
</style>