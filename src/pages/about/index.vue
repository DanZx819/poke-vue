<template>
  <div class="about-page">
    <div class="about-container">
      <h2 class="about-title">Sobre a PokéDex</h2>
      
      <div class="about-content">
        <div class="feature-card">
          <div class="feature-icon">🎮</div>
          <h3>O que é?</h3>
          <p>
            Uma enciclopédia digital de Pokémons com informações detalhadas 
            sobre cada criatura do universo Pokémon.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🔍</div>
          <h3>Explore</h3>
          <p>
            Busque por nome, tipo ou número. Descubra características, 
            habilidades e curiosidades de cada Pokémon.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>Tecnologia</h3>
          <p>
            Desenvolvido com Vue 3, design moderno e responsivo 
            para a melhor experiência em qualquer dispositivo.
          </p>
        </div>
      </div>

      <div class="credits">
        <p>Dados fornecidos pela <a href="https://pokeapi.co" target="_blank">PokéAPI</a></p>
        <p class="copyright">Pokémon © Nintendo/Game Freak</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

.about-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
}

.about-container {
  background: white;
  border-radius: 32px;
  padding: 4rem 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-title {
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: -2px;
}

.about-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.feature-card {
  background: linear-gradient(135deg, #fef3c7 0%, #fef9e7 100%);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(234, 88, 12, 0.15);
  border-color: rgba(234, 88, 12, 0.2);
}

.feature-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.feature-card h3 {
  font-size: 1.75rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 1rem;
}

.feature-card p {
  font-size: 1rem;
  color: #475569;
  line-height: 1.7;
  font-weight: 400;
}

.credits {
  text-align: center;
  padding-top: 2rem;
  border-top: 2px solid #e2e8f0;
}

.credits p {
  color: #64748b;
  font-size: 1rem;
  margin: 0.5rem 0;
}

.credits a {
  color: #ea580c;
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s;
}

.credits a:hover {
  color: #dc2626;
  text-decoration: underline;
}

.copyright {
  font-size: 0.9rem;
  color: #94a3b8;
}

@media (max-width: 768px) {
  .about-page {
    padding: 1rem;
  }

  .about-container {
    padding: 3rem 2rem;
  }

  .about-title {
    font-size: 2.5rem;
  }

  .about-content {
    grid-template-columns: 1fr;
  }

  .feature-card {
    padding: 2rem 1.5rem;
  }
}
</style>