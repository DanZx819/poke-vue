# PokeVue

Uma Pokédex moderna construída com Vue 3, utilizando a PokéAPI para exibir informações sobre os 151 Pokémons da primeira geração.

## Sobre o Projeto

PokeVue é uma aplicação web responsiva que permite aos usuários explorar e buscar Pokémons de forma interativa. O projeto foi desenvolvido como demonstração das capacidades do Vue 3, incluindo Composition API, gerenciamento de estado com Pinia e roteamento dinâmico.

## Tecnologias Utilizadas

- **Vue 3** - Framework JavaScript progressivo com Composition API
- **Pinia** - Gerenciamento de estado oficial para Vue 3
- **Vue Router** - Navegação e roteamento file-based
- **PokéAPI** - API REST pública para dados de Pokémon
- **Vite** - Build tool e servidor de desenvolvimento
- **CSS Grid & Flexbox** - Layout responsivo

## Funcionalidades

### Busca em Tempo Real
Sistema de busca dinâmica que filtra os Pokémons enquanto você digita, utilizando computed properties e reatividade do Vue.

### Integração com PokéAPI
Consumo completo da API pública PokéAPI, buscando dados de 151 Pokémons incluindo:
- Nome e ID
- Tipos (Grass, Fire, Water, etc.)
- Sprites oficiais
- Informações detalhadas

### Gerenciamento de Estado
Utilização do Pinia para gerenciar estado global da aplicação, incluindo:
- Lista de Pokémons
- Estado de busca
- Filtros aplicados

### Design Responsivo
Interface adaptável para diferentes tamanhos de tela:
- Desktop: Grid de múltiplas colunas
- Tablet: Layout adaptativo
- Mobile: Visualização otimizada em coluna única

### Componentes Reutilizáveis
Arquitetura modular com componentes Vue isolados:
- PokemonCard: Card individual de exibição
- SearchBar: Componente de busca
- Layout Default: Template de página padrão

## Estrutura do Projeto

```
src/
├── assets/          # Recursos estáticos (imagens, ícones SVG)
├── components/      # Componentes Vue reutilizáveis
│   ├── PokemonCard.vue
│   └── SearchBar.vue
├── layouts/         # Layouts de página
│   └── default.vue
├── pages/           # Páginas da aplicação
│   ├── index.vue
│   └── about
|     └──about.vue
├── stores/          # Stores Pinia
│   └── pokemon.js
└── router/          # Configuração de rotas
```

## Instalação

### Pré-requisitos
- Node.js versão 16 ou superior
- npm ou yarn

### Passos

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/poke-vue.git
cd poke-vue
```

2. Instale as dependências
```bash
npm install
```

3. Execute o servidor de desenvolvimento
```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:5173`

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza build de produção localmente
- `npm run lint` - Executa o linter

## Destaques de Código

### Busca Reativa com Computed

```javascript
const pokemonsFiltrados = computed(() => {
  if (!searchPokemon.value) {
    return pokemons.value;
  }
  
  return pokemons.value.filter((pokemon) => {
    return pokemon.name
      .toLowerCase()
      .includes(searchPokemon.value.toLowerCase());
  });
});
```

### Fetch Otimizado com Promise.all

```javascript
const detalhes = await Promise.all(
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
);
```

## Estrutura de Componentes

### PokemonCard
Componente responsável por exibir informações individuais de cada Pokémon.

**Props:**
- `pokemon` (Object): Objeto contendo dados do Pokémon

**Características:**
- Exibição de tipos com cores específicas
- Imagem do sprite oficial
- Número e nome do Pokémon
- Efeito hover interativo

### SearchBar
Componente de busca com v-model bidirecional.

**Props:**
- `modelValue` (String): Valor do input de busca

**Events:**
- `update:modelValue`: Emitido quando o valor da busca muda

## Store Pinia

O store Pokemon gerencia o estado global da aplicação:

**State:**
- `pokemons`: Array de todos os Pokémons
- `searchPokemon`: String de busca atual

**Actions:**
- `fetchPokemons()`: Busca dados da PokéAPI

**Getters:**
- `pokemonsFiltrados`: Retorna Pokémons filtrados pela busca

## Tipos de Pokémon Suportados

A aplicação suporta todos os 18 tipos oficiais com cores específicas:
- Normal, Fire, Water, Electric
- Grass, Ice, Fighting, Poison
- Ground, Flying, Psychic, Bug
- Rock, Ghost, Dragon, Dark
- Steel, Fairy

## API Utilizada

**PokéAPI**
- Endpoint: `https://pokeapi.co/api/v2/pokemon`
- Documentação: https://pokeapi.co/docs/v2
- Limite: 151 Pokémons (primeira geração)

## Navegação

O projeto utiliza Vue Router com sistema de rotas file-based:
- `/` - Página principal com listagem de Pokémons
- `/about` - Página sobre o projeto

## Layout System

Utiliza sistema de layouts com componente Default que inclui:
- Header fixo com navegação
- Menu lateral hambúrguer
- Footer informativo
- Background com decoração de Pokébolas

## Performance

Otimizações implementadas:
- Fetch paralelo com Promise.all
- Computed properties para filtragem eficiente
- Lazy loading de imagens
- CSS scoped para evitar conflitos de estilo

## Browser Support

- Chrome (última versão)
- Firefox (última versão)
- Safari (última versão)
- Edge (última versão)

## Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Autor

Desenvolvido como projeto educacional demonstrando conceitos modernos de Vue 3.

## Agradecimentos

- PokéAPI por fornecer a API pública gratuita
- Nintendo e The Pokémon Company pelos recursos originais
- Comunidade Vue.js pelas ferramentas e documentação

## Recursos Adicionais

- [Documentação Vue 3](https://vuejs.org/)
- [Documentação Pinia](https://pinia.vuejs.org/)
- [Documentação PokéAPI](https://pokeapi.co/)
- [Vue Router Docs](https://router.vuejs.org/)

## Contato

Para questões ou sugestões, abra uma issue no repositório do projeto.
