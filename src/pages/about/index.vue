<template>
  <Default>
    <div class="about-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="pokeball-decoration">
          <div class="pokeball-top"></div>
          <div class="pokeball-middle"></div>
          <div class="pokeball-bottom"></div>
        </div>

        <h1 class="hero-title">Sobre o PokeVue</h1>
        <p class="hero-subtitle">Uma Pokédex moderna feita com Vue 3</p>
      </section>

      <!-- Features Grid -->
      <section class="features-section">
        <h2 class="section-title">Funcionalidades</h2>

        <div class="features-grid">
          <!-- Feature Card 1 -->
          <div class="feature-card type-electric">
            <div class="feature-icon">
              <img src="../../assets/search-svgrepo-com.svg" alt="Busca" width="48" height="48" />
            </div>
            <h3>Busca em Tempo Real</h3>
            <p>
              Sistema de busca dinâmica que filtra os Pokémons enquanto você
              digita, usando Vue Composition API e computed properties.
            </p>
            <div class="tech-tags">
              <span class="tag">v-model</span>
              <span class="tag">computed</span>
              <span class="tag">filter</span>
            </div>
          </div>

          <!-- Feature Card 2 -->
          <div class="feature-card type-fire">
            <div class="feature-icon">
              <img src="../../assets/api.png" alt="API" width="48" height="48" />
            </div>
            <h3>API da PokéAPI</h3>
            <p>
              Integração completa com a PokéAPI, buscando 151 Pokémons da 1ª
              geração com todos os detalhes (tipos, sprites, IDs).
            </p>
            <div class="tech-tags">
              <span class="tag">fetch</span>
              <span class="tag">async/await</span>
              <span class="tag">Promise.all</span>
            </div>
          </div>

          <!-- Feature Card 3 -->
          <div class="feature-card type-psychic">
            <div class="feature-icon">
              <img src="../../assets/pinia-seeklogo.svg" alt="Pinia" width="48" height="48" />
            </div>
            <h3>Pinia Store</h3>
            <p>
              Gerenciamento de estado global com Pinia para controlar a lista de
              Pokémons, busca e filtros de forma reativa.
            </p>
            <div class="tech-tags">
              <span class="tag">pinia</span>
              <span class="tag">store</span>
              <span class="tag">reactive</span>
            </div>
          </div>

          <!-- Feature Card 4 -->
          <div class="feature-card type-water">
            <div class="feature-icon">
              <img src="../../assets/vue-svgrepo-com.svg" alt="Vue Router" width="48" height="48" />
            </div>
            <h3>Vue Router</h3>
            <p>
              Navegação com rotas automáticas (file-based routing) e sistema de
              layouts para estrutura consistente em todas as páginas.
            </p>
            <div class="tech-tags">
              <span class="tag">router</span>
              <span class="tag">layouts</span>
              <span class="tag">navigation</span>
            </div>
          </div>

         

          
        </div>
      </section>

      <!-- Tech Stack Section -->
      <section class="tech-section">
        <h2 class="section-title">Stack do Projeto</h2>

        <div class="tech-grid">
          <div class="tech-item">
            <div class="tech-logo vue">
              <img src="../../assets/vue-svgrepo-com.svg" alt="Vue 3" width="50" height="50" />
            </div>
            <h4>Vue 3</h4>
            <p>Composition API</p>
          </div>

          <div class="tech-item">
            <div class="tech-logo pinia">
              <img src="../../assets/pinia-seeklogo.svg" alt="Pinia" width="50" height="50" />
            </div>
            <h4>Pinia</h4>
            <p>State Management</p>
          </div>

          <div class="tech-item">
            <div class="tech-logo router">
              <img src="../../assets/vue-svgrepo-com.svg" alt="Vue Router" width="50" height="50" />
            </div>
            <h4>Vue Router</h4>
            <p>File-based Routing</p>
          </div>

          <div class="tech-item">
            <div class="tech-logo api">
              <img src="../../assets/api.png" alt="PokéAPI" width="50" height="50" />
            </div>
            <h4>PokéAPI</h4>
            <p>REST API</p>
          </div>
        </div>
      </section>

      <!-- Code Example Section -->
      <section class="code-section">
        <h2 class="section-title">Destaques do Código</h2>

        <div class="code-examples">
          <div class="code-card">
            <h4>Busca Reativa</h4>
            <pre><code>const pokemonsFiltrados = computed(() => {
  if (!searchPokemon.value) {
    return pokemons.value;
  }
  
  return pokemons.value.filter((pokemon) => {
    return pokemon.name
      .toLowerCase()
      .includes(searchPokemon.value.toLowerCase());
  });
});</code></pre>
          </div>

          <div class="code-card">
            <h4>Fetch Otimizado</h4>
            <pre><code>const detalhes = await Promise.all(
  data.results.map(async (pokemon) => {
    const res = await fetch(pokemon.url);
    const dados = await res.json();
    return {
      id: dados.id,
      name: dados.name,
      types: dados.types,
      img: dados.sprites.front_default
    };
  })
);</code></pre>
          </div>
        </div>
      </section>

      <!-- Footer CTA -->
      <section class="cta-section">
        <h2>Pronto para explorar?</h2>
        <p>Volte para a home e descubra todos os Pokémons!</p>
        <router-link to="/" class="cta-button"> Ver Pokédex  </router-link>
      </section>
    </div>
  </Default>
