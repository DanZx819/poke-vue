<template>
  <div class="pokedex-layout">
    <!-- Header com navbar estilo Figma -->
    <header class="pokedex-header">
      <div class="header-content">
        <div class="spacer"></div>
        <h1 class="title">PokeVue</h1>
        <button
          class="menu-toggle"
          :class="{ active: menuOpen }"
          @click="toggleMenu"
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <!-- Menu lateral -->
    <div
      class="menu-overlay"
      :class="{ active: menuOpen }"
      @click="closeMenu"
    ></div>
    <nav class="side-menu" :class="{ active: menuOpen }">
      <div class="menu-header">
        <h2>Menu</h2>
        <button class="close-btn" @click="closeMenu" aria-label="Fechar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>

      <ul class="menu-list">
        <li><router-link to="/" @click="closeMenu">Home</router-link></li>
        <li>
          <router-link to="/about" @click.prevent="closeMenu"
            >Sobre</router-link
          >
        </li>
      </ul>
    </nav>

    <!-- Conteúdo das páginas -->
    <main class="main-content">
      <slot />
    </main>

    <!-- Footer opcional -->
    <footer class="pokedex-footer">
      <p>PokéDex © 2024 - Feito com Vue 3</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<style scoped>
.pokedex-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  position: relative;
  overflow-x: hidden;
}

/* Pokébolas decorativas no fundo */
.pokedex-layout::before,
.pokedex-layout::after {
  content: "";
  position: fixed;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  opacity: 0.05;
  pointer-events: none;
  z-index: 0;
}

.pokedex-layout::before {
  top: -150px;
  left: -150px;
  background: radial-gradient(
      circle at 50% 50%,
      #000 45%,
      transparent 45%,
      transparent 50%,
      #000 50%,
      #000 55%,
      transparent 55%
    ),
    linear-gradient(to bottom, #ff0000 50%, #ffffff 50%);
}

.pokedex-layout::after {
  bottom: -100px;
  right: -100px;
  background: radial-gradient(
      circle at 50% 50%,
      #000 45%,
      transparent 45%,
      transparent 50%,
      #000 50%,
      #000 55%,
      transparent 55%
    ),
    linear-gradient(to bottom, #ff0000 50%, #ffffff 50%);
}

.pokedex-header {
  background: #e8e8e8;
  padding: 16px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

.spacer {
  /* Espaço vazio à esquerda para centralizar o título */
}

.title {
  font-size: 48px;
  font-weight: 900;
  color: #ffcb05;
  text-shadow: -4px -4px 0 #2e5fa3, 4px -4px 0 #2e5fa3, -4px 4px 0 #2e5fa3,
    4px 4px 0 #2e5fa3, -2px -2px 0 #2e5fa3, 2px -2px 0 #2e5fa3,
    -2px 2px 0 #2e5fa3, 2px 2px 0 #2e5fa3;
  margin: 0;
  letter-spacing: 2px;
  font-style: italic;
  transform: skewY(-2deg);
  text-align: center;
}

.menu-toggle {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-self: end;
  z-index: 1001;
}

.menu-toggle span {
  width: 28px;
  height: 3px;
  background: #333;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.menu-toggle:hover span {
  background: #2e5fa3;
}

/* Animação do X quando menu aberto */
.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.main-content {
  flex: 1;
  padding: 0 20px 40px;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Overlay escuro quando menu aberto */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Menu lateral */
.side-menu {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100%;
  background: white;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: right 0.3s ease;
  overflow-y: auto;
}

.side-menu.active {
  right: 0;
}

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  background: #e8e8e8;
}

.menu-header h2 {
  margin: 0;
  font-size: 24px;
  color: #333;
}

.close-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  transition: color 0.3s;
}

.close-btn:hover {
  color: #2e5fa3;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-list li {
  border-bottom: 1px solid #f0f0f0;
}

.menu-list a {
  display: block;
  padding: 16px 20px;
  color: #333;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: background 0.3s, color 0.3s;
}

.menu-list a:hover {
  background: #f8f8f8;
  color: #2e5fa3;
}

.pokedex-footer {
  background: white;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #e0e0e0;
  position: relative;
  z-index: 1;
}

.pokedex-footer p {
  color: #666;
  margin: 0;
  font-size: 14px;
}

@media (max-width: 768px) {
  .title {
    font-size: 32px;
    letter-spacing: 1px;
  }

  .menu-toggle span {
    width: 24px;
  }

  .pokedex-layout::before,
  .pokedex-layout::after {
    width: 200px;
    height: 200px;
  }
}
</style>