</template>

<script setup>
import Default from "@/layouts/default.vue";
</script>

<style scoped>
.about-page {
  width: 100%;
  padding: 20px 0 60px;
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 60px 20px;
  position: relative;
  margin-bottom: 60px;
}

.pokeball-decoration {
  width: 120px;
  height: 120px;
  margin: 0 auto 30px;
  position: relative;
}

.pokeball-top {
  width: 120px;
  height: 60px;
  background: linear-gradient(to bottom, #ff0000, #cc0000);
  border-radius: 120px 120px 0 0;
}

.pokeball-middle {
  width: 120px;
  height: 8px;
  background: #333;
  position: relative;
}

.pokeball-middle::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  background: white;
  border: 8px solid #333;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.pokeball-bottom {
  width: 120px;
  height: 60px;
  background: linear-gradient(to top, #f0f0f0, #ffffff);
  border-radius: 0 0 120px 120px;
}

.hero-title {
  font-size: 48px;
  font-weight: 900;
  color: #ffcb05;
  text-shadow: -3px -3px 0 #2e5fa3, 3px -3px 0 #2e5fa3, -3px 3px 0 #2e5fa3,
    3px 3px 0 #2e5fa3;
  margin: 0 0 16px 0;
  font-style: italic;
}

.hero-subtitle {
  font-size: 20px;
  color: #666;
  margin: 0;
}

/* Features Section */
.features-section {
  margin-bottom: 80px;
}

.section-title {
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #333;
  margin: 0 0 40px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.feature-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  border-top: 4px solid;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.feature-card.type-electric {
  border-top-color: #eed535;
}

.feature-card.type-fire {
  border-top-color: #fd7d24;
}

.feature-card.type-psychic {
  border-top-color: #f366b9;
}

.feature-card.type-water {
  border-top-color: #4592c4;
}

.feature-card.type-grass {
  border-top-color: #9bcc50;
}

.feature-card.type-dragon {
  border-top-color: #f16e57;
}

.feature-icon {
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-card h3 {
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin: 0 0 12px 0;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
  margin: 0 0 16px 0;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 4px 12px;
  background: #f0f0f0;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  color: #666;
}

/* Tech Stack Section */
.tech-section {
  background: white;
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 80px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.tech-item {
  text-align: center;
}

.tech-logo {
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: 900;
}

.tech-logo.vue {
  background: linear-gradient(135deg, #42b883, #35495e);
}

.tech-logo.pinia {
  background: linear-gradient(135deg, #ffd859, #ffc107);
}

.tech-logo.router {
  background: linear-gradient(135deg, #4fc08d, #35495e);
}

.tech-logo.api {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.tech-item h4 {
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px 0;
}

.tech-item p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

/* Code Section */
.code-section {
  margin-bottom: 80px;
}

.code-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
}

.code-card {
  background: #1e1e1e;
  border-radius: 12px;
  padding: 24px;
  overflow: hidden;
}

.code-card h4 {
  color: white;
  margin: 0 0 16px 0;
  font-size: 18px;
}

.code-card pre {
  margin: 0;
  overflow-x: auto;
}

.code-card code {
  color: #9cdcfe;
  font-family: "Courier New", monospace;
  font-size: 14px;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 20px;
  color: white;
}

.cta-section h2 {
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 16px 0;
}

.cta-section p {
  font-size: 18px;
  margin: 0 0 32px 0;
  opacity: 0.9;
}

.cta-button {
  display: inline-block;
  padding: 16px 40px;
  background: white;
  color: #667eea;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  border-radius: 30px;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

/* Responsividade */
@media (max-width: 768px) {
  .hero-title {
    font-size: 32px;
  }

  .section-title {
    font-size: 28px;
  }

  .features-grid,
  .code-examples {
    grid-template-columns: 1fr;
  }

  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>